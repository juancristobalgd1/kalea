import json, math, subprocess, tempfile, os

URL = "https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroProvincia/{pid}"
CENTER = (43.2163, -2.4136)  # Elgoibar
RMAX = 25.0  # km

def haversine(a, b):
    R = 6371.0
    dlat = math.radians(b[0]-a[0]); dlon = math.radians(b[1]-a[1])
    x = math.sin(dlat/2)**2 + math.cos(math.radians(a[0]))*math.cos(math.radians(b[0]))*math.sin(dlon/2)**2
    return 2*R*math.asin(math.sqrt(x))

def num(s):
    try:
        return round(float(s.replace(",", ".")), 3)
    except Exception:
        return None

def run(pid):
    with tempfile.NamedTemporaryFile(suffix=".json", delete=False) as t:
        path = t.name
    for attempt in range(3):
        r = subprocess.run(["curl", "-sf", "--max-time", "90", "-o", path, URL.format(pid=pid)])
        if r.returncode == 0 and os.path.getsize(path) > 1000:
            break
    else:
        raise RuntimeError("no se pudo descargar la provincia %s" % pid)
    with open(path, encoding="utf-8") as f:
        data = json.load(f)
    os.unlink(path)
    fecha = data.get("Fecha", "")
    out = []
    for e in data.get("ListaEESSPrecio", []):
        try:
            lat = float(e["Latitud"].replace(",", "."))
            lng = float(e["Longitud (WGS84)"].replace(",", "."))
        except Exception:
            continue
        if haversine(CENTER, (lat, lng)) > RMAX:
            continue
        rec = {"n": e.get("Rótulo", "").strip(), "mun": e.get("Municipio", ""), "dir": e.get("Dirección", ""),
               "cp": e.get("C.P.", ""), "hor": e.get("Horario", ""), "lat": round(lat, 6), "lng": round(lng, 6)}
        for k, f in (("p95", "Precio Gasolina 95 E5"), ("p98", "Precio Gasolina 98 E5"), ("pgo", "Precio Gasoleo A")):
            v = num(e.get(f, ""))
            if v:
                rec[k] = v
        if rec.get("pgo") or rec.get("p95"):
            out.append(rec)
    return fecha, out

fechas = []
est = []
for pid in (20, 48):  # Gipuzkoa, Bizkaia (Ermua/Mallabia)
    try:
        f, o = run(pid)
        if f and f not in fechas:
            fechas.append(f)
        est += o
    except Exception as ex:
        print("prov", pid, "error", ex)
json.dump({"fecha": " · ".join(fechas), "est": est}, open("gas.json", "w"), ensure_ascii=False, separators=(",", ":"))
print(len(est), "estaciones", fechas)
