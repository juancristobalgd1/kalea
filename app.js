(()=>{
const I={send:'<path d="M22 3 9.5 13.5M22 3l-7 19-5-8.5L1 9z"/>',bookmark:'<path d="M6 3h12v18l-6-4.5L6 21z"/>',chev:'<path d="m9 6 6 6-6 6"/>',glass:'<path d="M5 4h14l-7 8zM12 12v8M8 20h8"/>',fork:'<path d="M7 3v8a2 2 0 0 0 2 2v8M5 3v5M9 3v5M17 3c-2 0-3 2-3 5s1 4 3 4v9"/>',cup:'<path d="M4 8h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM16 10h2a2 2 0 0 1 0 4h-2M8 3v2M12 3v2"/>',cross:'<path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6z"/>',map:'<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14"/>',list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',book:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 21V5M8 7h7"/>',store:'<path d="M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9h16M9 20v-6h6v6"/>',
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
spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
bolt:'<path d="M13 3L5 14h6l-1 7 8-11h-6z"/>',
alert:'<path d="M12 3l10 18H2zM12 10v5M12 18h.01"/>',
vote:'<path d="M4 13l4 4 12-12"/><path d="M4 21h16"/>',
wrench:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',
chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
news:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/>',
cam:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
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
ver:'<path d="M12 2l2.4 2.1 3.2-.3.8 3.1 2.8 1.6-1.2 3 1.2 3-2.8 1.6-.8 3.1-3.2-.3L12 22l-2.4-2.1-3.2.3-.8-3.1L2.8 15.5 4 12.5 2.8 9.5l2.8-1.6.8-3.1 3.2.3z" fill="currentColor" stroke="none"/><path d="M8.5 12l2.5 2.5 4.5-5" stroke="#ffffff" stroke-width="2.2"/>'
};
const ic=(n,c='')=>`<svg viewBox="0 0 24 24" class="${c}">${I[n]}</svg>`;
Object.assign(I,{gear:'<path d="M12.2 2h-.4a2 2 0 0 0-2 2v.2a2 2 0 0 1-1 1.7l-.4.3a2 2 0 0 1-2 0l-.2-.1a2 2 0 0 0-2.7.7l-.2.4a2 2 0 0 0 .7 2.7l.2.1a2 2 0 0 1 1 1.7v.5a2 2 0 0 1-1 1.7l-.2.1a2 2 0 0 0-.7 2.7l.2.4a2 2 0 0 0 2.7.7l.2-.1a2 2 0 0 1 2 0l.4.3a2 2 0 0 1 1 1.7v.2a2 2 0 0 0 2 2h.4a2 2 0 0 0 2-2v-.2a2 2 0 0 1 1-1.7l.4-.3a2 2 0 0 1 2 0l.2.1a2 2 0 0 0 2.7-.7l.2-.4a2 2 0 0 0-.7-2.7l-.2-.1a2 2 0 0 1-1-1.7v-.5a2 2 0 0 1 1-1.7l.2-.1a2 2 0 0 0 .7-2.7l-.2-.4a2 2 0 0 0-2.7-.7l-.2.1a2 2 0 0 1-2 0l-.4-.3a2 2 0 0 1-1-1.7V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',bellx:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0"/>',shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5v.4M12 17v.01"/>',out:'<path d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10"/>',lng:'<path d="M4 5h8M8 3v2M5.5 5c.8 3.5 3 6 6.5 7.5M10.5 5c-.8 3.5-3 6-6 7.5M13 21l4-9 4 9M14.5 17.5h5"/>',grid:'<path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.6v.4"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>',star:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',dl:'<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>'});

let lang='es';try{lang=localStorage.getItem('kalea_lang')||'es'}catch(e){}
const T={
es:{ask:'Preguntar',home:'Inicio',explore:'Explorar',points:'Puntos',profile:'Perfil',flash:'Huecos de última hora',stories:'Historias',feed:'En Elgoibar hoy',reservar:'Reservar',cita:'Pedir cita',pedir:'Pedir',agenda:'Agenda del pueblo',board:'Tablón',see:'Ver todo'},
eu:{ask:'Galdetu',home:'Hasiera',explore:'Arakatu',points:'Puntuak',profile:'Profila',flash:'Azken orduko hutsuneak',stories:'Istorioak',feed:'Gaur Elgoibarren',reservar:'Erreserbatu',cita:'Txanda eskatu',pedir:'Eskatu',agenda:'Herriko agenda',board:'Iragarki taula',see:'Dena ikusi'}};
const t=k=>T[lang][k]||k;

const ACTBY={bar:'reservar',rest:'reservar',cafe:'pedir',alim:'pedir',belleza:'cita',tienda:'pedir',salud:'cita',serv:'cita'};
const MENUS={
 bar:[['Pintxo del día','Ejemplo','2,50 €'],['Caña','Ejemplo','2,20 €'],['Txakoli (copa)','Ejemplo','2,50 €'],['Ración de croquetas','Ejemplo','8,00 €']],
 rest:[['Menú del día','Ejemplo','16,00 €'],['Chuletón a la brasa','Ejemplo','48,00 €'],['Pescado del día','Ejemplo','22,00 €'],['Postre casero','Ejemplo','6,00 €']],
 cafe:[['Café con leche','Ejemplo','1,60 €'],['Croissant','Ejemplo','1,40 €'],['Pan de masa madre','Ejemplo','3,90 €'],['Pastel vasco','Ejemplo','14,00 €']],
 belleza:[['Corte','Ejemplo','15,00 €'],['Corte y peinado','Ejemplo','28,00 €'],['Color','Ejemplo','55,00 €'],['Tratamiento','Ejemplo','20,00 €']],
 tienda:[['Pedido para recoger','Ejemplo','Gratis'],['Envío a domicilio en Elgoibar','Ejemplo','2,00 €']],
 alim:[['Pedido para recoger','Ejemplo','Gratis'],['Envío a domicilio en Elgoibar','Ejemplo','2,00 €']],
 serv:[['Pedir información','Ejemplo','Gratis'],['Pedir presupuesto','Ejemplo','Gratis'],['Cita','Ejemplo','Consultar']],
 salud:[['Primera consulta','Ejemplo','40,00 €'],['Sesión','Ejemplo','35,00 €'],['Bono 5 sesiones','Ejemplo','160,00 €']]};
const B={};(window.PL||[]).forEach(p=>{B[p.k]={name:p.n,short:p.s,cat:p.sub,cg:p.c,img:p.ph,rating:p.r,rev:p.v,street:p.a,phone:p.t,maps:'https://maps.google.com/?cid='+p.m,web:p.w,action:ACTBY[p.c],menu:MENUS[p.c]}});
const CIC={bar:'glass',rest:'fork',cafe:'cup',alim:'bag',belleza:'scis',tienda:'tag',salud:'cross',serv:'wrench'};
const noimg=(cls,cg)=>`<div class="${cls} noimg">${ic(CIC[cg]||'store')}</div>`;
function imgFail(el,cls,cg){el.outerHTML=noimg(cls,cg)}
function stWatch(){setTimeout(()=>document.querySelectorAll('.ring img').forEach(i=>{if(!i.complete||!i.naturalWidth)i.onerror&&i.onerror()}),6000)}
const av=(b,cls)=>b.img?`<img class="${cls}" src="${b.img}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="imgFail(this,'${cls}','${b.cg}')">`:noimg(cls,b.cg);
const FLASH=[
 {b:'txarriduna',txt:'Mesa para 4 · hoy 21:30',off:'-15%',left:'quedan 2'},
 {b:'josebarber',txt:'Corte · hoy 17:30',off:'-20%',left:'1 hueco'},
 {b:'pasteleria',txt:'Caja sorpresa · recoge 19:45',off:'-50%',left:'quedan 5'},
 {b:'meraki',txt:'Peinado · mañana 10:00',off:'-10%',left:'1 hueco'}];
const POSTS=[
 {b:'tantaka',time:'hace 12 min',txt:'Este jueves pintxo pote de 19:00 a 22:00. Txakoli y pintxo por 3 €. Reserva tu sitio en la barra desde Kalea y suma puntos.',likes:212,com:20},
 {b:'pasteleria',time:'hace 40 min',txt:'Croissants recién salidos del horno. Pídelos antes de las 8:30 y te los llevamos a casa para el desayuno.',likes:158,com:12},
 {b:'meraki',time:'hace 2 h',txt:'Nuevo color de otoño. Esta semana, tratamiento hidratante gratis con cualquier color reservado en la app.',likes:96,com:8},
 {b:'maala',time:'hace 3 h',txt:'Terraza abierta con vistas al pueblo. Esta tarde, café y pastel por 4 € reservando desde Kalea.',likes:301,com:41}];
const ONKP=['tantaka','pasteleria','meraki','maala','txarriduna','josebarber'];
const order=['tantaka','txarriduna','pasteleria','meraki','josebarber','maala','lanbroa','vientosur','ibaiondo','malape','ametsa','marem','kingkong','belaustegi','bst'].filter(k=>B[k]);
const ONK=new Set([...order,...ONKP]);
const tel=b=>'tel:+34'+(b.phone||'').replace(/\s/g,'');
const AIEV=[
 {id:'mercado',scope:'pueblo',title:'Mercado de productores',when:'Sábado 17 de octubre · 10:00 a 14:00',day:'17',mon:'oct',where:'Plaza de Elgoibar',img:'assets/mercado.jpg',txt:'Vuelve el mercado de productores a la plaza: queso Idiazabal, verdura de temporada, miel y talos recién hechos. Plan perfecto para ir con los niños por la mañana.',tip:'Los bares de la plaza avisan en Kalea si tienen mesa libre para después',src:'Agenda del ayuntamiento',going:86,s:'20261017T100000',e:'20261017T140000'},
 {id:'pintxos',scope:'pueblo',title:'Ruta de pintxos de otoño',when:'Viernes 23 de octubre · desde las 19:00',day:'23',mon:'oct',where:'12 bares de Elgoibar',img:'assets/bar.jpg',txt:'Doce bares del pueblo preparan un pintxo especial de otoño. Sella tu ruta en la app y entra en el sorteo de una cena para dos.',tip:'Cada bar visitado te da 30 puntos',src:'Bares de Kalea',going:142,s:'20261023T190000',e:'20261023T230000'},
 {id:'festival',scope:'provincia',title:'Festival de música al aire libre',when:'Sábado 24 de octubre · 20:00',day:'24',mon:'oct',where:'Donostia · a 45 min',img:'assets/concierto.jpg',txt:'Grupos vascos en directo, food trucks y ambiente hasta tarde. Si vas desde Elgoibar, te avisamos de quién comparte coche.',tip:'Los restaurantes del pueblo pueden guardarte la cena para la vuelta',src:'Agenda cultural de Euskadi',going:340,s:'20261024T200000',e:'20261025T010000'}];
const NEWS=[
 {id:'n1',kind:'Aviso',title:'Corte de tráfico por obras en el centro',txt:'El martes 13 de octubre, de 8:00 a 15:00, se corta el tráfico en el centro por obras de asfaltado. Los comercios siguen abiertos y se puede llegar andando.',src:'Ayuntamiento de Elgoibar'},
 {id:'n2',kind:'Noticia',title:'Abren las inscripciones de los cursos de otoño',txt:'Ya puedes apuntarte a los cursos de otoño del polideportivo: natación para niños, yoga y pilates. Plazas limitadas.',src:'Polideportivo municipal'},
 {id:'n3',kind:'Gipuzkoa',title:'Fin de semana de ferias en la provincia',txt:'Este fin de semana hay ferias y mercados en varios pueblos de Gipuzkoa. Kalea IA te resume los que pillan a menos de 30 minutos.',src:'Agenda cultural de Euskadi'}];
const POLL={q:'¿Qué quieres para las próximas fiestas?',o:[['Más conciertos',38],['Actividades para niños',31],['Feria gastronómica',22],['Deporte popular',9]]};
let voted=null,bonoOk=false;
const PLANS=[
 {id:'bus',org:'Ayuntamiento',by:'Ayuntamiento de Elgoibar',title:'Autobús al festival de Donostia',price:10,min:50,now:42,until:'Cierra el jueves 22',img:'assets/concierto.jpg',cof:'El ayuntamiento pone 5 € por persona'},
 {id:'cena',org:'Negocio',by:'Restaurante Txarriduna',title:'Cena de sidrería con menú cerrado',price:35,min:30,now:24,until:'Cierra el miércoles 21',img:B.txarriduna?B.txarriduna.img:'assets/restaurante.jpg'},
 {id:'mus',org:'Vecino',by:'Ane, vecina de Elgoibar',title:'Txapelketa de mus en el bar del jubilado',price:5,min:16,now:16,until:'Cierra el sábado 17',img:'assets/bar.jpg'}];
const joinedP=new Set();
function planCard(p){const j=joinedP.has(p.id),n=p.now+(j?1:0),ok=n>=p.min,pc=Math.min(100,Math.round(n*100/p.min));
 return `<div class="plan"><div class="im" style="background-image:url(${p.img})"><span class="org o-${p.org}">${p.org}</span>${ok?'<span class="ok">Se hace</span>':''}</div><div class="bd"><b>${p.title}</b><small>${p.by}</small>
 <div class="prog"><span style="width:${pc}%"></span></div><div class="pn"><b>${n} de ${p.min}</b><span>${ok?'Mínimo conseguido':'Faltan '+(p.min-n)}</span></div>
 <div class="pm">${p.price} € por persona · ${p.until}</div>${p.cof?`<div class="cof">${ic('town')} ${p.cof}</div>`:''}
 <i class="psp"></i><button class="cta wide ${j?'done':''}" data-plan="${p.id}">${j?ic('check')+' Apuntado':'Me apunto'}</button><small class="nocharge">${ok?'Se cobra al cerrar el plan':'Solo pagas si se llega al mínimo'}</small></div></div>`}
function plans(){return `<div class="sec"><h3>Si somos tantos, se hace</h3><a href="#" data-tab="publish" data-pt2="plan">Crear plan</a></div><div class="plans">${PLANS.map(planCard).join('')}</div>`}
let scope='pueblo';const going=new Set();
const ACT={reservar:['reservar','cal'],cita:['cita','scis'],pedir:['pedir','bag']};

const $=s=>document.querySelector(s);
const view=$('#view');
let tab=(()=>{try{return new URLSearchParams(location.search).get('tab')||'home'}catch(e){return 'home'}})(),liked=new Set(),cat='Todos',points=1240;

function nav(){
 const tabs=[['home','home'],['explore','search'],['plus','plus'],['ask','chat'],['profile','user']];
 $('#tabbar').innerHTML=tabs.map(([k,i])=>k==='plus'?`<button class="plus" data-tab="publish" aria-label="Publicar">${ic('plus')}</button>`:`<button class="tab ${tab===k||(k==='profile'&&tab==='points')?'on':''}" data-tab="${k}">${ic(i)}<span>${t(k)}</span></button>`).join('');
}
function topBar(){return `<div class="top"><div class="brand"><span class="wm">Kalea</span><span class="bloc">${ic('pin')} Elgoibar</span></div><div class="icons"><button class="ib" data-notif="1" aria-label="Avisos">${ic('bell')}${notifRead?'':'<i class="dot"></i>'}</button></div></div>`}
function stories(){return `<div class="stories">${order.map((k,i)=>`<button class="st" data-story="${k}"><div class="ring ${seenS.has(k)?'seen':''}"><img src="${B[k].img}" alt="" referrerpolicy="no-referrer" onerror="imgFail(this,'stfb','${B[k].cg}')"></div><span>${B[k].short}</span></button>`).join('')}</div>`}
function flash(){return `<div class="sec"><h3 class="live">${t('flash')}</h3><a href="#" data-tab="explore">${t('see')}</a></div><div class="flash">${FLASH.map((f,i)=>`<button class="fc" data-flash="${i}"><div class="im" style="background-image:url(${B[f.b].img})"><span class="off">${f.off}</span><span class="left">${f.left}</span><span class="ejf">Ejemplo</span></div><div class="bd"><b>${f.txt}</b><small>${B[f.b].name}</small></div></button>`).join('')}</div>`}
function muni(){return `<div class="muni"><div class="ic">${ic('town')}</div><div><b>Bonos del comercio local<span class="tag">Ejemplo</span></b><p>Tu ayuntamiento te regala 10 € para gastar en cualquier negocio de Kalea.</p></div></div>`}
const VER=`<svg class="ver" viewBox="0 0 24 24" aria-label="En Kalea"><circle cx="12" cy="12" r="10" fill="#0095f6"/><path d="m7.5 12.3 3 3 6-6" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const saved=new Set();try{JSON.parse(localStorage.getItem('kalea_saved')||'[]').forEach(x=>saved.add(x))}catch(e){}
const ALAB={reservar:'Reservar mesa',cita:'Pedir cita',pedir:'Hacer un pedido'};
function dbl(k){need('Para dar me gusta',()=>{if(!liked.has(k))setLike(k,true);const h=document.querySelector(`[data-heart="${k}"]`);if(h){h.classList.remove('pop');void h.offsetWidth;h.classList.add('pop')}})}
function post(p){const b=B[p.b],a=ACT[b.action],l=liked.has(p.b),sv=saved.has(p.b),st=order.includes(p.b),i=POSTS.indexOf(p);return `<article class="post igp"><div class="ph">${st?`<button class="avr ${seenS.has(p.b)?'seen':''}" data-story="${p.b}" aria-label="Ver historia">${av(b,'av')}</button>`:av(b,'av')}<button class="nm" data-biz="${p.b}"><b>${b.short||b.name}${ONK.has(p.b)?VER:''}</b><small>${b.street}</small></button><button class="more" data-biz="${p.b}" aria-label="Ver perfil">•••</button></div><div class="pimw" ondblclick="dbl('${p.b}')"><img class="pimg" src="${b.img}" alt="" referrerpolicy="no-referrer" onerror="this.parentNode.classList.add('nopic')"><span class="bigheart" data-heart="${p.b}">${ic('heart')}</span></div><button class="shopbar" data-act="${p.b}"><span>${ic(a[1])} ${ALAB[b.action]||t(a[0])}</span>${ic('chev')}</button><div class="pa igpa"><button class="ib2 ${l?'liked':''}" data-like="${p.b}" aria-label="Me gusta">${ic('heart')}</button><button class="ib2" data-com="${p.b}" data-cmt="${esc(b.short||b.name)}" aria-label="Comentar">${ic('chat')}</button><button class="ib2" data-share="${p.b}" aria-label="Compartir">${ic('send')}</button><button class="ib2 save ${sv?'on':''}" data-save="${p.b}" aria-label="Guardar">${ic('bookmark')}</button></div><div class="likes">${(p.likes+(l?1:0)).toLocaleString('es-ES')} Me gusta</div><p class="cap"><b>${b.short||b.name}</b> ${p.txt} <span class="ej">Ejemplo</span></p>${cmPrev(p.b,b.short||b.name)}<div class="ptime">${p.time}</div></article>`}

/* ===== Pregunta al pueblo ===== */
const nrm=x=>x.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const RULES=[
 [['persiana','cerradura','bricolaje','tornillo','herramienta','pintura','enchufe','grifo'],p=>/Ferreter/.test(p.sub),'Para eso tienes estas ferreterías en Elgoibar. Suelen saber quién hace arreglos en casa:'],
 [['partido','futbol','athletic','real sociedad','champions','liga'],p=>p.c==='bar','Estos bares tienen buen ambiente según sus reseñas. Pregúntales si ponen el partido:'],
 [['piso','alquiler','alquilar','vivienda','comprar casa','casa en venta'],p=>/Inmobiliaria/.test(p.sub),'Estas inmobiliarias trabajan en Elgoibar. También puedes mirar pisos en Pisder:'],
 [['coche','taller','rueda','neumatico','itv','averia','mecanico','aceite'],p=>/Taller|Concesionario/.test(p.sub),'Estos talleres tienen buenas reseñas:'],
 [['gasolina','gasolinera','repostar','diesel'],p=>/Gasolinera/.test(p.sub),'Gasolineras en Elgoibar:'],
 [['cenar','comer','menu','restaurante','cena','comida','chuleton','sidreria'],p=>p.c==='rest','Para comer o cenar, estos son los restaurantes mejor valorados:'],
 [['pintxo','cana','tomar algo','vermut','copa','cerveza','txakoli'],p=>p.c==='bar','Para tomar algo, estos bares son de los más valorados:'],
 [['cafe','desayuno','desayunar','merendar','terraza'],p=>/Cafeter/.test(p.sub),'Para un café o desayunar:'],
 [['pan','pastel','tarta','dulce','croissant','cumpleanos'],p=>/Panader|Pasteler/.test(p.sub),'Panaderías y pastelerías del pueblo:'],
 [['carne','chuleta','pescado','fruta','verdura','supermercado','hacer la compra'],p=>p.c==='alim','Para la compra tienes estos comercios:'],
 [['pelo','corte','peluquer','tinte','mechas','barba','barber'],p=>/Peluquer|Barber/.test(p.sub),'Peluquerías y barberías con buenas reseñas:'],
 [['unas','depilacion','estetica','facial','masaje'],p=>/Estética|Uñas|Masaje/.test(p.sub),'Centros de estética y masaje:'],
 [['dentista','muela','diente','ortodoncia'],p=>/Dentista/.test(p.sub),'Dentistas en Elgoibar:'],
 [['fisio','espalda','lesion','contractura','rodilla'],p=>/Fisioterapia|Osteopat/.test(p.sub),'Fisioterapeutas del pueblo:'],
 [['farmacia','medicina','guardia'],p=>/Farmacia/.test(p.sub),'Farmacias de Elgoibar. Comprueba cuál está de guardia hoy antes de ir:'],
 [['gimnasio','entrenar','gym','pilates','yoga'],p=>/Gimnasio|Polideportivo/.test(p.sub),'Para hacer deporte:'],
 [['gafas','vista','lentillas','audifono'],p=>/Óptica/.test(p.sub),'Ópticas en Elgoibar:'],
 [['perro','gato','mascota','veterinario','pienso'],p=>/mascota|Veterinaria|canina/i.test(p.sub),'Para tu mascota:'],
 [['regalo','flores','ramo','joya','anillo'],p=>/regalos|Floristería|Joyería/.test(p.sub),'Para un regalo:'],
 [['movil','telefono','ordenador','portatil','informatica','pantalla rota'],p=>/Telefonía|Informática/.test(p.sub),'Para el móvil o el ordenador:'],
 [['ropa','vestido','camisa','zapato','zapatilla','moda','abrigo'],p=>/Moda|Zapater|Deportes/.test(p.sub),'Tiendas de ropa y calzado:'],
 [['carnet','autoescuela','conducir'],p=>/Autoescuela/.test(p.sub),'Autoescuelas en Elgoibar:'],
 [['hotel','dormir','alojamiento','habitacion'],p=>/Hotel/.test(p.sub),'Para dormir en Elgoibar:'],
 [['limpieza','limpiar'],p=>/Limpieza/.test(p.sub),'Empresas de limpieza:'],
 [['asesor','renta','impuestos','gestoria','autonomo'],p=>/Asesor/.test(p.sub),'Asesorías en Elgoibar:']];
const score=p=>p.r*Math.log((p.v||0)+2);
function aiAnswer(text){const tx=nrm(text);
 for(const [kw,fn,intro] of RULES){if(kw.some(k=>tx.includes(k))){const L=PL.filter(fn).sort((a,b)=>score(b)-score(a)).slice(0,3);if(L.length)return{intro,list:L.map(p=>p.k),pisder:/Inmobiliaria/.test(L[0].sub)}}}
 const tk=tx.split(/[^a-z0-9ñ]+/).filter(w=>w.length>3);
 const L=PL.filter(p=>tk.some(w=>nrm(p.n+' '+p.sub).includes(w))).sort((a,b)=>score(b)-score(a)).slice(0,3);
 if(L.length)return{intro:'Esto es lo que he encontrado en Elgoibar:',list:L.map(p=>p.k)};
 return{intro:'No encuentro un negocio del pueblo para eso. Publica la pregunta y los vecinos te ayudan.',list:[]}}
function miniBiz(k){const b=B[k];return `<button class="minib" data-biz="${k}">${av(b,'mav')}<div><b>${b.name}</b><small>${b.cat} · ${b.street}${b.rev?` · ★ ${b.rating}`:''}</small></div><span>Ver</span></button>`}
function aiBox(text){const r=aiAnswer(text);return `<div class="aians"><div class="aihd"><span class="aidot">${ic('spark')}</span><b>Kalea IA</b><span class="aitag">Automático</span></div><p>${r.intro}</p>${r.list.map(miniBiz).join('')}${r.pisder?'<a class="pisder" href="https://juancristobalgd1.github.io/pisder/" target="_blank" rel="noopener">Ver pisos en Pisder</a>':''}</div>`}
const QS=[
 {id:'q1',who:'Ane',time:'hace 25 min',q:'¿Alguien sabe quién arregla persianas en Elgoibar?',ans:[{who:'Mikel',txt:'Pregunta en la ferretería, suelen conocer a quién lo hace en el pueblo.',v:7},{who:'Itziar',txt:'A nosotros nos lo arregló un autónomo del pueblo, si quieres te paso el contacto por privado.',v:3}]},
 {id:'q2',who:'Iker',time:'hace 1 h',q:'¿Dónde puedo ver el partido del sábado con buen ambiente?',ans:[{who:'Jon',txt:'En la zona de San Frantzisko suele haber ambiente los días de partido.',v:5}]},
 {id:'q3',who:'Maite',time:'hace 3 h',q:'Busco piso de alquiler para una familia de cuatro',ans:[{who:'Aitor',txt:'Mira también en Pisder, salen pisos de la zona y te avisa por WhatsApp.',v:4}]}];
const myQs=[],upv=new Set();let pendingQ='';
function qCard(q){const all=q.ans.map((a,i)=>({...a,i,v:a.v+(upv.has(q.id+':'+i)?1:0)})).sort((a,b)=>b.v-a.v);
 return `<article class="qcard"><div class="qh"><div class="qav">${q.who[0]}</div><div><b>${q.who}</b><small>${q.time}${q.mine?'':' <span class="ej">Ejemplo</span>'}</small></div></div><p class="qq">${q.q}</p>${aiBox(q.q)}
 ${all.map((a,n)=>`<div class="qa"><div class="qav s">${a.who[0]}</div><div class="qb"><b>${a.who}</b>${n===0&&a.v>=5?'<span class="best">Mejor respuesta</span>':''}<p>${a.txt}</p></div><button class="upv ${upv.has(q.id+':'+a.i)?'on':''}" data-upv="${q.id}:${a.i}">${ic('heart')} ${a.v}</button></div>`).join('')}
 <div class="rep"><input id="r-${q.id}" placeholder="Escribe tu respuesta"><button data-reply="${q.id}">Responder</button></div></article>`}
function askCard(){const q=QS[0];return `<div class="sec"><h3>Pregunta al pueblo</h3><a href="#" data-tab="ask">Ver todas</a></div><div class="askc"><button class="askin" data-tab="publish" data-pt2="ask">${ic('spark')}<span>¿Qué necesitas en Elgoibar?</span></button><button class="askq" data-tab="ask"><small>${q.who} preguntó <span class="ej">Ejemplo</span></small><b>${q.q}</b><span>Kalea IA y ${q.ans.length} vecinos han respondido</span></button></div>`}
function askV(){
 view.innerHTML=`<div class="top"><div class="place">Pregunta al pueblo</div></div><p class="asksub">Pregunta lo que quieras. La IA te responde al momento con negocios de Elgoibar y los vecinos te dan su opinión.</p>
 <div class="askbox"><textarea id="aq" rows="2" placeholder="¿Qué necesitas en Elgoibar? Ej.: quién arregla persianas"></textarea><button class="cta" id="ago">Preguntar</button></div>
 <div class="chips">${['¿Dónde veo el partido?','Busco dentista','Taller para el coche','Tarta de cumpleaños','Peluquería esta tarde'].map(x=>`<button class="chip" data-sug="${x}">${x}</button>`).join('')}</div>
 <div id="ares"></div><div class="sec"><h3>Últimas preguntas</h3></div>${myQs.concat(QS).map(qCard).join('')}`;
 const go=()=>{const v=$('#aq').value.trim();if(!v)return;$('#ares').innerHTML=`<div class="qcard mineq"><p class="qq">${v.replace(/</g,'&lt;')}</p>${aiBox(v)}<button class="big-cta" id="apub">Publicar para que respondan los vecinos</button><small class="nocharge">Ganas 5 puntos por preguntar y 10 por cada respuesta útil</small></div>`;
  $('#apub').onclick=()=>publishQ(v)};
 $('#ago').onclick=go;
 if(pendingQ){$('#aq').value=pendingQ;pendingQ='';go()}
}


/* ===== Trabajo y formación ===== */
const ZONE={elgoibar:['ELGOIBAR'],comarca:['ELGOIBAR','EIBAR','SORALUZE','PLACENCIA','MENDARO','DEBA','MUTRIKU','ERMUA','MALLABIA']};
const LBURL={of:'https://apps.lanbide.euskadi.net/apps/OF_OFERTAS_ODE_JSON?jsonCallback=kaleaOf',cu:'https://apps.lanbide.euskadi.net/apps/FR_CURSOS_ODE_JSON?jsonCallBack=kaleaCu'};
const LBPORTAL={of:'https://apps.lanbide.euskadi.net/apps/OF_BUSQUEDA_OFERTAS?LG=C&ML=OFEMEN1&MS=Ea',cu:'https://apps.lanbide.euskadi.net/apps/FR_BUSQUEDA_CURSOS?LG=C&ML=FORMEN1'};
const LB={of:null,cu:null,err:{},ld:{}};let wtab='of',wzone='comarca',walert=false;
const JOBS=[
 {biz:'Bar de la plaza',puesto:'Camarero/a para fines de semana',det:'Viernes y sábado de 19:00 a 01:00. Se valora experiencia.',when:'hace 2 h',ej:1},
 {biz:'Panadería del centro',puesto:'Dependiente/a de mañanas',det:'De lunes a viernes, de 7:00 a 13:00.',when:'ayer',ej:1},
 {biz:'Taller mecánico',puesto:'Ayudante de mecánico',det:'Jornada completa. Se valora carnet B.',when:'hace 3 días',ej:1}];
function firstArr(d,depth=0){if(Array.isArray(d))return d;if(d&&typeof d==='object'&&depth<3){for(const v of Object.values(d)){const a=firstArr(v,depth+1);if(a)return a}}return null}
function lbLoad(k,skipFile){if(LB[k]||(LB.ld[k]&&!skipFile))return;LB.ld[k]=1;LB.err[k]=0;let ok=0;
 const fin=()=>{if(tab==='work')workV();else refreshHome()};
 if(k==='of'&&!skipFile){fetch('lanbide.json?_='+Date.now()).then(r=>{if(!r.ok)throw 0;return r.json()}).then(d=>{if(!d.items||!d.items.length)throw 0;LB.of=d.items;LB.ld.of=0;fin()}).catch(()=>{LB.ld.of=0;lbLoad('of',1)});return}
 window[k==='of'?'kaleaOf':'kaleaCu']=d=>{ok=1;LB.ld[k]=0;LB[k]=firstArr(d)||[];fin()};
 const sc=document.createElement('script');sc.src=LBURL[k]+'&_='+Date.now();
 const fail=()=>{if(ok)return;LB.ld[k]=0;LB.err[k]=1;fin()};sc.onerror=fail;setTimeout(fail,12000);document.body.appendChild(sc)}
const cap=x=>{x=(x||'').toLowerCase();return x.charAt(0).toUpperCase()+x.slice(1)};
const pd=x=>{const m=(x||'').trim().match(/(\d+)\/(\d+)\/(\d+)/);return m?new Date(+m[3],m[2]-1,+m[1]).getTime():0};
const inZone=m=>{const n=nrm(m||'').toUpperCase();return ZONE[wzone==='online'?'comarca':wzone].some(z=>n.includes(z))};
function ofCard(o){const d=(o.desPuesto||'').replace(/<[^>]+>/g,' ').replace(/\.(?=[A-ZÁÉÍÓÚÑ])/g,'. ').replace(/\s+/g,' ').trim();return `<article class="wk"><div class="wkh"><span class="wkic">${ic('bag')}</span><div><b>${cap(o.desEmpleo)}</b><small>${cap(o.municipio)} · Publicada el ${(o.fecPub||'').trim()}</small></div></div>${d?`<p>${d.length>150?d.slice(0,150)+'…':d}</p>`:''}${o.disc==='S'?'<span class="wtag">Para personas con discapacidad</span>':''}<a class="wbtn" href="${o.url}" target="_blank" rel="noopener">Ver oferta en Lanbide</a></article>`}
const COL={'0':'Para todos','1':'Para personas trabajando','2':'Para personas en paro','3':'Trabajadores agrarios','4':'Preferente personas en paro','5':'Preferente personas trabajando'};
const MOD={'1':'Presencial','2':'Online','3':'Semipresencial'};
function cuCard(c){const days=[['lunes','L'],['martes','M'],['miercoles','X'],['jueves','J'],['viernes','V'],['sabado','S'],['domingo','D']].filter(([k])=>c[k]==='1').map(x=>x[1]).join(' ');
 const hm=c.hora_ini_m&&c.hora_ini_m.trim()?`${c.hora_ini_m}-${c.hora_fin_m}`:'',ht=c.hora_ini_t&&c.hora_ini_t.trim()?`${c.hora_ini_t}-${c.hora_fin_t}`:'';
 return `<article class="wk"><div class="wkh"><span class="wkic g">${ic('book')}</span><div><b>${cap(c.titulo)}</b><small>${c.centro||''}${c.municipio?' · '+cap(c.municipio):''}</small></div></div>
 <div class="wmeta"><span>${MOD[c.modalidad]||'Curso'}</span>${c.horas?`<span>${c.horas} h</span>`:''}${c.f_inicio?`<span>Del ${c.f_inicio.trim()} al ${(c.f_fin||'').trim()}</span>`:''}${days?`<span>${days}${hm||ht?' · '+[hm,ht].filter(Boolean).join(' y '):''}</span>`:''}</div>
 <span class="wtag g">Subvencionado por Lanbide · ${COL[c.colectivo]||'Consulta requisitos'}</span><a class="wbtn" href="${c.url}" target="_blank" rel="noopener">Ver curso e inscribirme</a></article>`}
function jobCard(j,i){return `<article class="wk"><div class="wkh"><span class="wkic o">${ic('store')}</span><div><b>${j.puesto}</b><small>${j.biz} · ${j.when}${j.ej?' <span class="ej">Ejemplo</span>':''}</small></div></div><p>${j.det}</p><button class="wbtn b" data-jobi="${i}">Me interesa</button></article>`}
function lbList(k){
 if(LB.err[k])return `<div class="wempty"><b>No he podido cargar Lanbide ahora mismo.</b><p>Puedes verlo directamente en su web o reintentarlo.</p><a class="wbtn" href="${LBPORTAL[k]}" target="_blank" rel="noopener">Abrir Lanbide</a><button class="wbtn b" data-lbretry="${k}">Reintentar</button></div>`;
 if(!LB[k]){lbLoad(k);return '<div class="wempty"><div class="spin"></div><p>Cargando datos de Lanbide…</p></div>'}
 let L=k==='of'?LB.of.filter(o=>inZone(o.municipio)).sort((a,b)=>pd(b.fecPub)-pd(a.fecPub)):LB.cu.filter(c=>wzone==='online'?c.modalidad==='2':inZone(c.municipio)).sort((a,b)=>pd(a.f_inicio)-pd(b.f_inicio));
 if(!L.length)return `<div class="wempty"><b>Ahora mismo no hay ${k==='of'?'ofertas':'cursos'} en ${wzone==='elgoibar'?'Elgoibar':wzone==='online'?'modo online':'la comarca'}.</b><p>${wzone==='elgoibar'?'Prueba con la comarca.':'Activa el aviso y te decimos cuando salga algo.'}</p></div>`;
 return `<small class="wcount">${L.length} ${k==='of'?'ofertas':'cursos'} · Fuente: Lanbide, datos abiertos de Euskadi</small>`+L.slice(0,40).map(k==='of'?ofCard:cuCard).join('')}
function workCard(){return `<div class="sec"><h3>Trabajo y formación</h3><a href="#" data-tab="work">Ver todo</a></div><div class="wtiles"><button data-tab="work" data-wt="of"><span class="wkic">${ic('bag')}</span><b>Ofertas de empleo</b><small>Lanbide en tu zona</small></button><button data-tab="work" data-wt="cu"><span class="wkic g">${ic('book')}</span><b>Cursos subvencionados</b><small>Gratis con Lanbide</small></button><button data-tab="work" data-wt="se"><span class="wkic o">${ic('store')}</span><b>Se busca</b><small>Negocios del pueblo</small></button></div>`}
function workV(){
 const zones=wtab==='se'?'':`<div class="seg wz">${[['elgoibar','Elgoibar'],['comarca','Comarca']].concat(wtab==='cu'?[['online','Online']]:[]).map(([k,l])=>`<button class="${wzone===k?'on':''}" data-wz="${k}">${l}</button>`).join('')}</div>`;
 view.innerHTML=`<div class="top"><div class="place">Trabajo y formación</div></div>
 <div class="wtabs">${[['of','Ofertas'],['cu','Cursos'],['se','Se busca']].map(([k,l])=>`<button class="${wtab===k?'on':''}" data-wt="${k}">${l}</button>`).join('')}</div>
 <div class="wbar">${zones}<button class="walert ${walert?'on':''}" data-walert="1">${ic('bell')} ${walert?'Aviso activado':'Avísame'}</button></div>
 ${wtab==='se'?`<button class="big-cta wpub" data-jobpub="1">Publicar una oferta de mi negocio</button>${JOBS.map(jobCard).join('')}`:lbList(wtab)}`}


function askForm(){return `<div class="preview"><b>Nueva pregunta al pueblo</b><label>Qué necesitas</label><textarea class="field" id="pq" rows="3" placeholder="Ej.: ¿quién me arregla una persiana?"></textarea><div class="chips pqs">${['¿Dónde veo el partido?','Busco dentista','Taller para el coche','Tarta de cumpleaños'].map(x=>`<button class="chip" data-pqs="${x}">${x}</button>`).join('')}</div><div id="pqai"></div><div class="reach">${ic('bell')} Sale en el inicio como una publicación y la ven tus vecinos</div><button class="big-cta stick" id="pubq">Publicar pregunta</button><small class="nocharge">Ganas 5 puntos por preguntar y 10 por cada respuesta útil</small></div>`}
let pqT;function pqPrev(){const v=($('#pq')||{}).value||'';$('#pqai').innerHTML=v.trim().length>3?aiBox(v):''}
function publishQ(v){need('Para publicar tu pregunta',()=>{const q={id:'m'+Date.now(),who:(user.name||'Tú').split(' ')[0],time:'ahora',q:v.replace(/</g,'&lt;'),ans:[],mine:true};myQs.unshift(q);points+=5;tab='home';render();const el=document.getElementById('qp-'+q.id);if(el)el.scrollIntoView({block:'start'});toast('Pregunta publicada. Ya la ven tus vecinos',5)})}
function qPost(q){const l=liked.has('q-'+q.id),n=q.ans.length;return `<article class="post qpost" id="qp-${q.id}"><div class="ph"><div class="av qav2">${q.who[0]}</div><div class="nm"><b>${q.who}${q.mine?'':' <span class="ej">Ejemplo</span>'}</b><small>${q.time} · Pregunta al pueblo</small></div><span style="color:var(--muted)">•••</span></div>
 <div class="qtext">${q.q}</div><div class="qai">${aiBox(q.q)}</div>
 <div class="pa"><button class="pill ${l?'liked':''}" data-like="q-${q.id}">${ic('heart')} ${(q.mine?0:12)+(l?1:0)}</button><button class="pill" data-tab="ask">${ic('chat')} ${n} ${n===1?'respuesta':'respuestas'}</button><button class="cta" data-tab="ask">${ic('chat')} Responder</button></div></article>`}


/* ===== Noticias de Euskadi y empleo en el inicio ===== */
let EUNEWS=null;
const esc=x=>String(x||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const ago=ts=>{if(!ts)return '';const m=Math.max(1,Math.round((Date.now()/1000-ts)/60));return m<60?`hace ${m} min`:m<1440?`hace ${Math.round(m/60)} h`:`hace ${Math.round(m/1440)} d`};
function refreshHome(){if(tab!=='home'||$('.bptop'))return;const y=view.scrollTop;home();view.scrollTop=y}
function loadNews(){if(EUNEWS)return;EUNEWS=[];fetch('news.json?_='+Date.now()).then(r=>r.json()).then(d=>{EUNEWS=(d.items||[]).filter(n=>!/violad|viola[rd]|asesin|apuñal|homicid|cad[aá]ver|fallec|muere|muerto|suicid|agresi[oó]n sexual|abuso|pederast|droga|detenid|tiroteo/i.test(n.t+' '+(n.d||'')));refreshHome()}).catch(()=>{})}
function newsPost(n){const l=liked.has('n-'+n.u);return `<article class="post ai npost"><div class="ph"><div class="av aiav">${ic('spark')}</div><div class="nm"><b>Kalea IA <span class="aitag">${ic('spark')} Automático</span></b><small>Noticias de Euskadi · ${ago(n.ts)}</small></div></div>
 ${n.img?`<img class="pimg nimg" src="${esc(n.img)}" alt="" referrerpolicy="no-referrer" loading="lazy" onerror="this.remove()">`:''}
 <div class="evbody">${n.local?'<span class="near">Cerca de ti</span>':''}<h4>${esc(n.t)}</h4>${n.d?`<p>${esc(n.d)}</p>`:''}<small class="nsrc">Fuente: ${esc(n.s)}</small></div>
 <div class="pa"><button class="pill ${l?'liked':''}" data-like="n-${esc(n.u)}">${ic('heart')}${l?' 1':''}</button><button class="pill" data-com="n-${esc(n.u)}" data-cmt="Noticia">${ic('chat')} ${cmList('n-'+n.u).length}</button><a class="cta nlink" href="${esc(n.u)}" target="_blank" rel="noopener">Leer en ${esc(n.s)}</a></div></article>`}
function lbPost(o){const d=(o.desPuesto||'').replace(/<[^>]+>/g,' ').replace(/\.(?=[A-ZÁÉÍÓÚÑ])/g,'. ').replace(/\s+/g,' ').trim();return `<article class="post ai"><div class="ph"><div class="av aiav">${ic('spark')}</div><div class="nm"><b>Kalea IA <span class="aitag">${ic('spark')} Automático</span></b><small>Empleo en tu zona · Fuente: Lanbide</small></div></div>
 <div class="qtext jtext"><small>Oferta de empleo · ${esc(cap(o.municipio))}</small>Se busca ${esc(cap(o.desEmpleo))}</div><div class="evbody">${d?`<p>${esc(d.length>180?d.slice(0,180)+'…':d)}</p>`:''}<small class="nsrc">Publicada el ${esc((o.fecPub||'').trim())} en Lanbide</small></div>
 <div class="pa"><a class="pill" href="${esc(o.url)}" target="_blank" rel="noopener">${ic('bag')} Ver oferta</a><button class="cta" data-tab="work" data-wt="of">Ofertas y cursos</button></div></article>`}
function jobPost(j){const i=JOBS.indexOf(j);return `<article class="post"><div class="ph"><div class="av qav2 jav">${ic('store')}</div><div class="nm"><b>${j.biz}${j.ej?' <span class="ej">Ejemplo</span>':''}</b><small>${j.when} · Se busca</small></div><span style="color:var(--muted)">•••</span></div>
 <div class="qtext jtext"><small>Se busca</small>${j.puesto}</div>${j.det?`<div class="evbody"><p>${j.det}</p></div>`:''}
 <div class="pa"><button class="pill" data-tab="work" data-wt="se">${ic('store')} Más ofertas</button><button class="cta" data-jobi="${i}">Me interesa</button></div></article>`}

let notifRead=false;
function demoBar(){return `<div class="demobar">Versión de prueba. Los negocios son reales (Google Maps); sus publicaciones son ejemplos.</div>`}
function notifSheet(){notifRead=true;const lb=(LB.of||[]).filter(o=>ZONE.comarca.some(z=>nrm(o.municipio||'').toUpperCase().includes(z)))[0];const p=PLANS[1];
 const it=[[ 'bolt',`${B[FLASH[0].b].name}: ${FLASH[0].txt}`,'Hueco de última hora · ejemplo',`data-flash="0"`],lb?['bag',`Nueva oferta en ${cap(lb.municipio)}: ${cap(lb.desEmpleo)}`,'Lanbide',`data-tab="work" data-wt="of"`]:null,['user',`${p.title}: faltan ${Math.max(0,p.min-p.now)} para que se haga`,'Plan en grupo · ejemplo',`data-tab="home"`],['chat','Ane ha recibido 2 respuestas en su pregunta','Pregunta al pueblo · ejemplo',`data-tab="ask"`]].filter(Boolean);
 openSheet(`<h3>Avisos</h3><div class="nots">${it.map(x=>`<button class="notr" ${x[3]}><span class="wkic">${ic(x[0])}</span><div><b>${x[1]}</b><small>${x[2]}</small></div></button>`).join('')}</div><button class="big-cta ghostcta" data-tab="profile">Elegir qué avisos recibo</button>`);if(tab==='home')refreshHome()}
function home(){view.innerHTML=topBar()+stories()+agenda()+`<div class="sec"><h3>${scope==='pueblo'?t('feed'):'En Gipuzkoa'}</h3><div class="seg"><button class="${scope==='pueblo'?'on':''}" data-scope="pueblo">Elgoibar</button><button class="${scope==='provincia'?'on':''}" data-scope="provincia">Gipuzkoa</button></div></div>`+feed()}
function agenda(){return `<div class="sec"><h3 class="aih">${ic('spark')} Pasa en Elgoibar</h3><small class="aisub">Automático</small></div><div class="agenda">${AIEV.map(e=>`<button class="ag agev" data-ev="${e.id}"><div class="im" style="background-image:url(${e.img})"><span class="d"><b>${e.day}</b>${e.mon}</span><span class="sc">${e.scope==='pueblo'?'Elgoibar':'Gipuzkoa'}</span></div><div class="bd"><b>${e.title}</b><small>${e.going} vecinos van</small></div></button>`).join('')}${NEWS.map(n=>`<button class="ag nw" data-news="${n.id}"><div class="nk ${n.kind==='Aviso'?'warn':''}">${ic(n.kind==='Aviso'?'alert':'news')} ${n.kind}</div><b>${n.title}</b><small>${n.src}</small></button>`).join('')}</div>`}
function townCard(){return `<div class="townc"><div class="th"><div class="ic">${ic('town')}</div><div><b>Tu ayuntamiento</b><small>Avisos, encuestas, incidencias y bonos</small></div><button class="go" data-tab="town">Abrir</button></div><div class="tq"><button data-tab="town">${ic('alert')}<span>Avisos</span></button><button data-tab="town">${ic('vote')}<span>Participa</span></button><button data-inc="1">${ic('wrench')}<span>Incidencia</span></button><button data-bono="1">${ic('coin')}<span>Bono 10 €</span></button></div></div>`}
function town(){const tot=POLL.o.reduce((a,x)=>a+x[1],0)+(voted!==null?1:0);
 view.innerHTML=`<div class="top"><button class="ib" data-tab="home">${ic('back')}</button><div class="ttl">Ayuntamiento de Elgoibar ${ic('ver','ver')}</div><span class="tag">Ejemplo</span></div>
 <div class="tsec"><h3>${ic('alert')} Avisos oficiales</h3>${NEWS.filter(n=>n.kind==='Aviso').map(n=>`<div class="tcard warn"><b>${n.title}</b><p>${n.txt}</p><small>Te llega como notificación a todos los vecinos</small></div>`).join('')}<div class="tcard"><b>Recogida de enseres</b><p>Jueves 15 de octubre. Avísanos desde la app y pasamos por tu portal.</p></div></div>
 <div class="tsec"><h3>${ic('vote')} Participa</h3><div class="tcard"><b>${POLL.q}</b>${POLL.o.map((o,i)=>{const v=o[1]+(voted===i?1:0),p=Math.round(v*100/tot);return `<button class="pollo ${voted===i?'on':''}" data-vote="${i}"><span class="bar" style="width:${voted!==null?p:0}%"></span><span class="lb">${o[0]}</span>${voted!==null?`<span class="pc">${p}%</span>`:''}</button>`}).join('')}<small>${voted!==null?'Gracias por votar · +20 puntos':'312 vecinos han votado · votar da 20 puntos'}</small></div></div>
 <div class="tsec"><h3>${ic('wrench')} Incidencias</h3><div class="tcard"><p>¿Una farola fundida, un bache, basura acumulada? Haz una foto y llega directa al ayuntamiento. Te avisamos cuando esté arreglado.</p><i class="psp"></i><button class="cta wide" data-inc="1">${ic('wrench')} Avisar de una incidencia</button></div></div>
 <div class="tsec"><h3>${ic('coin')} Bonos del comercio local</h3><div class="tcard"><p>10 € para gastar en cualquier negocio de Kalea. Cada bono mueve dinero que se queda en el pueblo.</p><i class="psp"></i><button class="cta wide ${bonoOk?'done':''}" data-bono="1">${bonoOk?ic('check')+' Bono activado':ic('coin')+' Pedir mi bono'}</button></div></div>
 <div class="tsec"><h3>${ic('chart')} Panel para el ayuntamiento</h3><small class="demo">Datos de ejemplo de un mes</small>
 <div class="kpis"><div><b>2.140</b><small>vecinos activos</small></div><div><b>18.600 €</b><small>gastados en comercio local con bonos</small></div><div><b>1.230</b><small>asistentes a eventos</small></div><div><b>41 de 47</b><small>incidencias resueltas · 2,3 días de media</small></div></div>
 <div class="tcard"><b>Uso semanal de la app</b><div class="bars">${[38,52,47,61,70,66,88].map((h,i)=>`<div><span style="height:${h}%"></span><small>${'LMXJVSD'[i]}</small></div>`).join('')}</div><p>El ayuntamiento ve qué eventos funcionan, qué piden los vecinos y cuánto dinero se queda en el comercio del pueblo.</p></div></div>`}
function incSheet(){openSheet(`<h3>Avisar de una incidencia</h3><p class="sub">Llega directa al ayuntamiento</p>${opts(['Farola','Bache','Basura','Ruido','Otro'],'Farola')}<button class="photo">${ic('cam')} Añadir foto</button><div class="loc">${ic('pin')} Ubicación: Calle Nagusia (aprox.)</div><i class="psp"></i><button class="cta wide" id="incgo">Enviar al ayuntamiento</button>`);
 $('#sheet').querySelectorAll('.opt').forEach(o=>o.onclick=()=>{$('#sheet').querySelectorAll('.opt').forEach(x=>x.classList.remove('on'));o.classList.add('on')});
 $('#incgo').onclick=()=>{closeSheet();points+=15;toast('Enviado. Te avisamos cuando esté arreglado',15)}}
function evSheet(id){const e=AIEV.find(x=>x.id===id);openSheet(`<div class="post ai sheetpost">${aiPost(e).replace(/^<article class="post ai">|<\/article>$/g,'')}</div>`)}
function newsSheet(id){const n=NEWS.find(x=>x.id===id);openSheet(`<div class="nk ${n.kind==='Aviso'?'warn':''}">${ic(n.kind==='Aviso'?'alert':'news')} ${n.kind}</div><h3>${n.title}</h3><p class="sub">${n.txt}</p><small class="aisrc">${ic('spark')} Resumido por Kalea IA · Fuente: ${n.src}</small>`)}
function feed(){
 loadNews();if(!LB.of&&!LB.ld.of&&!LB.err.of)lbLoad('of');
 const nw=EUNEWS||[];
 if(scope==='provincia'){const out=[];const n=nw.filter(x=>!x.local);AIEV.forEach((e,i)=>{out.push(aiPost(e));if(n[i])out.push(newsPost(n[i]))});n.slice(AIEV.length,12).forEach(x=>out.push(newsPost(x)));return out.join('')}
 const isEuT=x=>/\b(eta|dira|dute|izango|baina|ere|gaur|bihar|arituko|inguruko|egingo|du|da)\b|(tzen|aren|etako|etan|ekin) /i.test(' '+(x||'')+' ');
 const byLang=nw.filter(x=>lang==='eu'?isEuT(x.t):!isEuT(x.t));
 const loc=byLang.filter(x=>x.local).concat(byLang.filter(x=>!x.local));
 const lb=(LB.of||[]).filter(o=>ZONE.comarca.some(z=>nrm(o.municipio||'').toUpperCase().includes(z))).sort((a,b)=>pd(b.fecPub)-pd(a.fecPub)).slice(0,2);
 const out=[];myQs.forEach(q=>out.push(qPost(q)));JOBS.filter(j=>!j.ej).forEach(j=>out.push(jobPost(j)));
 const ins=[qPost(QS[0]),flash(),lb[0]?lbPost(lb[0]):jobPost(JOBS.find(j=>j.ej)),plans(),townCard(),lb[1]?lbPost(lb[1]):''];
 let ni=0;
 POSTS.forEach((p,i)=>{out.push(post(p));if(ins[i])out.push(ins[i]);if(i%2===1&&loc[ni])out.push(newsPost(loc[ni++]))});
 ins.slice(POSTS.length).forEach(x=>x&&out.push(x));
 const rest=loc.slice(ni,ni+6);
 if(rest.length)out.push(`<div class="nlist"><div class="nlh">${ic('news')} Más noticias de la zona</div>${rest.map(n=>`<a href="${esc(n.u)}" target="_blank" rel="noopener"><b>${esc(n.t)}</b><small>${n.local?'Cerca de ti · ':''}${esc(n.s)} · ${ago(n.ts)}</small></a>`).join('')}</div>`);
 return out.join('');
}
function aiPost(e){const g=going.has(e.id),l=liked.has('ai-'+e.id);return `<article class="post ai"><div class="ph"><div class="av aiav">${ic('spark')}</div><div class="nm"><b>Kalea IA <span class="aitag">${ic('spark')} Automático</span></b><small>Fuente: ${e.src}</small></div></div>
 <div class="evimg"><img class="pimg" src="${e.img}" alt=""><div class="evdate"><b>${e.day}</b><small>${e.mon}</small></div><span class="evscope">${e.scope==='pueblo'?'Elgoibar':'Gipuzkoa'}</span></div>
 <div class="evbody"><h4>${e.title}</h4><div class="evmeta">${ic('cal')} ${e.when}</div><div class="evmeta">${ic('pin')} ${e.where}</div><p>${e.txt}</p><div class="evtip">${ic('bolt')} ${e.tip}</div></div>
 <div class="pa"><button class="pill ${l?'liked':''}" data-like="ai-${e.id}">${ic('heart')} ${(e.likes||Math.round(e.going*1.4))+(l?1:0)}</button><button class="pill" data-ics="${e.id}">${ic('cal')} Calendario</button><button class="cta ${g?'done':''}" data-going="${e.id}">${g?ic('check')+' Vas':ic('user')+' Me apunto'}</button></div><div class="evgo">${e.going+(g?1:0)} vecinos van</div></article>`}
function ics(id){const e=AIEV.find(x=>x.id===id);const txt=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Kalea//ES','BEGIN:VEVENT','UID:'+e.id+'@kalea','DTSTART;TZID=Europe/Madrid:'+e.s,'DTEND;TZID=Europe/Madrid:'+e.e,'SUMMARY:'+e.title,'LOCATION:'+e.where,'DESCRIPTION:'+e.txt,'END:VEVENT','END:VCALENDAR'].join('\r\n');
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([txt],{type:'text/calendar'}));a.download=e.id+'.ics';document.body.appendChild(a);a.click();a.remove();toast('Añadido a tu calendario')}

let q='',exMode='list';
function exMap(){const cg=(CATS.find(c=>c[0]===cat)||CATS[0]);const term=(q.trim()||(cg[1]?cg[0]:'comercios y bares'))+' Elgoibar';return `<div class="mapw"><iframe title="Mapa" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${encodeURIComponent(term)}&output=embed"></iframe><small>En el mapa ves el horario, si está abierto ahora y la distancia.</small></div>`}
const CATS=[['Todos',''],['Bares','bar'],['Restaurantes','rest'],['Cafés y panaderías','cafe'],['Alimentación','alim'],['Belleza','belleza'],['Tiendas','tienda'],['Salud y deporte','salud'],['Servicios','serv']];
function bizList(){const cg=(CATS.find(c=>c[0]===cat)||CATS[0])[1],qq=q.trim().toLowerCase();
 const L=PL.filter(p=>(!cg||p.c===cg)&&(!qq||(p.n+' '+p.sub+' '+p.a).toLowerCase().includes(qq))).sort((a,b)=>(ONK.has(b.k)-ONK.has(a.k))||(!!b.ph-!!a.ph)||(b.v-a.v));
 if(!L.length)return `<div class="empty">No hay resultados para "${q}"</div>`;
 return L.map(p=>{const b=B[p.k];return `<button class="biz" data-biz="${p.k}">${av(b,'bimg')}<div class="i"><b>${b.name}</b><small>${ONK.has(p.k)?'<span class="onk">En Kalea</span> ':''}${b.cat} · ${b.street}</small><small>${b.rev?`<span class="star">★ ${b.rating}</span> · ${b.rev} ${b.rev==1?'reseña':'reseñas'}`:'Sin reseñas todavía'}</small></div>${ONK.has(p.k)?`<span class="mini">${t(ACT[b.action][0])}</span>`:b.phone?`<span class="mini ghost2" data-tel="${p.k}">Llamar</span>`:`<span class="mini ghost2" data-map="${p.k}">Cómo llegar</span>`}</button>`}).join('')}
function explore(){
 view.innerHTML=`<div class="top"><div class="place">${t('explore')}</div><small class="cnt">${PL.length} negocios</small></div><label class="search">${ic('search')}<input id="q" placeholder="Busca un bar, una peluquería..." value="${q.replace(/"/g,'&quot;')}"></label><div class="chips">${CATS.map(c=>`<button class="chip ${c[0]===cat?'on':''}" data-cat="${c[0]}">${c[0]}</button>`).join('')}</div><div class="viewsw"><button class="${exMode==='list'?'on':''}" data-exm="list">${ic('list')} Lista</button><button class="${exMode==='map'?'on':''}" data-exm="map">${ic('map')} Mapa</button></div><div id="bl">${exMode==='map'?exMap():bizList()}</div><div class="gsrc">Datos y fotos: Google Maps</div>
 <div class="sec"><h3>${t('board')}</h3></div>
 <button class="board" data-tab="work" data-wt="of"><div class="k">${ic('work')} Trabajo y formación</div><b>Ofertas de Lanbide, cursos gratis y Se busca</b><small>Elgoibar y comarca</small></button>
 <a class="board" href="https://juancristobalgd1.github.io/pisder/" target="_blank" rel="noopener"><div class="k">${ic('house')} Pisos · con Pisder</div><b>Pisos en alquiler y venta</b><small>Se abre en Pisder</small></a>`;
 const qi=$('#q');qi.oninput=()=>{q=qi.value;$('#bl').innerHTML=exMode==='map'?exMap():bizList()};
}

const follows=new Set();try{JSON.parse(localStorage.getItem('kalea_follow')||'[]').forEach(x=>follows.add(x))}catch(e){}
function profile(k,noPush){
 const b=B[k],a=ACT[b.action],on=ONK.has(k),ps=POSTS.filter(p=>p.b===k),st=order.includes(k),fo=follows.has(k),bio=CAPK[k]||CAPC[b.cg],mn=b.action==='cita'?'Servicios':'Carta';
 const tiles=[...ps.map(p=>({img:b.img,txt:p.txt,i:POSTS.indexOf(p)})),{txt:bio},...(b.menu||[]).slice(0,5).map(m=>({txt:m[0],pr:m[2]}))];
 const nf=f=>(180+hsh(k)%1400+(f?1:0)).toLocaleString('es-ES');
 const main=on?`<button data-act="${k}">${ic(a[1])} ${t(a[0])}</button>`:b.phone?`<a href="${tel(b)}">${ic('phone')} Llamar</a>`:`<a href="${b.maps}" target="_blank" rel="noopener">${ic('pin')} Cómo llegar</a>`;
 const avh=st?`<button class="bpav ${seenS.has(k)?'seen':''}" data-story="${k}" aria-label="Ver historia">${av(b,'bpimg')}</button>`:`<div class="bpav none">${av(b,'bpimg')}</div>`;
 const hl=[['menu','book',mn],['maps','clock','Horario'],['maps','pin','Ubicación'],['maps','star','Reseñas']];
 view.innerHTML=`<div class="bptop"><button class="ib" id="bpback" aria-label="Volver">${ic('back')}</button><b>${esc(b.short||b.name)}${on?VER:''}</b><button class="ib" data-share="${k}" aria-label="Compartir">${ic('send')}</button></div>
 <div class="bph">${avh}<div class="bpst"><div><b>${tiles.length}</b><small>publicaciones</small></div><div><b id="bpfn">${nf(fo)}</b><small>seguidores</small></div><div><b>${b.rating?'★ '+b.rating:'Nuevo'}</b><small>${b.rev?b.rev+(b.rev==1?' reseña':' reseñas'):'en Kalea'}</small></div></div></div>
 <div class="bpi"><h1>${esc(b.name)}</h1><div class="cat">${esc(b.cat)} · ${esc(b.street)}</div><p>${esc(bio)} <span class="ej">Ejemplo</span></p><span class="lnk">${ic('globe')} kalea.app/elgoibar/${k}</span>${on?'':`<div class="notk">Este negocio todavía no está en Kalea. Puedes llamar o ver cómo llegar.</div>`}</div>
 <div class="bpb"><button class="pri ${fo?'on':''}" id="bpf">${fo?'Siguiendo':'Seguir'}</button>${b.phone?`<a href="${tel(b)}">Llamar</a>`:''}<a href="${b.maps}" target="_blank" rel="noopener">Cómo llegar</a></div>
 <div class="bphl">${hl.map(h=>h[0]==='menu'?`<button data-pt="menu"><i><span>${ic(h[1])}</span></i>${h[2]}</button>`:`<a href="${b.maps}" target="_blank" rel="noopener"><i><span>${ic(h[1])}</span></i>${h[2]}</a>`).join('')}</div>
 <div class="bptabs"><button class="on" data-pt="grid" aria-label="Publicaciones">${ic('grid')}</button><button data-pt="info" aria-label="Información">${ic('info')}</button><button data-pt="menu" aria-label="${mn}">${ic('book')}</button></div><div id="pt"></div>
 <div class="pcta">${main}</div>`;
 const pt=w=>{const el=$('#pt');
  if(w==='grid')el.innerHTML=`<div class="bpgrid">${tiles.map(x=>x.img&&x.i!=null?`<button class="gt" data-gpost="${x.i}"><img src="${x.img}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentNode.classList.add('tx');this.remove()"><span>${esc(x.txt)}</span></button>`:`<div class="gt tx"><span>${esc(x.txt)}${x.pr?`<b>${esc(x.pr)}</b>`:''}</span></div>`).join('')}</div>`;
  else el.innerHTML=w==='info'?`<div class="hours"><b>Dirección</b><br>${b.street}, 20870 Elgoibar<br><br>${b.phone?`<b>Teléfono</b><br><a href="tel:+34${b.phone.replace(/\s/g,'')}">${b.phone}</a><br><br>`:''}${b.web?`<b>Web</b><br><a href="${b.web}" target="_blank" rel="noopener">${b.web.replace(/^https?:\/\/(www\.)?/,'').replace(/\/$/,'').slice(0,40)}</a><br><br>`:''}<a href="${b.maps}" target="_blank" rel="noopener">Ver horario y reseñas en Google Maps</a><br><br><small class="muted">Datos públicos de Google Maps. Cuando el negocio se una a Kalea podrá editar su página, carta, horarios y fotos.</small></div>`:`<div class="note">Ejemplo de cómo se vería su ${b.action==='cita'?'lista de servicios':'carta'}</div>`+b.menu.map(m=>`<div class="menu-i"><div>${m[0]}</div><b>${m[2]}</b></div>`).join('');
  document.querySelectorAll('.bptabs [data-pt]').forEach(x=>x.classList.toggle('on',x.dataset.pt===w));
  el.querySelectorAll('[data-gpost]').forEach(x=>x.onclick=()=>openSheet(`<div class="gpsheet">${post(POSTS[+x.dataset.gpost])}</div>`))};
 view.querySelectorAll('[data-pt]').forEach(x=>x.onclick=()=>{pt(x.dataset.pt);if(x.closest('.bphl')){const tb=$('.bptabs');if(tb)tb.scrollIntoView({behavior:'smooth',block:'start'})}});
 $('#bpf').onclick=()=>need('Para seguir a '+b.name,()=>{follows.has(k)?follows.delete(k):follows.add(k);try{localStorage.setItem('kalea_follow',JSON.stringify([...follows]))}catch(e){}const f=follows.has(k),btn=$('#bpf');if(btn){btn.classList.remove('pop');void btn.offsetWidth;btn.classList.add('pop');try{navigator.vibrate&&navigator.vibrate(8)}catch(e){}btn.classList.toggle('on',f);btn.textContent=f?'Siguiendo':'Seguir';$('#bpfn').textContent=nf(f)}toast(f?'Sigues a '+b.name:'Has dejado de seguir a '+b.name)});
 pt('grid');view.scrollTop=0;
 $('#bpback').onclick=()=>{if(history.state&&history.state.k)history.back();else render()};
 if(!noPush&&location.hash!=='#'+k)history.pushState({k},'','#'+k);
}

function pointsV(){
 view.innerHTML=`<div class="top"><div class="ptop"><button class="ib" data-tab="profile" aria-label="Volver">${ic('back')}</button><div class="place">${t('points')}</div></div></div><div class="wallet"><small>Puntos Kalea</small><div class="pts">${(user?points:0).toLocaleString('es-ES')}</div><small>= ${((user?points:0)/100).toFixed(2).replace('.',',')} € para gastar en Elgoibar</small><div class="qr">${ic('qr')}</div></div>
 ${user?'':`<div style="margin:0 18px 14px"><button class="gbtn" data-login="1">${GLOGO} Entra para empezar a sumar</button></div>`}<div class="sec"><h3>Cómo ganar puntos</h3></div><div class="list">
 <div class="li"><div class="ic">${ic('cal')}</div><div class="t"><b>Reserva o pide cita</b><small>En cualquier negocio de Kalea</small></div><span class="v">+50</span></div>
 <div class="li"><div class="ic">${ic('bag')}</div><div class="t"><b>Compra en el comercio local</b><small>5 puntos por cada euro</small></div><span class="v">+5/€</span></div>
 <div class="li"><div class="ic">${ic('star')}</div><div class="t"><b>Deja una reseña</b><small>Después de tu visita</small></div><span class="v">+20</span></div>
 <div class="li"><div class="ic">${ic('user')}</div><div class="t"><b>Invita a un vecino</b><small>Cuando haga su primera reserva</small></div><span class="v">+200</span></div></div>
 ${muni()}
 <div class="sec"><h3>Últimos movimientos</h3></div><div class="list">
 <div class="li"><div class="ic">${ic('cal')}</div><div class="t"><b>Reserva en Txarriduna</b><small>Ayer</small></div><span class="v">+50</span></div>
 <div class="li"><div class="ic">${ic('bag')}</div><div class="t"><b>Pedido en Pastelería Doña Mercedes</b><small>Martes</small></div><span class="v">+42</span></div>
 <div class="li"><div class="ic">${ic('coin')}</div><div class="t"><b>Canjeado en El Jose Barber</b><small>Lunes</small></div><span class="v" style="color:var(--muted)">-500</span></div></div>`;
}

let ptype=null,pubAs='vecino';
function publish(){
 const V=[['ask','chat','Pregunta al pueblo','La IA y los vecinos te responden'],['plan','user','Plan en grupo','Si se llega al mínimo, se hace'],['photo','img','Foto o texto','Comparte algo con el pueblo'],['story','story','Historia','24 horas en el inicio']];
 const N=[['flash','bolt','Hueco de última hora','Llena una mesa o cita libre'],['offer','tag','Oferta','Descuento para vecinos'],['post','img','Publicación','Foto con botón de reservar'],['story','story','Historia','24 horas en el inicio'],['plan','user','Plan en grupo','Si se llega al mínimo, se hace'],['job','store','Se busca','Oferta de trabajo gratis']];
 const types=pubAs==='vecino'?V:N;if(ptype&&!types.some(x=>x[0]===ptype))ptype=null;
 const head={photo:'Nueva publicación',story:'Nueva historia',flash:'Nuevo hueco de última hora',offer:'Nueva oferta',post:'Nueva publicación con reserva'};
 const ph={photo:'¿Qué quieres contar?',story:'Texto de tu historia (opcional)',flash:'Ej.: mesa para 4 esta noche',offer:'Ej.: 2x1 en pintxos los jueves',post:'Ej.: pintxo pote este jueves'};
 const reach=pubAs==='vecino'?'Lo verán los vecinos de Elgoibar en el inicio':'Avisaremos a los vecinos que siguen tu negocio';
 let form='';
 if(ptype==='ask')form=askForm();else if(ptype==='plan')form=planForm();else if(ptype==='job')form=`<div class="preview"><b>Nueva oferta de trabajo</b><p class="pvsub">Sale en el inicio y en Trabajo y formación. Es gratis.</p><button class="big-cta stick" data-jobpub="1">Escribir la oferta</button></div>`;
 else if(ptype)form=`<div class="preview"><b>${head[ptype]}</b>
 <label>${ptype==='photo'||ptype==='story'?'Texto':'Qué ofreces'}</label><textarea class="field" rows="3" placeholder="${ph[ptype]}"></textarea>
 ${ptype==='flash'?`<label>Hora</label><div class="opts">${['20:30','21:30','22:00'].map(h=>`<span class="opt">${h}</span>`).join('')}</div><label>Descuento</label><div class="opts">${['-10%','-15%','-20%'].map(h=>`<span class="opt">${h}</span>`).join('')}</div>`:`<label>Foto o vídeo</label><div class="opts"><span class="opt">${ic('img')} Subir</span></div>`}
 <div class="reach">${ic('bell')} ${reach}</div>
 <button class="big-cta stick" id="pubgo">Publicar</button></div>`;
 view.innerHTML=`<div class="top"><div class="place">Publicar</div></div><p class="psub">Elige qué quieres publicar</p><div class="seg pubas"><button class="${pubAs==='vecino'?'on':''}" data-pubas="vecino">Soy vecino</button><button class="${pubAs==='negocio'?'on':''}" data-pubas="negocio">Tengo un negocio</button></div><div class="pub">${types.map(x=>`<button class="${ptype===x[0]?'on':''}" data-ptype="${x[0]}"><div class="ic">${ic(x[1])}</div><b>${x[2]}</b><small>${x[3]}</small></button>`).join('')}</div>${form||''}`;
 if(ptype){const f=view.querySelector('.preview');if(f)setTimeout(()=>f.scrollIntoView({behavior:'smooth',block:'start'}),30)}
}

let prole='Vecino';
function planForm(){return `<div class="preview"><b>Nuevo plan en grupo</b>
 <label>Publicas como</label><div class="opts">${['Vecino','Negocio','Ayuntamiento'].map(r=>`<button class="opt ${prole===r?'on':''}" data-prole="${r}">${r}</button>`).join('')}</div>
 <label>Qué plan</label><input class="field" value="${prole==='Ayuntamiento'?'Autobús al concierto de Donostia':prole==='Negocio'?'Cena de sidrería con menú cerrado':'Excursión al monte y comida en el bar'}">
 <div class="row2"><div><label>Precio por persona</label><input class="field" value="${prole==='Negocio'?'35 €':'10 €'}"></div><div><label>Mínimo de gente</label><input class="field" value="${prole==='Negocio'?'30':'20'}"></div></div>
 <label>Fecha límite para apuntarse</label><input class="field" value="Jueves 22 de octubre">
 ${prole==='Ayuntamiento'?'<label>Aportación del ayuntamiento</label><input class="field" value="5 € por persona">':`<label class="chk"><input type="checkbox" ${prole==='Vecino'?'checked':''}> Pedir apoyo al ayuntamiento</label>`}
 <div class="reach">${ic('bell')} ${prole==='Vecino'?'Lo revisamos antes de publicarlo. ':''}Nadie paga hasta que se llegue al mínimo</div>
 <button class="big-cta" id="pubgo">Publicar plan</button></div>`}
function hookPub(){const pq=$('#pq');if(pq){pq.oninput=()=>{clearTimeout(pqT);pqT=setTimeout(pqPrev,350)};$('#pubq').onclick=()=>{const v=pq.value.trim();if(!v){pq.focus();return}publishQ(v)}}const b=$('#pubgo');if(b)b.onclick=()=>need('Para publicar',()=>toast(ptype==='plan'?'Plan publicado. Te avisamos con cada vecino que se apunte':'Publicado. Ya lo ven tus vecinos'))}
function walletMini(){const p=user?points:0;return `<button class="wmini" data-tab="points"><div><small>Puntos Kalea</small><b>${p.toLocaleString('es-ES')}</b><span>${user?`= ${(p/100).toFixed(2).replace('.',',')} € para gastar en Elgoibar`:'Entra para empezar a sumar'}</span></div><span class="wgo">Ver ›</span></button>`}
let alerts={flash:true,job:true,plan:true,ask:true};try{Object.assign(alerts,JSON.parse(localStorage.getItem('kalea_alerts')||'{}'))}catch(e){}
function me(){
 setTimeout(()=>{const g=$('#gear');if(g)g.onclick=()=>settingsV()},0);
 if(!user){view.innerHTML=`<div class="top"><div class="place">${t('profile')}</div><button class="ib gear" id="gear" aria-label="Ajustes">${ic('gear')}</button></div><div class="guest"><div class="ava">${ic('user')}</div><b>Estás de visita</b><p>Mira todo lo que quieras. Entra con Google para reservar, pedir, comentar y sumar puntos.</p><button class="gbtn" data-login="1">${GLOGO} Continuar con Google</button></div>${walletMini()}${instRow()}<div class="list"><div class="li"><div class="ic">${ic('town')}</div><div class="t"><b>¿Tienes un negocio?</b><small>Crea tu página gratis en 2 minutos</small></div><span class="v">›</span></div></div>`;return}
 view.innerHTML=`<div class="top"><div class="place">${t('profile')}</div><button class="ib gear" id="gear" aria-label="Ajustes">${ic('gear')}</button></div>
 <div class="me">${user.picture?`<img class="ava" src="${user.picture}" alt="" referrerpolicy="no-referrer">`:`<div class="ava">${user.name[0]}</div>`}<div><b>${user.name}</b><small>Vecino de Elgoibar · Nivel Oro</small></div></div>
 ${walletMini()}${instRow()}
 <div class="sec"><h3>Próximas</h3></div><div class="list">
 <div class="li"><div class="ic">${ic('cal')}</div><div class="t"><b>Txarriduna · mesa para 4</b><small>Sábado a las 21:30</small></div></div>
 <div class="li"><div class="ic">${ic('scis')}</div><div class="t"><b>El Jose Barber · corte y barba</b><small>Martes a las 17:30</small></div></div>
 <div class="li"><div class="ic">${ic('bag')}</div><div class="t"><b>Pastelería Doña Mercedes · pedido en camino</b><small>Llega en 15 min</small></div></div></div>
 <div class="sec"><h3>Mis planes</h3></div><div class="list">${joinedP.size?PLANS.filter(p=>joinedP.has(p.id)).map(p=>`<div class="li"><div class="ic">${ic('user')}</div><div class="t"><b>${p.title}</b><small>${p.when||''}</small></div></div>`).join(''):`<div class="li"><div class="t"><small>Aún no te has apuntado a ningún plan.</small></div></div>`}</div>
 <div class="sec"><h3>Guardados</h3></div><div class="list">${[...saved].filter(k=>B[k]).length?[...saved].filter(k=>B[k]).map(k=>`<button class="li" data-biz="${k}">${av(B[k],'lav')}<div class="t"><b>${B[k].name}</b><small>${B[k].cat}</small></div><span class="v">›</span></button>`).join(''):`<div class="li"><div class="t"><small>Toca el marcador de una publicación para guardarla aquí.</small></div></div>`}</div>
 <div class="sec"><h3>Avisos</h3></div><div class="list">${[['flash','Huecos de última hora'],['job','Ofertas de empleo en mi zona'],['plan','Planes en grupo'],['ask','Respuestas a mis preguntas']].map(x=>`<button class="li" data-alert="${x[0]}"><div class="t"><b>${x[1]}</b></div><span class="sw ${alerts[x[0]]?'on':''}"></span></button>`).join('')}</div>
 <div class="sec"><h3>Siguiendo</h3></div><div class="stories">${order.map(k=>`<button class="st" data-biz="${k}"><div class="ring seen"><img src="${B[k].img}" alt="" referrerpolicy="no-referrer" onerror="imgFail(this,'stfb','${B[k].cg}')"></div><span>${B[k].short}</span></button>`).join('')}</div>
 <div class="list"><div class="li"><div class="ic">${ic('town')}</div><div class="t"><b>¿Tienes un negocio?</b><small>Crea tu página gratis en 2 minutos</small></div><span class="v">›</span></div><button class="li out" data-logout="1"><div class="ic">${ic('back')}</div><div class="t"><b>Cerrar sesión</b></div></button></div>`;
}

function render(){if(B[decodeURIComponent(location.hash.slice(1))])history.replaceState(null,'',location.pathname+location.search);setTimeout(stWatch,0);nav();({home,explore,points:pointsV,profile:me,publish,town,ask:askV,work:workV}[tab])();hookPub();view.scrollTop=0;view.classList.remove('vin');void view.offsetWidth;view.classList.add('vin');clearTimeout(window._vt);window._vt=setTimeout(()=>view.classList.remove('vin'),600)}

function openSheet(html){$('#sheet').classList.remove('csheet');$('#sheet').innerHTML='<div class="grab"></div>'+html;$('#sheet').classList.add('on');$('#scrim').classList.add('on')}
function closeSheet(){$('#sheet').classList.remove('on','csheet');$('#scrim').classList.remove('on')}
function toast(m,p){const e=$('#toast');e.innerHTML=ic('check')+' '+m+(p?`<span>+${p}</span>`:'');e.classList.add('on');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('on'),2600)}

const CFG=window.KALEA_CONFIG||{};
let user=null;try{user=JSON.parse(localStorage.getItem('kalea_user')||'null')}catch(e){}
let pending=null;
const GLOGO='<svg class="gsvg" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';
function need(why,cb){if(user)return cb();pending=cb;loginSheet(why)}
function loginSheet(why){
 openSheet(`<div class="login"><div class="logo lg">K</div><h3>Entra en Kalea</h3><div class="sub">${why}. Es gratis y se hace en 5 segundos.</div>
 <div id="gbtn"></div>${CFG.googleClientId?'':`<button class="gbtn" id="gdemo">${GLOGO} Continuar con Google</button><div class="demo">Modo demo: el acceso real con Google se activa al poner la clave</div>`}
 <button class="later" id="later">Ahora no, seguir mirando</button>
 <p class="legal">Puedes ver todo sin registrarte. Solo te pedimos entrar para reservar, pedir, comentar, valorar o dar me gusta.</p></div>`);
 $('#later').onclick=()=>{pending=null;closeSheet()};
 if(CFG.googleClientId)renderGoogle();else $('#gdemo').onclick=()=>done({name:'Vecino de Elgoibar',email:'',picture:''});
}
function renderGoogle(){
 const go=()=>{google.accounts.id.initialize({client_id:CFG.googleClientId,callback:r=>{try{const b=r.credential.split('.')[1].replace(/-/g,'+').replace(/_/g,'/');const p=JSON.parse(decodeURIComponent(escape(atob(b))));done({name:p.name||p.email,email:p.email,picture:p.picture||''})}catch(e){toast('No se pudo entrar, prueba otra vez')}}});
  google.accounts.id.renderButton($('#gbtn'),{theme:'outline',size:'large',shape:'pill',text:'continue_with',width:300,locale:'es'})};
 if(window.google&&google.accounts)go();else{const sc=document.createElement('script');sc.src='https://accounts.google.com/gsi/client';sc.async=true;sc.onload=go;document.head.appendChild(sc)}
}
function done(u){user=u;try{localStorage.setItem('kalea_user',JSON.stringify(u))}catch(e){}closeSheet();toast('Hola, '+u.name.split(' ')[0]);const cb=pending;pending=null;if(cb)setTimeout(cb,380);else if(tab==='profile'||tab==='points')render()}
function logout(){user=null;try{localStorage.removeItem('kalea_user')}catch(e){}if(window.google&&google.accounts)google.accounts.id.disableAutoSelect();render();toast('Sesión cerrada')}
const COMMENTS={itsasoa:[['Ane','El jueves ahí estamos'],['Iker','Las gildas, las mejores del pueblo']],goxo:[['Maite','Los de chocolate también, porfa']],ile:[['Leire','Me encantó el color']],etxea:[['Jon','La Elgoibar está brutal'],['Nerea','¿Reparto a Azkue también?']]};
let MYCM={};try{MYCM=JSON.parse(localStorage.getItem('kalea_cm')||'{}')}catch(e){}
const cmLiked=new Set();
const CMN=['Ane','Iker','Maite','Jon','Nerea','Leire','Unai','Amaia','Mikel','Itziar','Asier','Garazi','Aitor','June'];
const CMT=['Qué buena pinta','Mañana me paso sin falta','¿Hasta qué hora abrís hoy?','Siempre de 10, eskerrik asko','Me lo apunto para el finde','¿Hay que reservar antes o se puede ir directamente?','El trato, de lo mejor del pueblo','Ondo pasa!','Ayer estuve y genial','Muy recomendable','¡Qué ganas!','Lo comparto con la cuadrilla','Zorionak por el trabajo','¿Esto vale también el sábado?'];
const CMH=['12 min','40 min','1 h','2 h','3 h','5 h','8 h','1 d'];
function hsh(k){let h=0;for(const c of String(k))h=(h*31+c.charCodeAt(0))>>>0;return h}
function cmList(k){const base=(typeof COMMENTS!=='undefined'&&COMMENTS[k])?COMMENTS[k].map((c,j)=>({n:c[0],t:c[1],h:CMH[(j+2)%CMH.length],id:k+'s'+j})):[];
 if(!base.length){const h=hsh(k),n=2+h%4;for(let j=0;j<n;j++){base.push({n:CMN[(h+j*5)%CMN.length],t:CMT[(h*7+j*3)%CMT.length],h:CMH[Math.min(CMH.length-1,j+(h%3))],id:k+'s'+j})}}
 return base.concat((MYCM[k]||[]).map((c,j)=>({n:c[0],t:c[1],h:'Ahora',id:k+'u'+j,me:1})))}
function cmAv(n){return `<span class="cav">${esc((n||'?')[0].toUpperCase())}</span>`}
function cmPrev(k,title){const l=cmList(k),last=l.slice(-2);return `<div class="cprev">${l.length?`<button class="vcom" data-com="${esc(k)}" data-cmt="${esc(title)}">${l.length==1?'Ver 1 comentario':'Ver los '+l.length+' comentarios'}</button>`:''}<button class="cadd" data-com="${esc(k)}" data-cmt="${esc(title)}" data-cfoc="1">${user?cmAv(user.name):'<span class="cav">'+ic('user')+'</span>'}<span>Añade un comentario...</span></button></div>`}
function cmRow(c){const l=cmLiked.has(c.id);return `<div class="crow">${cmAv(c.n)}<div class="cbd"><div><b>${esc(c.n)}</b><small>${c.h}</small></div><p>${esc(c.t)}</p><button class="crep" data-crep="${esc(c.n)}">Responder</button></div><button class="clk ${l?'on':''}" data-clk="${esc(c.id)}" aria-label="Me gusta">${ic('heart')}</button></div>`}
function cmSheet(k,title,foc){
 const draw=()=>{const l=cmList(k);$('#cl').innerHTML=l.map(cmRow).join('')};
 openSheet(`<div class="chead"><h3>Comentarios</h3>${title?`<div class="sub">${esc(title)}</div>`:''}</div><div id="cl" class="clist"></div>
 <div class="cbar">${user?cmAv(user.name):'<span class="cav">'+ic('user')+'</span>'}<input id="ci" placeholder="Añade un comentario..." autocomplete="off" enterkeyhint="send"><button id="cs" class="cpub" disabled>Publicar</button></div>`);
 $('#sheet').classList.add('csheet');draw();
 const ci=$('#ci'),cs=$('#cs');
 ci.oninput=()=>{cs.disabled=!ci.value.trim()};
 const send=()=>{const v=ci.value.trim();if(!v)return;need('Para comentar',()=>{(MYCM[k]=MYCM[k]||[]).push([user.name.split(' ')[0],v]);try{localStorage.setItem('kalea_cm',JSON.stringify(MYCM))}catch(e){}
  if(!$('#cl')){cmSheet(k,title);return}
  ci.value='';cs.disabled=true;draw();const cl=$('#cl');cl.lastElementChild&&cl.lastElementChild.classList.add('cnew');cl.lastElementChild&&cl.lastElementChild.scrollIntoView({block:'nearest',behavior:'smooth'});if(tab==='home')home()})};
 cs.onclick=send;ci.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();send()}};
 $('#cl').onclick=e=>{const lk=e.target.closest('[data-clk]'),rp=e.target.closest('[data-crep]');
  if(lk){e.stopPropagation();const id=lk.dataset.clk;cmLiked.has(id)?cmLiked.delete(id):cmLiked.add(id);lk.classList.toggle('on');lk.classList.remove('pop');void lk.offsetWidth;lk.classList.add('pop')}
  if(rp){e.stopPropagation();ci.value='@'+rp.dataset.crep+' ';cs.disabled=false;ci.focus()}};
 if(foc)setTimeout(()=>ci.focus(),350)}
