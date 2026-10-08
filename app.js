const I={
home:'<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
coin:'<circle cx="12" cy="12" r="9"/><path d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.5 0-2.5.8-2.5 2s1 1.7 2.5 2 2.5.8 2.5 2-1 2-2.5 2c-1 0-2-.5-2.5-1.5M12 6.5v1.5M12 16v1.5"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
bell:'<path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10 20a2 2 0 0 0 4 0"/>',
heart:'<path d="M12 20s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z"/>',
chat:'<path d="M21 12a8 8 0 0 1-12 7l-5 1 1-4a8 8 0 1 1 16-4z"/>',
cal:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
bag:'<path d="M5 8h14l-1 12H6zM9 8V6a3 3 0 0 1 6 0v2"/>',
scis:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 7.5L20 18M8.5 16.5L20 6"/>',
phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
pin:'<path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
bolt:'<path d="M13 3L5 14h6l-1 7 8-11h-6z"/>',
town:'<path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-5h6v5"/>',
check:'<path d="M5 12l4 4 10-10"/>',
down:'<path d="M6 9l6 6 6-6"/>',
back:'<path d="M15 6l-6 6 6 6"/>',
qr:'<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 14h2v2M14 18h2v2M18 18h2v2"/>',
story:'<circle cx="12" cy="12" r="9" stroke-dasharray="3 3"/><path d="M12 8v8M8 12h8"/>',
img:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/>',
tag:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.5"/>',
work:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2"/>',
house:'<path d="M4 11l8-6 8 6v9H4z"/><path d="M10 20v-5h4v5"/>',
star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
ver:'<path d="M12 2l2.4 2.1 3.2-.3.8 3.1 2.8 1.6-1.2 3 1.2 3-2.8 1.6-.8 3.1-3.2-.3L12 22l-2.4-2.1-3.2.3-.8-3.1L2.8 15.5 4 12.5 2.8 9.5l2.8-1.6.8-3.1 3.2.3z" fill="currentColor" stroke="none"/><path d="M8.5 12l2.5 2.5 4.5-5" stroke="#1a1206" stroke-width="2.2"/>'
};
const ic=(n,c='')=>`<svg viewBox="0 0 24 24" class="${c}">${I[n]}</svg>`;

let lang='es';
const T={
es:{home:'Inicio',explore:'Explorar',points:'Puntos',profile:'Perfil',flash:'Huecos de última hora',stories:'Historias',feed:'En Elgoibar hoy',reservar:'Reservar',cita:'Pedir cita',pedir:'Pedir',agenda:'Agenda del pueblo',board:'Tablón',see:'Ver todo'},
eu:{home:'Hasiera',explore:'Arakatu',points:'Puntuak',profile:'Profila',flash:'Azken orduko hutsuneak',stories:'Istorioak',feed:'Gaur Elgoibarren',reservar:'Erreserbatu',cita:'Txanda eskatu',pedir:'Eskatu',agenda:'Herriko agenda',board:'Iragarki taula',see:'Dena ikusi'}};
const t=k=>T[lang][k]||k;

