#!/usr/bin/env python3
"""Comprobación rápida sin dependencias: JSON de datos, archivos que usa la app y sintaxis de scripts."""
import glob, json, os, py_compile, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
fails = []

def check(name, fn):
    try:
        fn()
    except Exception as e:
        fails.append("%s: %s" % (name, e))

def json_keys(path, *keys):
    def fn():
        with open(path, encoding="utf-8") as f:
            data = json.load(f)
        for k in keys:
            if k not in data:
                raise KeyError(k)
    return fn

check("news.json", json_keys("news.json", "items"))
check("lanbide.json", json_keys("lanbide.json", "items"))
check("gas.json", json_keys("gas.json", "fecha", "est"))
check("esquelas.json", json_keys("esquelas.json", "fecha", "es"))

# Todos los archivos locales que referencian app.html y el service worker.
refs = set(re.findall(r'(?:src|href)="([^"?]+)"', open("app.html", encoding="utf-8").read()))
refs |= {"sw.js", "news.json", "lanbide.json", "gas.json", "esquelas.json"}
for ref in sorted(refs):
    if ref.startswith("http"):
        continue
    check("archivo " + ref, lambda r=ref: open(r, "rb").close())

for script in sorted(glob.glob("scripts/*.py")):
    check("sintaxis " + script, lambda s=script: py_compile.compile(s, doraise=True))

if fails:
    print("FALLOS:")
    for f in fails:
        print(" -", f)
    sys.exit(1)
print("OK: JSON, archivos de la app y scripts correctos")