function commentSheet(i){const p=POSTS[i];cmSheet(p.b,B[p.b].name)}
function rateSheet(k){
 let r=0;
 openSheet(`<h3>Valorar ${B[k].name}</h3><div class="sub">Tu opinión ayuda a otros vecinos</div><div class="stars">${[1,2,3,4,5].map(n=>`<button data-r="${n}">★</button>`).join('')}</div><textarea class="field" rows="3" placeholder="Cuéntanos qué tal (opcional)"></textarea><button class="big-cta" id="rs">Publicar valoración</button><div class="earn">${ic('coin')} +20 puntos</div>`);
 document.querySelectorAll('[data-r]').forEach(x=>x.onclick=()=>{r=+x.dataset.r;document.querySelectorAll('[data-r]').forEach(y=>y.classList.toggle('on',+y.dataset.r<=r))});
 $('#rs').onclick=()=>{if(!r){toast('Elige de 1 a 5 estrellas');return}closeSheet();points+=20;toast('Gracias por tu valoración',20)};
}
window.toast=toast;
function opts(list,on,deal){return `<div class="opts">${list.map(x=>`<button class="opt ${x===on?'on':''} ${deal&&deal[x]?'deal':''}" ${deal&&deal[x]?`data-d="${deal[x]}"`:''}>${x}</button>`).join('')}</div>`}
function action(k,pre){
 const b=B[k];
 if(b.action==='pedir'){
  openSheet(`<h3>Pedir a ${b.name}</h3><div class="sub">Reparto en Elgoibar · 20 a 30 min</div>${b.menu.map((m,i)=>`<div class="qty"><div>${m[0]}<small style="display:block;color:var(--muted);font-size:12px">${m[2]}</small></div><div class="c"><button data-q="${i}" data-d="-1">−</button><span id="q${i}">${i===0?2:0}</span><button data-q="${i}" data-d="1">+</button></div></div>`).join('')}<button class="big-cta" id="go">Pedir · <span id="tot"></span></button><div class="earn">${ic('coin')} Ganas puntos con este pedido</div>`);
  const q=b.menu.map((_,i)=>i===0?2:0),pr=b.menu.map(m=>parseFloat(m[2].replace(',','.')));
  const up=()=>{const s=q.reduce((a,n,i)=>a+n*pr[i],0);$('#tot').textContent=s.toFixed(2).replace('.',',')+' €';q.forEach((n,i)=>$('#q'+i).textContent=n);return s};up();
  document.querySelectorAll('[data-q]').forEach(x=>x.onclick=()=>{const i=+x.dataset.q;q[i]=Math.max(0,q[i]+ +x.dataset.d);up()});
  $('#go').onclick=()=>{const s=up();if(!s){toast('Añade algo al pedido');return}const p=Math.round(s*5);need('Para hacer tu pedido',()=>{closeSheet();if(user)points+=p;toast('Pedido enviado a '+b.name,p)})};return;
 }
 const isC=b.action==='cita';
 openSheet(`<h3>${isC?'Pedir cita en':'Reservar en'} ${b.name}</h3><div class="sub">${b.street}, Elgoibar</div>
 <label>${isC?'Servicio':'Personas'}</label>${isC?opts(b.menu.map(m=>m[0]),b.menu[0][0]):opts(['2','3','4','5','6+'],'2')}
 <label>Día</label>${opts(['Hoy','Mañana','Sábado','Domingo'],'Hoy')}
 <label>Hora</label>${opts(isC?['10:00','12:30','16:00','17:30','19:00']:['13:30','14:00','20:30','21:30','22:00'],pre||(isC?'17:30':'21:30'),isC?{'17:30':'-20%'}:{'21:30':'-15%'})}
 <button class="big-cta" id="go">${isC?'Confirmar cita':'Confirmar reserva'}</button><div class="earn">${ic('coin')} +50 puntos al confirmar</div>`);
 document.querySelectorAll('.sheet .opts').forEach(g=>g.querySelectorAll('.opt').forEach(o=>o.onclick=()=>{g.querySelectorAll('.opt').forEach(x=>x.classList.remove('on'));o.classList.add('on')}));
 $('#go').onclick=()=>need(isC?'Para confirmar tu cita':'Para confirmar tu reserva',()=>{points+=50;okDone(isC?'Cita confirmada':'Reserva confirmada',b.name,50)});
}
const seenS=new Set();let stIdx=0;
const CAPC={bar:'Pintxo pote esta tarde en la barra',rest:'Menú del día listo. Quedan mesas para hoy',cafe:'Recién salido del horno',alim:'Producto fresco de hoy',belleza:'Me queda un hueco esta tarde',tienda:'Novedades de otoño en tienda',salud:'Nuevo horario de tarde',serv:'Pide tu cita desde Kalea'};
const CAPK={tantaka:'Pintxo pote esta noche',txarriduna:'Chuletón del día a la brasa',pasteleria:'Hornada nueva a las 18:00',meraki:'Colores de otoño',josebarber:'Me queda un hueco hoy a las 17:30',maala:'Terraza abierta con vistas al pueblo',bst:'Clase de grupo a las 19:00'};
const XSVG='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
function story(k){stIdx=Math.max(0,order.indexOf(k));showStory()}
function closeStory(){const s=$('#story');s.classList.remove('on','paused');s.innerHTML='';document.querySelectorAll('[data-story]').forEach(el=>{const r=el.querySelector('.ring');if(r)r.classList.toggle('seen',seenS.has(el.dataset.story))})}
function nextStory(){seenS.add(order[stIdx]);if(stIdx<order.length-1){stIdx++;showStory()}else closeStory()}
function prevStory(){if(stIdx>0)stIdx--;showStory()}
function showStory(){
 const k=order[stIdx],b=B[k],a=ACT[b.action],s=$('#story');
 s.classList.remove('paused');
 s.innerHTML=`<img class="bg" src="${b.img}" alt="" referrerpolicy="no-referrer"><div class="sgrad top"></div><div class="sgrad bot"></div>
 <div class="bars">${order.map((_,i)=>`<span><i class="${i<stIdx?'full':i===stIdx?'run':''}"></i></span>`).join('')}</div>
 <div class="sh">${av(b,'sav')}<div class="sn"><b>${b.short}</b><small>hace ${stIdx+1} h <span class="sej">Ejemplo</span></small></div><button class="x" id="sx" aria-label="Cerrar">${XSVG}</button></div>
 <div class="tapl" id="stl"></div><div class="tapr" id="str"></div>
 <div class="cap">${CAPK[k]||CAPC[b.cg]}</div>
 <div class="scta"><button class="sbtn main" id="sgo">${ic(a[1])} ${t(a[0])}</button><button class="sbtn" id="sprof">Ver perfil</button><button class="sbtn sic ${liked.has(k)?'on':''}" id="slike" aria-label="Me gusta">${ic('heart')}</button></div>`;
 s.classList.add('on');
 const nx=order[stIdx+1];if(nx&&B[nx].img){const im=new Image();im.referrerPolicy='no-referrer';im.src=B[nx].img}
 s.querySelector('.bars i.run').addEventListener('animationend',nextStory);
 $('#sx').onclick=closeStory;$('#sgo').onclick=()=>{closeStory();action(k)};$('#sprof').onclick=()=>{closeStory();profile(k)};$('#slike').onclick=()=>{if(!user){closeStory();return need('Para dar me gusta',()=>setLike(k,true))}const on=!liked.has(k);setLike(k,on);const h=$('#slike');h.classList.toggle('on',on);h.classList.remove('pop');void h.offsetWidth;if(on)h.classList.add('pop')};
 [['#stl',prevStory],['#str',nextStory]].forEach(([sel,fn])=>{const el=$(sel);let t0=0;
  el.onpointerdown=e=>{t0=Date.now();window._stMv=false;s.classList.add('paused')};
  el.onpointerup=e=>{s.classList.remove('paused');if(Date.now()-t0<250&&!window._stMv)fn()};
  el.onpointerleave=()=>s.classList.remove('paused')});
}
(()=>{const s=$('#story');if(!s)return;let x0=0,y0=0;
 s.addEventListener('touchstart',e=>{const t=e.touches[0];x0=t.clientX;y0=t.clientY;window._stMv=false},{passive:true});
 s.addEventListener('touchmove',e=>{const t=e.touches[0],dx=t.clientX-x0,dy=t.clientY-y0;if(Math.abs(dx)>10||Math.abs(dy)>10)window._stMv=true;if(dy>10&&dy>Math.abs(dx)){s.classList.add('drag','paused');s.style.transform=`translateY(${dy}px) scale(${Math.max(.85,1-dy/1500)})`;s.style.borderRadius='18px'}},{passive:true});
 s.addEventListener('touchend',e=>{const t=e.changedTouches[0],dx=t.clientX-x0,dy=t.clientY-y0;s.classList.remove('drag');s.style.transform='';s.style.borderRadius='';s.classList.remove('paused');if(!window._stMv)return;if(dy>110&&dy>Math.abs(dx))closeStory();else if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy))(dx<0?nextStory:prevStory)()},{passive:true});
})();
document.addEventListener('keydown',e=>{if(!$('#story').classList.contains('on'))return;if(e.key==='Escape')closeStory();if(e.key==='ArrowRight')nextStory();if(e.key==='ArrowLeft')prevStory()});