const B={
itsasoa:{name:'Taberna Itsasoa',cat:'Bar · Pintxos',img:'assets/bar.jpg',rating:4.7,rev:312,open:'Abierto · cierra a las 23:00',action:'reservar',street:'Kale Nagusia 12',followers:'1.204',
 menu:[['Pintxo de txangurro','Con mahonesa casera','2,80 €'],['Gilda clásica','Anchoa, guindilla, aceituna','2,20 €'],['Txakoli (copa)','Getariako Txakolina','2,50 €'],['Tortilla de bacalao','Ración','9,50 €']]},
mendi:{name:'Mendi Jatetxea',cat:'Restaurante · Cocina vasca',img:'assets/restaurante.jpg',rating:4.5,rev:428,open:'Abierto · cocina hasta 23:00',action:'reservar',street:'Plaza Berria 3',followers:'2.310',
 menu:[['Menú del día','Primero, segundo, postre y bebida','16,00 €'],['Chuletón a la brasa','1 kg, para dos','48,00 €'],['Merluza en salsa verde','Con almejas','22,00 €'],['Goxua','Postre de la casa','6,00 €']]},
goxo:{name:'Goxo Okindegia',cat:'Panadería · A domicilio',img:'assets/panaderia.jpg',rating:4.8,rev:196,open:'Abierto · cierra a las 20:00',action:'pedir',street:'Errota Kalea 7',followers:'986',
 menu:[['Croissant de mantequilla','Recién hecho','1,40 €'],['Pan de masa madre','750 g','3,90 €'],['Pastel vasco','Crema o cereza','14,00 €'],['Caja sorpresa','Lo que sobra del día','3,00 €']]},
ile:{name:'Ile Studio',cat:'Peluquería',img:'assets/peluqueria.jpg',rating:4.9,rev:88,open:'Abierto · cierra a las 20:00',action:'cita',street:'Iturri Kalea 5',followers:'742',
 menu:[['Corte y peinado','45 min','28,00 €'],['Color completo','90 min','55,00 €'],['Mechas','120 min','70,00 €'],['Tratamiento hidratante','30 min','20,00 €']]},
txema:{name:'Txema Barber',cat:'Barbería',img:'assets/barber.jpg',rating:4.8,rev:64,open:'Abierto · cierra a las 20:00',action:'cita',street:'Zubi Kalea 2',followers:'531',
 menu:[['Corte clásico','30 min','15,00 €'],['Corte y barba','45 min','22,00 €'],['Arreglo de barba','20 min','10,00 €'],['Corte infantil','Menores de 12','12,00 €']]},
etxea:{name:'Pizzeria Etxea',cat:'Pizzería · A domicilio',img:'assets/pizza.jpg',rating:4.4,rev:251,open:'Abierto · reparto hasta 23:30',action:'pedir',street:'Geltoki Kalea 9',followers:'1.877',
 menu:[['Pizza margarita','Mediana','9,50 €'],['Pizza Elgoibar','Idiazabal, txistorra, piparras','12,50 €'],['Pizza barbacoa','Mediana','11,50 €'],['Tiramisú','Casero','4,50 €']]}
};
const FLASH=[
 {b:'mendi',txt:'Mesa para 4 · hoy 21:30',off:'-15%',left:'quedan 2'},
 {b:'txema',txt:'Corte · hoy 17:30',off:'-20%',left:'1 hueco'},
 {b:'goxo',txt:'Caja sorpresa · recoge 19:45',off:'-50%',left:'quedan 5'},
 {b:'ile',txt:'Peinado · mañana 10:00',off:'-10%',left:'1 hueco'}];
const POSTS=[
 {b:'itsasoa',time:'hace 12 min',txt:'Este jueves pintxo pote de 19:00 a 22:00. Txakoli y pintxo por 3 €. Reserva tu sitio en la barra desde Kalea y suma puntos.',likes:212,com:20},
 {b:'goxo',time:'hace 40 min',txt:'Croissants recién salidos del horno. Pídelos antes de las 8:30 y te los llevamos a casa para el desayuno.',likes:158,com:12},
 {b:'ile',time:'hace 2 h',txt:'Nuevo color de otoño. Esta semana, tratamiento hidratante gratis con cualquier color reservado en la app.',likes:96,com:8},
 {b:'etxea',time:'hace 3 h',txt:'Llega la Pizza Elgoibar: Idiazabal, txistorra y piparras. Reparto gratis en todo el pueblo los viernes.',likes:301,com:41}];
const order=Object.keys(B);
const ACT={reservar:['reservar','cal'],cita:['cita','scis'],pedir:['pedir','bag']};

const $=s=>document.querySelector(s);
const view=$('#view');
let tab='home',liked=new Set(),cat='Todos',points=1240;

