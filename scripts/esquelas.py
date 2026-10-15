import json, re, html, subprocess, time, sys

URL = "https://canales.diariovasco.com/esquelas/diario/"
BASE = URL

def fetch():
    for a in range(3):
        p = subprocess.run(["curl", "-s", "--max-time", "30", "-A", "Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36", URL], capture_output=True)
        if p.returncode == 0 and len(p.stdout) > 5000:
            return p.stdout.decode("utf-8", "replace")
        time.sleep(3)
    raise SystemExit("no html")

h = fetch()

marks = [(m.start(), "t", html.unescape(m.group(1)).title()) for m in re.finditer(r'<h3><a href="[a-z0-9-]+/index\.htm">([^<]+)</a></h3>', h)]
marks += [(m.start(), "p", m.group(1)) for m in re.finditer(r'<div class="persona">\s*<p><a href="([^"]+)"', h)]
marks.sort()

es = []
cur = None
fecha = None
for pos, kind, val in marks:
    if kind == "t":
        cur = val
    else:
        m = re.match(r"(\d{4}-\d{2}-\d{2})/", val)
        if m and not fecha:
            fecha = m.group(1)
        end = h.find("</div>", pos)
        seg = h[pos:end if end > 0 else pos + 500]
        cm = re.search(r"(\d+)\s+esquela", seg)
        name = ""
        nm = re.search(r'title="Esquela de ([^"]+)"', seg)
        if nm:
            name = html.unescape(nm.group(1)).strip()
        if not cur or not name:
            continue
        es.append({"n": name, "mun": cur, "u": BASE + val, "k": int(cm.group(1)) if cm else 1})

fecha_fmt = ""
if fecha:
    y, mo, d = fecha.split("-")
    fecha_fmt = f"{d}/{mo}/{y}"
out = {"fecha": fecha_fmt, "es": es}
json.dump(out, open("esquelas.json", "w"), ensure_ascii=False)
print(len(es), "esquelas", fecha_fmt)
print(json.dumps(es[:3], ensure_ascii=False))