document.addEventListener('click',e=>{
 const el=e.target.closest('[data-share],[data-save],[data-tel],[data-map],[data-exm],[data-notif],[data-pubas],[data-alert],[data-pqs],[data-wt],[data-wz],[data-walert],[data-lbretry],[data-jobi],[data-jobpub],[data-sug],[data-upv],[data-reply],[data-plan],[data-prole],[data-ev],[data-news],[data-vote],[data-inc],[data-bono],[data-scope],[data-ics],[data-going],[data-tab],[data-biz],[data-act],[data-like],[data-story],[data-flash],[data-cat],[data-ptype],[data-lang],[data-com],[data-rate],[data-login],[data-logout]');if(!el)return;
 if(el.tagName==='A')e.preventDefault();
 const d=el.dataset;
 if(d.save){const k=d.save;saved.has(k)?saved.delete(k):saved.add(k);try{localStorage.setItem('kalea_saved',JSON.stringify([...saved]))}catch(e){}el.classList.toggle('on',saved.has(k));el.classList.remove('pop');void el.offsetWidth;if(saved.has(k)){el.classList.add('pop');try{navigator.vibrate&&navigator.vibrate(8)}catch(e){}}toast(saved.has(k)?'Guardado en tu perfil':'Quitado de guardados');return}
 if(d.share){el.classList.remove('fly');void el.offsetWidth;el.classList.add('fly');const b=B[d.share],url=location.origin+location.pathname+'#'+d.share;if(navigator.share)navigator.share({title:b.name+' en Kalea',url}).catch(()=>{});else{try{navigator.clipboard.writeText(url)}catch(e){}toast('Enlace copiado')}return}
 if(d.tel){e.stopPropagation();location.href=tel(B[d.tel]);return}
 if(d.map){e.stopPropagation();window.open(B[d.map].maps,'_blank','noopener');return}
 if(d.exm){exMode=d.exm;explore();return}
 if(d.notif){notifSheet();return}
 if(d.pubas){pubAs=d.pubas;ptype=null;publish();hookPub();return}
 if(d.alert){alerts[d.alert]=!alerts[d.alert];try{localStorage.setItem('kalea_alerts',JSON.stringify(alerts))}catch(e){}me();return}
 if(d.pqs){const pq=$('#pq');if(pq){pq.value=d.pqs;pqPrev()}}
 else if(d.wt&&!d.tab){wtab=d.wt;if(wtab==='of'&&wzone==='online')wzone='comarca';workV()}
 else if(d.wz){wzone=d.wz;workV()}
 else if(d.walert){need('Para recibir avisos',()=>{walert=!walert;workV();toast(walert?'Te avisaremos cuando salga algo nuevo en tu zona':'Aviso desactivado')})}
 else if(d.lbretry){LB.err[d.lbretry]=0;workV()}
 else if(d.jobi){const j=JOBS[+d.jobi];need('Para enviar tu interés',()=>toast('Interés enviado a '+j.biz))}
 else if(d.jobpub){need('Para publicar una oferta',()=>{openSheet(`<h3>Publicar oferta</h3><div class="sub">Gratis para negocios de Elgoibar</div><input class="field" id="jp" placeholder="Puesto (ej.: camarero/a fines de semana)"><input class="field" id="jb" placeholder="Nombre del negocio"><textarea class="field" id="jd" rows="3" placeholder="Horario, condiciones y requisitos"></textarea><button class="big-cta" id="jsend">Publicar</button>`);$('#jsend').onclick=()=>{const p=$('#jp').value.trim(),b=$('#jb').value.trim();if(!p||!b)return;const esc=x=>x.replace(/</g,'&lt;');JOBS.unshift({biz:esc(b),puesto:esc(p),det:esc($('#jd').value.trim()),when:'ahora'});closeSheet();tab='home';render();toast('Oferta publicada. Ya la ven tus vecinos en el inicio')}})}
 else if(d.sug){pendingQ=d.sug;askV()}
 else if(d.upv){const k=d.upv;need('Para votar respuestas',()=>{upv.has(k)?upv.delete(k):upv.add(k);askV()})}
 else if(d.reply){const id=d.reply,inp=$('#r-'+id),txt=inp?inp.value.trim():'';if(!txt){inp&&inp.focus();return}need('Para responder',()=>{const q=myQs.concat(QS).find(x=>x.id===id);q.ans.push({who:(user.name||'Tú').split(' ')[0],txt:txt.replace(/</g,'&lt;'),v:0});points+=10;askV();toast('Respuesta publicada',10)})}
 else if(d.plan){const k=d.plan;need('Para apuntarte al plan',()=>{if(joinedP.has(k))joinedP.delete(k);else{joinedP.add(k);const p=PLANS.find(x=>x.id===k);const n=p.now+1;toast(n>=p.min?'¡Mínimo conseguido! El plan se hace':'Apuntado. Faltan '+(p.min-n)+'. No pagas nada hasta que se llegue',10);points+=10}home()})}
 else if(d.prole){prole=d.prole;publish();hookPub()}
 else if(d.ev)evSheet(d.ev);
 else if(d.news)newsSheet(d.news);
 else if(d.vote!==undefined){const i=+d.vote;need('Para votar',()=>{if(voted===null){voted=i;points+=20;toast('Voto enviado al ayuntamiento',20)}town()})}
 else if(d.inc)need('Para avisar al ayuntamiento',incSheet);
 else if(d.bono)need('Para pedir tu bono',()=>{if(!bonoOk){bonoOk=true;toast('Bono de 10 € activado. Úsalo en cualquier negocio')}if(tab==='town')town()});
 else if(d.scope){scope=d.scope;home()}
 else if(d.ics)ics(d.ics);
 else if(d.going){const k=d.going;need('Para apuntarte',()=>{if(going.has(k)){going.delete(k)}else{going.add(k);points+=10;toast('Te has apuntado. Te avisamos el día antes',10)}if(tab==='home')home()})}
 else if(d.tab){try{navigator.vibrate&&navigator.vibrate(6)}catch(e){}if(d.tab===tab&&!d.wt&&!d.pt2&&!$('.bptop')&&!$('#sheet').classList.contains('on')&&view.scrollTop>0){view.scrollTo({top:0,behavior:'smooth'});bounceTab(d.tab);return}closeSheet();if(d.wt)wtab=d.wt;if(d.pt2)ptype=d.pt2;tab=d.tab;render();bounceTab(d.tab)}
 else if(d.biz)profile(d.biz);
 else if(d.act)action(d.act);
 else if(d.like){const k=d.like;need('Para dar me gusta',()=>setLike(k,!liked.has(k)))}
 else if(d.com)cmSheet(d.com,d.cmt||'',!!d.cfoc);
 else if(d.rate){const k=d.rate;need('Para valorar',()=>rateSheet(k))}
 else if(d.login)need('Para guardar tus reservas y puntos',()=>render());
 else if(d.logout)logout();
 else if(d.story)story(d.story);
 else if(d.flash){const f=FLASH[d.flash];action(f.b,f.txt.match(/\d{1,2}:\d{2}/)[0])}
 else if(d.cat){cat=d.cat;explore()}
 else if(d.ptype){ptype=d.ptype;publish();hookPub()}
 else if(d.lang){const pk=history.state&&history.state.k;lang=d.lang;try{localStorage.setItem('kalea_lang',lang)}catch(e){}closeSheet();if(pk&&B[pk])profile(pk,1);else render()}
});
$('#scrim').onclick=closeSheet;
const _h0=decodeURIComponent(location.hash.slice(1));
render();
(()=>{const k=_h0;if(B[k]){history.replaceState({k},'','#'+k);profile(k,1)}})();
addEventListener('popstate',()=>{const k=decodeURIComponent(location.hash.slice(1));if(k==='ajustes')settingsV(1);else if(k==='apariencia')appearV(1);else if(B[k])profile(k,1);else{if($('#story').classList.contains('on'))closeStory();closeSheet();render()}});
try{if(!localStorage.getItem('kalea_lang'))setTimeout(()=>{try{if(localStorage.getItem('kalea_lang'))return}catch(e){}openSheet(`<h3>Ongi etorri · Bienvenido</h3><div class="sub">Aukeratu hizkuntza · Elige idioma</div><div class="langpick"><button data-lang="eu">Euskara</button><button data-lang="es">Castellano</button></div>`)},400)}catch(e){}