function nav(){
 const tabs=[['home','home'],['explore','search'],['plus','plus'],['points','coin'],['profile','user']];
 $('#tabbar').innerHTML=tabs.map(([k,i])=>k==='plus'?`<button class="plus" data-tab="publish" aria-label="Publicar">${ic('plus')}</button>`:`<button class="tab ${tab===k?'on':''}" data-tab="${k}">${ic(i)}<span>${t(k)}</span></button>`).join('');
}
function top(){return `<div class="top"><button class="place"><div><small>Tu pueblo</small>Elgoibar</div>${ic('down')}</button><div class="icons"><button class="ib" data-tab="explore">${ic('search')}</button><button class="ib" onclick="toast('3 huecos nuevos cerca de ti')">${ic('bell')}<i class="dot"></i></button></div></div>`}
function stories(){return `<div class="stories">${order.map((k,i)=>`<button class="st" data-story="${k}"><div class="ring ${i>3?'seen':''}"><img src="${B[k].img}" alt=""></div><span>${B[k].name.split(' ')[0]==='Taberna'?'Itsasoa':B[k].name.split(' ')[0]}</span></button>`).join('')}</div>`}
function flash(){return `<div class="sec"><h3 class="live">${t('flash')}</h3><a href="#" data-tab="explore">${t('see')}</a></div><div class="flash">${FLASH.map((f,i)=>`<button class="fc" data-flash="${i}"><div class="im" style="background-image:url(${B[f.b].img})"><span class="off">${f.off}</span><span class="left">${f.left}</span></div><div class="bd"><b>${f.txt}</b><small>${B[f.b].name}</small></div></button>`).join('')}</div>`}
function muni(){return `<div class="muni"><div class="ic">${ic('town')}</div><div><b>Bonos del comercio local<span class="tag">Ejemplo</span></b><p>Tu ayuntamiento te regala 10 € para gastar en cualquier negocio de Kalea.</p></div></div>`}
function post(p){const b=B[p.b],a=ACT[b.action],l=liked.has(p.b);return `<article class="post"><div class="ph"><img class="av" src="${b.img}" alt=""><button class="nm" data-biz="${p.b}"><b>${b.name} ${ic('ver','ver')}</b><small>${p.time} · ${b.street}</small></button><span style="color:var(--muted)">•••</span></div><img class="pimg" src="${b.img}" alt=""><div class="pa"><button class="pill ${l?'liked':''}" data-like="${p.b}">${ic('heart')} ${p.likes+(l?1:0)}</button><span class="pill">${ic('chat')} ${p.com}</span><button class="cta" data-act="${p.b}">${ic(a[1])} ${t(a[0])}</button></div><p>${p.txt}</p></article>`}
function home(){view.innerHTML=top()+stories()+flash()+muni()+`<div class="sec"><h3>${t('feed')}</h3></div>`+POSTS.map(post).join('')}

function explore(){
 const cats=['Todos','Bares','Restaurantes','Peluquerías','Barberías','Panaderías','A domicilio'];
 const match=k=>{const c=B[k].cat;return cat==='Todos'||(cat==='Bares'&&c.includes('Bar ')||c.startsWith('Bar'))&&cat==='Bares'||(cat==='Restaurantes'&&c.includes('Restaurante'))||(cat==='Peluquerías'&&c.includes('Peluquería'))||(cat==='Barberías'&&c.includes('Barbería'))||(cat==='Panaderías'&&c.includes('Panadería'))||(cat==='A domicilio'&&c.includes('domicilio'))};
 view.innerHTML=`<div class="top"><div class="place">${t('explore')}</div></div><label class="search">${ic('search')}<input placeholder="Bares, peluquerías, pizza..."></label><div class="chips">${cats.map(c=>`<button class="chip ${c===cat?'on':''}" data-cat="${c}">${c}</button>`).join('')}</div>`+
 order.filter(match).map(k=>{const b=B[k],a=ACT[b.action];return `<button class="biz" data-biz="${k}"><img src="${b.img}" alt=""><div class="i"><b>${b.name}</b><small>${b.cat}</small><small><span class="star">★ ${b.rating}</span> (${b.rev}) · <span class="open">${b.open.split(' · ')[0]}</span></small></div><span class="mini">${t(a[0])}</span></button>`}).join('')+
 `<div class="sec"><h3>${t('agenda')}</h3></div><div class="row">
 <div class="ev"><div class="date"><small>sáb</small><b>17</b></div><div><p>Mercado de productores</p><span>Plaza · 10:00 a 14:00</span></div></div>
 <div class="ev"><div class="date"><small>vie</small><b>23</b></div><div><p>Ruta de pintxos de otoño</p><span>12 bares · 19:00</span></div></div>
 <div class="ev"><div class="date"><small>dom</small><b>25</b></div><div><p>Concierto de la banda</p><span>Kultur etxea · 18:00</span></div></div></div>
 <div class="sec"><h3>${t('board')}</h3></div>
 <div class="board"><div class="k">${ic('work')} Empleo</div><b>Camarero/a fines de semana</b><small>Taberna Itsasoa · Elgoibar · publicado hoy</small></div>
 <div class="board"><div class="k">Empleo</div><b>Ayudante de peluquería, media jornada</b><small>Ile Studio · hace 2 días</small></div>
 <div class="board"><div class="k">Pisos · con Pisder</div><b>Piso de 3 habitaciones con balcón</b><small>Elgoibar · 165.000 € · ver en Pisder</small></div>`;
}

