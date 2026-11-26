import json, re, html, subprocess, time

URL = "https://esquelas.diariovasco.com/"
ELGOIBAR = "https://esquelas.diariovasco.com/esquelas/gipuzkoa/elgoibar.html"
MESES = {"enero":1,"febrero":2,"marzo":3,"abril":4,"mayo":5,"junio":6,"julio":7,"agosto":8,
         "septiembre":9,"setiembre":9,"octubre":10,"noviembre":11,"diciembre":12}

def fetch(url):
    for a in range(3):
        p = subprocess.run(["curl", "-sL", "--max-time", "30",
                            "-A", "Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36", url],
                           capture_output=True)
        if p.returncode == 0 and len(p.stdout) > 5000:
            return p.stdout.decode("utf-8", "replace")
        time.sleep(3)
    raise SystemExit("no html")

def fecha_es(txt):
    m = re.search(r"(\d{1,2}) de ([a-zúéíóúñ]+) de (\d{4})", txt.lower())
    if m and m.group(2) in MESES:
        return "%02d/%02d/%s" % (int(m.group(1)), MESES[m.group(2)], m.group(3))
    return None

def parse(h, base):
    marks = []
    for m in re.finditer(r'<p class="v-p">\s*([^<]+?)\s*</p>', h):
        f = fecha_es(html.unescape(m.group(1)))
        if f:
            marks.append((m.start(), "f", f))
    for m in re.finditer(r'href="/esquelas/[a-z-]+/[a-z0-9-]+\.html"\s+title="([^"]*)"', h):
        marks.append((m.start(), "t", html.unescape(m.group(1)).strip()))
    for m in re.finditer(r'href="(/necrologicas/[^"]+)"\s+title="([^"]*)"', h):
        end = h.find("</a>", m.start())
        seg = h[m.start():end if end > 0 else m.start() + 600]
        cm = re.search(r"(\d+)\s+esquela", seg)
        marks.append((m.start(), "e", {
            "u": base + m.group(1),
            "n": re.sub(r"\s+", " ", html.unescape(m.group(2))).strip(),
            "k": int(cm.group(1)) if cm else 1,
        }))
    marks.sort()
    fecha, mun, out = None, None, []
    for pos, kind, val in marks:
        if kind == "f" and not fecha:
            fecha = val
        elif kind == "t":
            mun = val
        elif kind == "e" and mun and val["n"]:
            val["mun"] = mun
            out.append(val)
    return fecha, out

h = fetch(URL)
fecha, es = parse(h, "https://esquelas.diariovasco.com")

h2 = fetch(ELGOIBAR)
f2, es2 = parse(h2, "https://esquelas.diariovasco.com")
if f2 == fecha:
    seen = {e["u"] for e in es}
    es += [e for e in es2 if e["u"] not in seen]

json.dump({"fecha": fecha or "", "es": es}, open("esquelas.json", "w"), ensure_ascii=False)
print(len(es), "esquelas", fecha)
print(json.dumps(es[:3], ensure_ascii=False))