let _bip=null;addEventListener('beforeinstallprompt',e=>{e.preventDefault();_bip=e});
addEventListener('appinstalled',()=>{_bip=null;toast('Kalea instalada en tu móvil')});
function instRow(){if(matchMedia('(display-mode: standalone)').matches||navigator.standalone)return '';return `<button class="inst" data-inst="1"><div class="ic">${ic('dl')}</div><div class="t"><b>Instalar Kalea</b><small>Ábrela desde tu pantalla de inicio, como una app</small></div><span class="v">›</span></button>`}
document.addEventListener('click',e=>{if(!e.target.closest('[data-inst]'))return;
 if(_bip){_bip.prompt();_bip.userChoice.finally(()=>{_bip=null})}
 else{const ios=/iphone|ipad|ipod/i.test(navigator.userAgent);openSheet(`<h3>Instalar Kalea</h3><div class="isteps">${ios?'<p><b>1.</b> Toca el botón Compartir de Safari (el cuadrado con la flecha).</p><p><b>2.</b> Elige «Añadir a pantalla de inicio».</p><p><b>3.</b> Toca «Añadir».</p>':'<p><b>1.</b> Abre el menú del navegador (los tres puntos).</p><p><b>2.</b> Toca «Instalar aplicación» o «Añadir a pantalla de inicio».</p><p><b>3.</b> Confirma y tendrás Kalea con su icono.</p>'}</div>`)}});