function profile(k){
 const b=B[k],a=ACT[b.action];
 view.innerHTML=`<div class="cover" style="background-image:url(${b.img})"><button class="back" data-tab="${tab}">${ic('back')}</button></div><div class="prof"><img class="big" src="${b.img}" alt=""><h2>${b.name} ${ic('ver','ver')}</h2><div class="meta">${b.cat} · <span class="star">★ ${b.rating}</span> (${b.rev}) · <span class="open">${b.open}</span></div><span class="web">${ic('globe')} kalea.app/elgoibar/${k}</span>
 <div class="acts"><button class="cta" data-act="${k}">${ic(a[1])} ${t(a[0])}</button><button class="ghost" onclick="toast('Llamando a ${b.name}...')">${ic('phone')}</button><button class="ghost" onclick="toast('${b.street}, Elgoibar')">${ic('pin')}</button></div>
 <div class="stats"><div><b>${b.followers}</b><small>vecinos le siguen</small></div><div><b>${b.rev}</b><small>reseñas</small></div><div><b>+5%</b><small>en puntos</small></div></div>
 <div class="tabs2"><button class="on" data-pt="menu">${b.action==='cita'?'Servicios':'Carta'}</button><button data-pt="pubs">Publicaciones</button><button data-pt="info">Info</button></div><div id="pt"></div></div>`;
 const pt=w=>{$('#pt').innerHTML=w==='menu'?b.menu.map(m=>`<div class="menu-i"><div>${m[0]}<small>${m[1]}</small></div><b>${m[2]}</b></div>`).join(''):w==='pubs'?`<div class="grid3">${order.concat(order).slice(0,9).map(x=>`<img src="${B[x].img}" alt="">`).join('')}</div>`:`<div class="hours">${b.street}, 20870 Elgoibar<br>Lunes a jueves: 9:00 a 22:00<br>Viernes y sábado: 9:00 a 1:00<br>Domingo: 10:00 a 16:00<br><br>Esta página se crea sola al unirse a Kalea y sale en Google.</div>`;
  document.querySelectorAll('[data-pt]').forEach(x=>x.classList.toggle('on',x.dataset.pt===w))};
 document.querySelectorAll('[data-pt]').forEach(x=>x.onclick=()=>pt(x.dataset.pt));pt('menu');view.scrollTop=0;
}

function pointsV(){
 view.innerHTML=`<div class="top"><div class="place">${t('points')}</div></div><div class="wallet"><small>Puntos Kalea</small><div class="pts">${points.toLocaleString('es-ES')}</div><small>= ${(points/100).toFixed(2).replace('.',',')} € para gastar en Elgoibar</small><div class="qr">${ic('qr')}</div></div>
 <div class="sec"><h3>Cómo ganar puntos</h3></div><div class="list">
 <div class="li"><div class="ic">${ic('cal')}</div><div class="t"><b>Reserva o pide cita</b><small>En cualquier negocio de Kalea</small></div><span class="v">+50</span></div>
 <div class="li"><div class="ic">${ic('bag')}</div><div class="t"><b>Compra en el comercio local</b><small>5 puntos por cada euro</small></div><span class="v">+5/€</span></div>
 <div class="li"><div class="ic">${ic('star')}</div><div class="t"><b>Deja una reseña</b><small>Después de tu visita</small></div><span class="v">+20</span></div>
 <div class="li"><div class="ic">${ic('user')}</div><div class="t"><b>Invita a un vecino</b><small>Cuando haga su primera reserva</small></div><span class="v">+200</span></div></div>
 ${muni()}
 <div class="sec"><h3>Últimos movimientos</h3></div><div class="list">
 <div class="li"><div class="ic">${ic('cal')}</div><div class="t"><b>Reserva en Mendi Jatetxea</b><small>Ayer</small></div><span class="v">+50</span></div>
 <div class="li"><div class="ic">${ic('bag')}</div><div class="t"><b>Pedido en Goxo Okindegia</b><small>Martes</small></div><span class="v">+42</span></div>
 <div class="li"><div class="ic">${ic('coin')}</div><div class="t"><b>Canjeado en Txema Barber</b><small>Lunes</small></div><span class="v" style="color:var(--muted)">-500</span></div></div>`;
}

