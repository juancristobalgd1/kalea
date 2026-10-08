#!/usr/bin/env python3
"""Actualiza news.json (noticias del País Vasco) y lanbide.json (ofertas de la comarca)."""
import json, re, html, urllib.request, xml.etree.ElementTree as ET
from email.utils import parsedate_to_datetime
UA={'User-Agent':'Mozilla/5.0 (Kalea news bot)'}
FEEDS=[('Diario Vasco','https://www.diariovasco.com/rss/2.0/?section=gipuzkoa'),
       ('Diario Vasco','https://www.diariovasco.com/rss/2.0/portada'),
       ('Naiz','https://www.naiz.eus/es/rss/news.rss')]
LOCAL=['elgoibar','eibar','debabarrena','deba','mendaro','soraluze','mutriku','ermua','bergara','azkoitia','azpeitia']
def get(u,t=25):
    return urllib.request.urlopen(urllib.request.Request(u,headers=UA),timeout=t).read()
def clean(x): return re.sub(r'\s+',' ',html.unescape(re.sub(r'<[^>]+>',' ',x or ''))).strip()
out=[];seen=set()
for src,u in FEEDS:
    try: root=ET.fromstring(get(u))
    except Exception as e: print('feed fail',u,e); continue
    for it in root.iter('item'):
        g=lambda tag:(it.findtext(tag) or '').strip()
        title=clean(g('title')); link=g('link')
        if not title or link in seen: continue
        seen.add(link); desc=g('description'); img=''
        for el in it:
            tag=el.tag.split('}')[-1]
            if tag in('enclosure','content','thumbnail') and el.attrib.get('url') and not img: img=el.attrib['url']
        m=re.search(r'<img[^>]+src="([^"]+)"',desc)
        if not img and m: img=m.group(1)
        try: ts=int(parsedate_to_datetime(g('pubDate')).timestamp())
        except Exception: ts=0
        txt=clean(desc); low=(title+' '+txt).lower()
        out.append({'t':title,'u':link,'s':src,'ts':ts,'img':img,'d':txt[:220],'local':any(w in low for w in LOCAL)})
out.sort(key=lambda x:(x['local'],x['ts']),reverse=True)
json.dump({'items':out[:40]},open('news.json','w'),ensure_ascii=False)
print('news',len(out),'local',sum(x['local'] for x in out))
try:
    raw=get('https://apps.lanbide.euskadi.net/apps/OF_OFERTAS_ODE_JSON',40).decode('utf-8','ignore')
    data=json.loads(raw[raw.index('['):raw.rindex(']')+1])
    Z=['ELGOIBAR','EIBAR','SORALUZE','PLACENCIA','MENDARO','DEBA','MUTRIKU','ERMUA','MALLABIA']
    of=[o for o in data if any(z in (o.get('municipio') or '').upper() for z in Z)]
    json.dump({'items':of},open('lanbide.json','w'),ensure_ascii=False); print('lanbide',len(of))
except Exception as e: print('lanbide fail',e)