if('serviceWorker' in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));

function setLike(k,on){if(on)liked.add(k);else liked.delete(k);try{navigator.vibrate&&navigator.vibrate(8)}catch(e){}
 document.querySelectorAll(`[data-like="${k}"]`).forEach(b=>{if(b.classList.contains('liked')===on)return;b.classList.toggle('liked',on);b.classList.remove('pop');void b.offsetWidth;if(on)b.classList.add('pop');const L=b.closest('article')&&b.closest('article').querySelector('.likes');if(L){const n=parseInt(L.textContent.replace(/\D/g,''))||0;L.textContent=Math.max(0,n+(on?1:-1)).toLocaleString('es-ES')+' Me gusta';L.classList.remove('bump');void L.offsetWidth;L.classList.add('bump')}})}

(()=>{let y0=null,dy=0;const ind=document.createElement('div');ind.className='ptr';ind.innerHTML='<i></i>';$('#screen').appendChild(ind);
 view.addEventListener('touchstart',e=>{y0=(tab==='home'&&view.scrollTop<=0&&!$('#story').classList.contains('on'))?e.touches[0].clientY:null;dy=0},{passive:true});
 view.addEventListener('touchmove',e=>{if(y0===null)return;dy=e.touches[0].clientY-y0;if(dy<=0){ind.style.transform='';return}const d=Math.min(90,dy*.5);ind.classList.add('show');ind.style.transform=`translate(-50%,${d}px) rotate(${dy*2}deg)`},{passive:true});
 view.addEventListener('touchend',()=>{if(y0===null)return;y0=null;if(dy*.5>=60){ind.classList.add('spin');ind.style.transform='translate(-50%,60px)';try{navigator.vibrate&&navigator.vibrate(10)}catch(e){}
  Promise.resolve(typeof loadNews==='function'?loadNews():null).catch(()=>{}).then(()=>setTimeout(()=>{refreshHome();ind.classList.remove('spin','show');ind.style.transform='';toast('Todo al día')},700))}
  else{ind.classList.remove('show');ind.style.transform=''}},{passive:true});
})();

