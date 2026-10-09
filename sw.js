const C='kalea-v43';
const SHELL=['app.html','manifest.webmanifest','icons/icon-192.png','icons/apple-180.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
const put=(req,res)=>{if(res&&res.ok){const cl=res.clone();caches.open(C).then(c=>c.put(req,cl))}return res};
self.addEventListener('fetch',e=>{
 const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
 if(r.mode==='navigate'||u.pathname.endsWith('.json')){
  // red primero (siempre lo último), con tope de 1,5 s y copia guardada si no hay red
  e.respondWith(new Promise(ok=>{let done=false;const fb=()=>caches.match(r,{ignoreSearch:true}).then(m=>{if(!done&&m){done=true;ok(m)}});
   const t=setTimeout(fb,1500);
   fetch(r).then(res=>{clearTimeout(t);put(r,res.clone());if(!done){done=true;ok(res)}}).catch(()=>{clearTimeout(t);caches.match(r,{ignoreSearch:true}).then(m=>{if(!done){done=true;ok(m||Response.error())}})})}));return}
 // archivos con versión (?v=): de la copia guardada al instante
 e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>put(r,res))))
});