let ptype='flash';
function publish(){
 const types=[['flash','bolt','Hueco de última hora','Llena una mesa o cita libre'],['story','story','Historia','24 horas en el inicio'],['post','img','Publicación','Foto con botón de reservar'],['offer','tag','Oferta','Descuento para vecinos']];
 view.innerHTML=`<div class="top"><div class="place">Publicar</div><span class="web" style="margin:0">Modo negocio</span></div><div class="pub">${types.map(x=>`<button class="${ptype===x[0]?'on':''}" data-ptype="${x[0]}"><div class="ic">${ic(x[1])}</div><b>${x[2]}</b><small>${x[3]}</small></button>`).join('')}</div>
 <div class="preview"><b>${ptype==='flash'?'Nuevo hueco de última hora':ptype==='story'?'Nueva historia':ptype==='post'?'Nueva publicación':'Nueva oferta'}</b>
 <label>Qué ofreces</label><input class="field" value="${ptype==='flash'?'Mesa para 4 esta noche':ptype==='offer'?'2x1 en pintxos los jueves':'Pintxo pote este jueves'}">
 ${ptype==='flash'?`<label>Hora</label><div class="opts"><span class="opt">20:30</span><span class="opt on">21:30</span><span class="opt">22:00</span></div><label>Descuento</label><div class="opts"><span class="opt">-10%</span><span class="opt on">-15%</span><span class="opt">-20%</span></div>`:`<label>Foto o vídeo</label><div class="opts"><span class="opt">${ic('img')} Subir</span></div>`}
 <div class="reach">${ic('bell')} Avisaremos a 1.240 vecinos a menos de 1 km</div>
 <button class="big-cta" onclick="toast('Publicado. Ya lo ven tus vecinos')">Publicar ahora</button></div>`;
}

function me(){
 view.innerHTML=`<div class="top"><div class="place">${t('profile')}</div><div class="lang"><button class="${lang==='es'?'on':''}" data-lang="es">ES</button><button class="${lang==='eu'?'on':''}" data-lang="eu">EU</button></div></div>
 <div class="me"><div class="ava">J</div><div><b>Junci</b><small>Vecino de Elgoibar · Nivel Oro</small></div></div>
 <div class="sec"><h3>Próximas</h3></div><div class="list">
 <div class="li"><div class="ic">${ic('cal')}</div><div class="t"><b>Mendi Jatetxea · mesa para 4</b><small>Sábado a las 21:30</small></div></div>
 <div class="li"><div class="ic">${ic('scis')}</div><div class="t"><b>Txema Barber · corte y barba</b><small>Martes a las 17:30</small></div></div>
 <div class="li"><div class="ic">${ic('bag')}</div><div class="t"><b>Goxo Okindegia · pedido en camino</b><small>Llega en 15 min</small></div></div></div>
 <div class="sec"><h3>Siguiendo</h3></div><div class="stories">${order.map(k=>`<button class="st" data-biz="${k}"><div class="ring seen"><img src="${B[k].img}" alt=""></div><span>${B[k].name.split(' ')[0]}</span></button>`).join('')}</div>
 <div class="list"><div class="li"><div class="ic">${ic('town')}</div><div class="t"><b>¿Tienes un negocio?</b><small>Crea tu página gratis en 2 minutos</small></div><span class="v">›</span></div></div>`;
}

function render(){nav();({home,explore,points:pointsV,profile:me,publish}[tab])();view.scrollTop=0}