// Fotos que aparecen suavemente al cargar
document.addEventListener('load',e=>{const i=e.target;if(i&&i.tagName==='IMG')i.classList.add('ld')},true);
document.addEventListener('error',e=>{const i=e.target;if(i&&i.tagName==='IMG')i.classList.add('ld')},true);
new MutationObserver(()=>{document.querySelectorAll('img:not(.ld)').forEach(i=>{if(i.complete)i.classList.add('ld')})}).observe(document.body,{childList:true,subtree:true});
// Arrastrar la hoja hacia abajo para cerrarla
(()=>{const sh=$('#sheet');let y0=null,dy=0;
 sh.addEventListener('touchstart',e=>{const r=sh.getBoundingClientRect(),y=e.touches[0].clientY;y0=(y-r.top<60||sh.scrollTop<=0)&&!e.target.closest('input,textarea,select,.cl')?y:null;dy=0},{passive:true});
 sh.addEventListener('touchmove',e=>{if(y0===null)return;dy=e.touches[0].clientY-y0;if(dy>0){sh.classList.add('drag');sh.style.transform=`translateY(${dy}px)`;$('#scrim').style.opacity=Math.max(0,1-dy/400)}},{passive:true});
 sh.addEventListener('touchend',()=>{if(y0===null)return;y0=null;sh.classList.remove('drag');sh.style.transform='';$('#scrim').style.opacity='';if(dy>110)closeSheet()},{passive:true});
})();

// Confirmación con check animado
function okDone(t1,t2,p){try{navigator.vibrate&&navigator.vibrate([12,60,12])}catch(e){}openSheet(`<div class="okv"><svg class="okc" viewBox="0 0 52 52"><circle cx="26" cy="26" r="23"/><path d="M15.5 27.5l7 7 14-15"/></svg><h3>${esc(t1)}</h3><p>${esc(t2)}</p>${p?`<span class="okp">+${p} puntos</span>`:''}</div>`);clearTimeout(window._okT);window._okT=setTimeout(closeSheet,2100)}
// Selector con píldora que se desliza
const SEGP={};
function segInd(){document.querySelectorAll('.seg').forEach(g=>{const b0=g.querySelector('button');if(!b0)return;const key=Object.keys(b0.dataset)[0]||'seg';let i=g.querySelector('.segi');if(!i){i=document.createElement('span');i.className='segi';g.prepend(i);g.classList.add('hasi')}
 const o=g.querySelector('button.on');if(!o){i.style.opacity=0;return}const pos=[o.offsetLeft,o.offsetWidth];if(i.dataset.p===pos.join())return;
 const prev=SEGP[key];if(prev&&!i.dataset.p){i.style.transition='none';i.style.width=prev[1]+'px';i.style.transform=`translateX(${prev[0]}px)`;void i.offsetWidth;i.style.transition=''}
 i.dataset.p=pos.join();SEGP[key]=pos;i.style.opacity=1;i.style.width=pos[1]+'px';i.style.transform=`translateX(${pos[0]}px)`})}