function openSheet(html){$('#sheet').innerHTML='<div class="grab"></div>'+html;$('#sheet').classList.add('on');$('#scrim').classList.add('on')}
function closeSheet(){$('#sheet').classList.remove('on');$('#scrim').classList.remove('on')}
function toast(m,p){const e=$('#toast');e.innerHTML=ic('check')+' '+m+(p?`<span>+${p}</span>`:'');e.classList.add('on');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('on'),2600)}
window.toast=toast;
function opts(list,on,deal){return `<div class="opts">${list.map(x=>`<button class="opt ${x===on?'on':''} ${deal&&deal[x]?'deal':''}" ${deal&&deal[x]?`data-d="${deal[x]}"`:''}>${x}</button>`).join('')}</div>`}
function action(k,pre){
 const b=B[k];
 if(b.action==='pedir'){
  openSheet(`<h3>Pedir a ${b.name}</h3><div class="sub">Reparto en Elgoibar · 20 a 30 min</div>${b.menu.map((m,i)=>`<div class="qty"><div>${m[0]}<small style="display:block;color:var(--muted);font-size:12px">${m[2]}</small></div><div class="c"><button data-q="${i}" data-d="-1">−</button><span id="q${i}">${i===0?2:0}</span><button data-q="${i}" data-d="1">+</button></div></div>`).join('')}<button class="big-cta" id="go">Pedir · <span id="tot"></span></button><div class="earn">${ic('coin')} Ganas puntos con este pedido</div>`);
  const q=b.menu.map((_,i)=>i===0?2:0),pr=b.menu.map(m=>parseFloat(m[2].replace(',','.')));
  const up=()=>{const s=q.reduce((a,n,i)=>a+n*pr[i],0);$('#tot').textContent=s.toFixed(2).replace('.',',')+' €';q.forEach((n,i)=>$('#q'+i).textContent=n);return s};up();
  document.querySelectorAll('[data-q]').forEach(x=>x.onclick=()=>{const i=+x.dataset.q;q[i]=Math.max(0,q[i]+ +x.dataset.d);up()});
  $('#go').onclick=()=>{const p=Math.round(up()*5);closeSheet();points+=p;toast('Pedido enviado a '+b.name,p)};return;
 }
 const isC=b.action==='cita';
 openSheet(`<h3>${isC?'Pedir cita en':'Reservar en'} ${b.name}</h3><div class="sub">${b.open}</div>
 <label>${isC?'Servicio':'Personas'}</label>${isC?opts(b.menu.map(m=>m[0]),b.menu[0][0]):opts(['2','3','4','5','6+'],'2')}
 <label>Día</label>${opts(['Hoy','Mañana','Sábado','Domingo'],'Hoy')}
 <label>Hora</label>${opts(isC?['10:00','12:30','16:00','17:30','19:00']:['13:30','14:00','20:30','21:30','22:00'],pre||(isC?'17:30':'21:30'),isC?{'17:30':'-20%'}:{'21:30':'-15%'})}
 <button class="big-cta" id="go">${isC?'Confirmar cita':'Confirmar reserva'}</button><div class="earn">${ic('coin')} +50 puntos al confirmar</div>`);
 document.querySelectorAll('.sheet .opts').forEach(g=>g.querySelectorAll('.opt').forEach(o=>o.onclick=()=>{g.querySelectorAll('.opt').forEach(x=>x.classList.remove('on'));o.classList.add('on')}));
 $('#go').onclick=()=>{closeSheet();points+=50;toast((isC?'Cita confirmada en ':'Reserva confirmada en ')+b.name,50)};
}
function story(k){
 const b=B[k],a=ACT[b.action],caps={itsasoa:'Pintxo pote esta noche. Txakoli + pintxo 3 €',mendi:'Chuletón del día listo para la brasa',goxo:'Sale hornada nueva a las 18:00',ile:'Colores de otoño. Reserva y te regalamos el tratamiento',txema:'Me queda un hueco hoy a las 17:30',etxea:'Viernes: reparto gratis en todo el pueblo'};
 const s=$('#story');s.innerHTML=`<img class="bg" src="${b.img}" alt=""><div class="bars"><i id="sb"></i></div><div class="sh"><img class="av" src="${b.img}" alt=""><div><b>${b.name}</b><br><small>hace 1 h</small></div><button class="x" id="sx">×</button></div><div class="cap">${caps[k]}</div><div class="scta"><button class="big-cta" id="sgo">${t(a[0])}</button></div>`;
 s.classList.add('on');requestAnimationFrame(()=>requestAnimationFrame(()=>$('#sb').classList.add('go')));
 const close=()=>{s.classList.remove('on');clearTimeout(s._t)};s._t=setTimeout(close,5000);
 $('#sx').onclick=close;$('#sgo').onclick=()=>{close();action(k)};
}

document.addEventListener('click',e=>{
 const el=e.target.closest('[data-tab],[data-biz],[data-act],[data-like],[data-story],[data-flash],[data-cat],[data-ptype],[data-lang]');if(!el)return;
 if(el.tagName==='A')e.preventDefault();
 const d=el.dataset;
 if(d.tab){tab=d.tab;render()}
 else if(d.biz)profile(d.biz);
 else if(d.act)action(d.act);
 else if(d.like){liked.has(d.like)?liked.delete(d.like):liked.add(d.like);home()}
 else if(d.story)story(d.story);
 else if(d.flash){const f=FLASH[d.flash];action(f.b,f.txt.match(/\d{1,2}:\d{2}/)[0])}
 else if(d.cat){cat=d.cat;explore()}
 else if(d.ptype){ptype=d.ptype;publish()}
 else if(d.lang){lang=d.lang;render();tab='profile';nav()}
});
$('#scrim').onclick=closeSheet;
render();