// Números que cuentan hacia arriba
function countUp(){document.querySelectorAll('.wmini b').forEach(el=>{if(el._cu)return;el._cu=1;const to=parseInt(el.textContent.replace(/\D/g,''))||0;if(to<10||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const t0=performance.now(),d=750;const f=t=>{const k=Math.min(1,(t-t0)/d),e=1-Math.pow(1-k,3);el.textContent=Math.round(to*e).toLocaleString('es-ES');if(k<1)requestAnimationFrame(f)};el.textContent='0';requestAnimationFrame(f)})}
let _mq=0;const _mo=()=>{if(_mq)return;_mq=requestAnimationFrame(()=>{_mq=0;segInd();countUp()})};
new MutationObserver(_mo).observe(view,{childList:true,subtree:true});new MutationObserver(_mo).observe($('#sheet'),{childList:true,subtree:true});_mo();

// ---------- Ajustes y apariencia ----------
const THN={light:'Claro',dark:'Oscuro',auto:'Automático'};
function curTheme(){try{return localStorage.getItem('kalea_theme')||'light'}catch(e){return 'light'}}
function applyTheme(anim){const t=curTheme(),dk=t==='dark'||(t==='auto'&&matchMedia('(prefers-color-scheme: dark)').matches),h=document.documentElement;
 if(anim){h.classList.add('theming');clearTimeout(window._thT);window._thT=setTimeout(()=>h.classList.remove('theming'),450)}
 h.classList.toggle('dark',dk);const m=document.querySelector('meta[name=theme-color]');if(m)m.content=dk?'#000000':'#ffffff'}
try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>{if(curTheme()==='auto')applyTheme(1)})}catch(e){}
applyTheme();
function setBack(){const b=$('#stback');if(b)b.onclick=()=>{if(history.state&&history.state.s)history.back();else{tab='profile';render()}}}
function sRow(id,icn,title,val,extra){return `<button class="srow" id="${id}"><span class="sic">${ic(icn)}</span><span class="st2">${title}</span>${val?`<span class="sval">${val}</span>`:''}${extra||'<span class="sch">'+ic('chev')+'</span>'}</button>`}
function settingsV(noPush){
 const nt=(()=>{try{return localStorage.getItem('kalea_push')==='1'}catch(e){return false}})();
 view.innerHTML=`<div class="bptop"><button class="ib" id="stback" aria-label="Volver">${ic('back')}</button><b>Ajustes</b><span class="ib" style="visibility:hidden"></span></div>
 <div class="sgrp"><small>Tu app</small>${sRow('s-ap','moon','Apariencia',THN[curTheme()])}${sRow('s-ln','lng','Idioma',lang==='eu'?'Euskara':'Castellano')}${sRow('s-nt','bellx','Notificaciones','',`<span class="tgl ${nt?'on':''}"><i></i></span>`)}</div>
 <div class="sgrp"><small>Más</small>${instRow()?sRow('s-in','dl','Instalar Kalea'):''}${sRow('s-pv','shield','Privacidad y datos')}${sRow('s-hp','help','Ayuda')}${sRow('s-ab','info','Acerca de Kalea','Versión de prueba')}</div>
 ${user?`<div class="sgrp">${sRow('s-lo','out','Cerrar sesión','','')}</div>`:''}`;
 setBack();
 $('#s-ap').onclick=()=>appearV();
 $('#s-ln').onclick=()=>{openSheet(`<h3>Idioma</h3><div class="sopts">${[['es','Castellano'],['eu','Euskara']].map(o=>`<button class="sopt ${lang===o[0]?'on':''}" data-sl="${o[0]}">${o[1]}<span class="rad"></span></button>`).join('')}</div>`);document.querySelectorAll('[data-sl]').forEach(b=>b.onclick=()=>{lang=b.dataset.sl;try{localStorage.setItem('kalea_lang',lang)}catch(e){}closeSheet();settingsV(1);nav()})};
 $('#s-nt').onclick=()=>{const on=!(localStorage.getItem('kalea_push')==='1');try{localStorage.setItem('kalea_push',on?'1':'0')}catch(e){}$('#s-nt .tgl').classList.toggle('on',on);try{navigator.vibrate&&navigator.vibrate(6)}catch(e){}if(on&&window.Notification&&Notification.permission==='default')Notification.requestPermission().catch(()=>{});toast(on?'Te avisaremos de huecos y ofertas':'Notificaciones desactivadas')};
 const si=$('#s-in');if(si)si.dataset.inst='1';
 $('#s-pv').onclick=()=>openSheet(`<h3>Privacidad y datos</h3><div class="isteps"><p>Puedes mirar Kalea sin cuenta. Solo pedimos entrar con Google para reservar, pedir, comentar o sumar puntos.</p><p>Tus guardados, me gusta y ajustes se quedan en este móvil.</p></div>`);
 $('#s-hp').onclick=()=>openSheet(`<h3>Ayuda</h3><div class="isteps"><p><b>Reservar o pedir:</b> abre un negocio y toca el botón azul.</p><p><b>Puntos:</b> sumas con cada reserva y los gastas en comercios de Elgoibar.</p><p><b>Instalar:</b> desde Ajustes, Instalar Kalea.</p></div>`);
 $('#s-ab').onclick=()=>openSheet(`<h3>Kalea</h3><div class="isteps"><p>La red social local de Elgoibar. Versión de prueba con negocios de ejemplo.</p></div>`);
 const lo=$('#s-lo');if(lo)lo.dataset.logout='1';
 if(!noPush&&location.hash!=='#ajustes')history.pushState({s:1},'','#ajustes');view.scrollTop=0;
}
function appearV(noPush){
 const c=curTheme(),mock=k=>`<span class="mk mk-${k}"><i></i><i></i><i></i></span>`;
 view.innerHTML=`<div class="bptop"><button class="ib" id="stback" aria-label="Volver">${ic('back')}</button><b>Apariencia</b><span class="ib" style="visibility:hidden"></span></div>
 <div class="thp">${['light','dark','auto'].map(k=>`<button class="thc ${c===k?'on':''}" data-th="${k}">${mock(k)}<span class="thl">${THN[k]}</span><span class="rad"></span></button>`).join('')}</div>
 <p class="thn">En Automático, Kalea usa el mismo modo que tu móvil.</p>`;
 setBack();
 document.querySelectorAll('[data-th]').forEach(b=>b.onclick=(ev)=>{try{localStorage.setItem('kalea_theme',b.dataset.th)}catch(e){}themeReveal(ev.clientX,ev.clientY);try{navigator.vibrate&&navigator.vibrate(6)}catch(e){}document.querySelectorAll('[data-th]').forEach(x=>x.classList.toggle('on',x===b))});
 if(!noPush&&location.hash!=='#apariencia')history.pushState({s:1},'','#apariencia');view.scrollTop=0;
}

// ---------- Microinteracciones 4 ----------
function bounceTab(k){setTimeout(()=>{const b=document.querySelector(`#tabbar [data-tab="${k}"]`);if(!b)return;b.classList.remove('bnc');void b.offsetWidth;b.classList.add('bnc')},0)}
function themeReveal(x,y){const h=document.documentElement;
 if(!document.startViewTransition||matchMedia('(prefers-reduced-motion: reduce)').matches){applyTheme(1);return}
 const vt=document.startViewTransition(()=>applyTheme(0));
 vt.ready.then(()=>{const r=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));h.animate({clipPath:[`circle(0px at ${x}px ${y}px)`,`circle(${r}px at ${x}px ${y}px)`]},{duration:520,easing:'cubic-bezier(.2,.9,.25,1)',pseudoElement:'::view-transition-new(root)'})}).catch(()=>{})}
// historias: se abren desde el avatar tocado
document.addEventListener('pointerdown',e=>{const a=e.target.closest&&e.target.closest('[data-story]');if(a){const r=a.getBoundingClientRect();window._stO={x:r.left+r.width/2,y:r.top+r.height/2}}else window._stO=null},true);
const _story0=story;story=function(k){_story0(k);const st=document.querySelector('.story');const o=window._stO;if(!st||!o)return;const pr=(st.parentElement||document.body).getBoundingClientRect();st.style.transformOrigin=`${o.x-pr.left}px ${o.y-pr.top}px`;st.classList.remove('zin');void st.offsetWidth;st.classList.add('zin');setTimeout(()=>{st.classList.remove('zin');st.style.transformOrigin=''},380);window._stO=null};
// la barra de arriba se esconde al bajar y vuelve al subir
let _ly=0;view.addEventListener('scroll',()=>{const tp=view.querySelector(':scope>.top');const y=view.scrollTop,dy=y-_ly;_ly=y;if(!tp)return;if(tab!=='home'||y<90){tp.classList.remove('hid');return}if(dy>6)tp.classList.add('hid');else if(dy<-6)tp.classList.remove('hid')},{passive:true});
})();
