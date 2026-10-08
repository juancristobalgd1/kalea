(()=>{
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
const AIEV=[
 {id:'mercado',scope:'pueblo',title:'Mercado de productores',when:'Sábado 17 de octubre · 10:00 a 14:00',day:'17',mon:'oct',where:'Plaza de Elgoibar',img:'assets/mercado.jpg',txt:'Vuelve el mercado de productores a la plaza: queso Idiazabal, verdura de temporada, miel y talos recién hechos. Plan perfecto para ir con los niños por la mañana.',tip:'Mendi Jatetxea y Taberna Itsasoa tienen mesas libres para después',src:'Agenda del ayuntamiento',going:86,s:'20261017T100000',e:'20261017T140000'},
 {id:'pintxos',scope:'pueblo',title:'Ruta de pintxos de otoño',when:'Viernes 23 de octubre · desde las 19:00',day:'23',mon:'oct',where:'12 bares de Elgoibar',img:'assets/bar.jpg',txt:'Doce bares del pueblo preparan un pintxo especial de otoño. Sella tu ruta en la app y entra en el sorteo de una cena para dos.',tip:'Cada bar visitado te da 30 puntos',src:'Bares de Kalea',going:142,s:'20261023T190000',e:'20261023T230000'},
 {id:'festival',scope:'provincia',title:'Festival de música al aire libre',when:'Sábado 24 de octubre · 20:00',day:'24',mon:'oct',where:'Donostia · a 45 min',img:'assets/concierto.jpg',txt:'Grupos vascos en directo, food trucks y ambiente hasta tarde. Si vas desde Elgoibar, te avisamos de quién comparte coche.',tip:'Pizzeria Etxea te guarda la cena para la vuelta',src:'Agenda cultural de Euskadi',going:340,s:'20261024T200000',e:'20261025T010000'}];
const NEWS=[
 {id:'n1',kind:'Aviso',title:'Corte de tráfico por obras en el centro',txt:'El martes 13 de octubre, de 8:00 a 15:00, se corta el tráfico en el centro por obras de asfaltado. Los comercios siguen abiertos y se puede llegar andando.',src:'Ayuntamiento de Elgoibar'},
 {id:'n2',kind:'Noticia',title:'Abren las inscripciones de los cursos de otoño',txt:'Ya puedes apuntarte a los cursos de otoño del polideportivo: natación para niños, yoga y pilates. Plazas limitadas.',src:'Polideportivo municipal'},
 {id:'n3',kind:'Gipuzkoa',title:'Fin de semana de ferias en la provincia',txt:'Este fin de semana hay ferias y mercados en varios pueblos de Gipuzkoa. Kalea IA te resume los que pillan a menos de 30 minutos.',src:'Agenda cultural de Euskadi'}];
const POLL={q:'¿Qué quieres para las próximas fiestas?',o:[['Más conciertos',38],['Actividades para niños',31],['Feria gastronómica',22],['Deporte popular',9]]};
let voted=null,bonoOk=false;
const PLANS=[
 {id:'bus',org:'Ayuntamiento',by:'Ayuntamiento de Elgoibar',title:'Autobús al festival de Donostia',price:10,min:50,now:42,until:'Cierra el jueves 22',img:'assets/concierto.jpg',cof:'El ayuntamiento pone 5 € por persona'},
 {id:'cena',org:'Negocio',by:'Mendi Jatetxea',title:'Cena de sidrería con menú cerrado',price:35,min:30,now:24,until:'Cierra el miércoles 21',img:'assets/restaurante.jpg'},
 {id:'mus',org:'Vecino',by:'Ane, vecina de Elgoibar',title:'Txapelketa de mus en el bar del jubilado',price:5,min:16,now:16,until:'Cierra el sábado 17',img:'assets/bar.jpg'}];
const joinedP=new Set();
function planCard(p){const j=joinedP.has(p.id),n=p.now+(j?1:0),ok=n>=p.min,pc=Math.min(100,Math.round(n*100/p.min));
 return `<div class="plan"><div class="im" style="background-image:url(${p.img})"><span class="org o-${p.org}">${p.org}</span>${ok?'<span class="ok">Se hace</span>':''}</div><div class="bd"><b>${p.title}</b><small>${p.by}</small>
 <div class="prog"><span style="width:${pc}%"></span></div><div class="pn"><b>${n} de ${p.min}</b><span>${ok?'Mínimo conseguido':'Faltan '+(p.min-n)}</span></div>
 <div class="pm">${p.price} € por persona · ${p.until}</div>${p.cof?`<div class="cof">${ic('town')} ${p.cof}</div>`:''}
 <button class="cta wide ${j?'done':''}" data-plan="${p.id}">${j?ic('check')+' Apuntado':'Me apunto'}</button><small class="nocharge">${ok?'Se cobra al cerrar el plan':'Solo pagas si se llega al mínimo'}</small></div></div>`}
function plans(){return `<div class="sec"><h3>Si somos tantos, se hace</h3><a href="#" data-tab="publish" data-pt2="plan">Crear plan</a></div><div class="plans">${PLANS.map(planCard).join('')}</div>`}
let scope='pueblo';const going=new Set();
const ACT={reservar:['reservar','cal'],cita:['cita','scis'],pedir:['pedir','bag']};

const $=s=>document.querySelector(s);
const view=$('#view');
let tab='home',liked=new Set(),cat='Todos',points=1240;

function nav(){
 const tabs=[['home','home'],['explore','search'],['plus','plus'],['points','coin'],['profile','user']];
 $('#tabbar').innerHTML=tabs.map(([k,i])=>k==='plus'?`<button class="plus" data-tab="publish" aria-label="Publicar">${ic('plus')}</button>`:`<button class="tab ${tab===k?'on':''}" data-tab="${k}">${ic(i)}<span>${t(k)}</span></button>`).join('');
}
function topBar(){return `<div class="top"><button class="place"><div><small>Tu pueblo</small>Elgoibar</div>${ic('down')}</button><div class="icons"><button class="ib" data-tab="explore">${ic('search')}</button><button class="ib" onclick="toast('3 huecos nuevos cerca de ti')">${ic('bell')}<i class="dot"></i></button></div></div>`}
function stories(){return `<div class="stories">${order.map((k,i)=>`<button class="st" data-story="${k}"><div class="ring ${i>3?'seen':''}"><img src="${B[k].img}" alt=""></div><span>${B[k].name.split(' ')[0]==='Taberna'?'Itsasoa':B[k].name.split(' ')[0]}</span></button>`).join('')}</div>`}
function flash(){return `<div class="sec"><h3 class="live">${t('flash')}</h3><a href="#" data-tab="explore">${t('see')}</a></div><div class="flash">${FLASH.map((f,i)=>`<button class="fc" data-flash="${i}"><div class="im" style="background-image:url(${B[f.b].img})"><span class="off">${f.off}</span><span class="left">${f.left}</span></div><div class="bd"><b>${f.txt}</b><small>${B[f.b].name}</small></div></button>`).join('')}</div>`}
function muni(){return `<div class="muni"><div class="ic">${ic('town')}</div><div><b>Bonos del comercio local<span class="tag">Ejemplo</span></b><p>Tu ayuntamiento te regala 10 € para gastar en cualquier negocio de Kalea.</p></div></div>`}
function post(p){const b=B[p.b],a=ACT[b.action],l=liked.has(p.b);return `<article class="post"><div class="ph"><img class="av" src="${b.img}" alt=""><button class="nm" data-biz="${p.b}"><b>${b.name} ${ic('ver','ver')}</b><small>${p.time} · ${b.street}</small></button><span style="color:var(--muted)">•••</span></div><img class="pimg" src="${b.img}" alt=""><div class="pa"><button class="pill ${l?'liked':''}" data-like="${p.b}">${ic('heart')} ${p.likes+(l?1:0)}</button><button class="pill" data-com="${POSTS.indexOf(p)}">${ic('chat')} ${p.com}</button><button class="cta" data-act="${p.b}">${ic(a[1])} ${t(a[0])}</button></div><p>${p.txt}</p></article>`}
function home(){view.innerHTML=topBar()+stories()+agenda()+plans()+townCard()+flash()+`<div class="sec"><h3>${scope==='pueblo'?t('feed'):'En Gipuzkoa'}</h3><div class="seg"><button class="${scope==='pueblo'?'on':''}" data-scope="pueblo">Elgoibar</button><button class="${scope==='provincia'?'on':''}" data-scope="provincia">Gipuzkoa</button></div></div>`+feed()}
function agenda(){return `<div class="sec"><h3 class="aih">${ic('spark')} Pasa en Elgoibar</h3><small class="aisub">Creado con IA</small></div><div class="agenda">${AIEV.map(e=>`<button class="ag agev" data-ev="${e.id}"><div class="im" style="background-image:url(${e.img})"><span class="d"><b>${e.day}</b>${e.mon}</span><span class="sc">${e.scope==='pueblo'?'Elgoibar':'Gipuzkoa'}</span></div><div class="bd"><b>${e.title}</b><small>${e.going} vecinos van</small></div></button>`).join('')}${NEWS.map(n=>`<button class="ag nw" data-news="${n.id}"><div class="nk ${n.kind==='Aviso'?'warn':''}">${ic(n.kind==='Aviso'?'alert':'news')} ${n.kind}</div><b>${n.title}</b><small>${n.src}</small></button>`).join('')}</div>`}
function townCard(){return `<div class="townc"><div class="th"><div class="ic">${ic('town')}</div><div><b>Tu ayuntamiento</b><small>Avisos, encuestas, incidencias y bonos</small></div><button class="go" data-tab="town">Abrir</button></div><div class="tq"><button data-tab="town">${ic('alert')}<span>Avisos</span></button><button data-tab="town">${ic('vote')}<span>Participa</span></button><button data-inc="1">${ic('wrench')}<span>Incidencia</span></button><button data-bono="1">${ic('coin')}<span>Bono 10 €</span></button></div></div>`}
function town(){const tot=POLL.o.reduce((a,x)=>a+x[1],0)+(voted!==null?1:0);
 view.innerHTML=`<div class="top"><button class="ib" data-tab="home">${ic('back')}</button><div class="ttl">Ayuntamiento de Elgoibar ${ic('ver','ver')}</div><span class="tag">Ejemplo</span></div>
 <div class="tsec"><h3>${ic('alert')} Avisos oficiales</h3>${NEWS.filter(n=>n.kind==='Aviso').map(n=>`<div class="tcard warn"><b>${n.title}</b><p>${n.txt}</p><small>Te llega como notificación a todos los vecinos</small></div>`).join('')}<div class="tcard"><b>Recogida de enseres</b><p>Jueves 15 de octubre. Avísanos desde la app y pasamos por tu portal.</p></div></div>
 <div class="tsec"><h3>${ic('vote')} Participa</h3><div class="tcard"><b>${POLL.q}</b>${POLL.o.map((o,i)=>{const v=o[1]+(voted===i?1:0),p=Math.round(v*100/tot);return `<button class="pollo ${voted===i?'on':''}" data-vote="${i}"><span class="bar" style="width:${voted!==null?p:0}%"></span><span class="lb">${o[0]}</span>${voted!==null?`<span class="pc">${p}%</span>`:''}</button>`}).join('')}<small>${voted!==null?'Gracias por votar · +20 puntos':'312 vecinos han votado · votar da 20 puntos'}</small></div></div>
 <div class="tsec"><h3>${ic('wrench')} Incidencias</h3><div class="tcard"><p>¿Una farola fundida, un bache, basura acumulada? Haz una foto y llega directa al ayuntamiento. Te avisamos cuando esté arreglado.</p><button class="cta wide" data-inc="1">${ic('wrench')} Avisar de una incidencia</button></div></div>
 <div class="tsec"><h3>${ic('coin')} Bonos del comercio local</h3><div class="tcard"><p>10 € para gastar en cualquier negocio de Kalea. Cada bono mueve dinero que se queda en el pueblo.</p><button class="cta wide ${bonoOk?'done':''}" data-bono="1">${bonoOk?ic('check')+' Bono activado':ic('coin')+' Pedir mi bono'}</button></div></div>
 <div class="tsec"><h3>${ic('chart')} Panel para el ayuntamiento</h3><small class="demo">Datos de ejemplo de un mes</small>
 <div class="kpis"><div><b>2.140</b><small>vecinos activos</small></div><div><b>18.600 €</b><small>gastados en comercio local con bonos</small></div><div><b>1.230</b><small>asistentes a eventos</small></div><div><b>41 de 47</b><small>incidencias resueltas · 2,3 días de media</small></div></div>
 <div class="tcard"><b>Uso semanal de la app</b><div class="bars">${[38,52,47,61,70,66,88].map((h,i)=>`<div><span style="height:${h}%"></span><small>${'LMXJVSD'[i]}</small></div>`).join('')}</div><p>El ayuntamiento ve qué eventos funcionan, qué piden los vecinos y cuánto dinero se queda en el comercio del pueblo.</p></div></div>`}
function incSheet(){openSheet(`<h3>Avisar de una incidencia</h3><p class="sub">Llega directa al ayuntamiento</p>${opts(['Farola','Bache','Basura','Ruido','Otro'],'Farola')}<button class="photo">${ic('cam')} Añadir foto</button><div class="loc">${ic('pin')} Ubicación: Calle Nagusia (aprox.)</div><button class="cta wide" id="incgo">Enviar al ayuntamiento</button>`);
 $('#sheet').querySelectorAll('.opt').forEach(o=>o.onclick=()=>{$('#sheet').querySelectorAll('.opt').forEach(x=>x.classList.remove('on'));o.classList.add('on')});
 $('#incgo').onclick=()=>{closeSheet();points+=15;toast('Enviado. Te avisamos cuando esté arreglado',15)}}
function evSheet(id){const e=AIEV.find(x=>x.id===id);openSheet(`<div class="post ai sheetpost">${aiPost(e).replace(/^<article class="post ai">|<\/article>$/g,'')}</div>`)}
function newsSheet(id){const n=NEWS.find(x=>x.id===id);openSheet(`<div class="nk ${n.kind==='Aviso'?'warn':''}">${ic(n.kind==='Aviso'?'alert':'news')} ${n.kind}</div><h3>${n.title}</h3><p class="sub">${n.txt}</p><small class="aisrc">${ic('spark')} Resumido por Kalea IA · Fuente: ${n.src}</small>`)}
function feed(){
 if(scope==='provincia')return AIEV.map(aiPost).join('');
 const ev=AIEV.filter(e=>e.scope==='pueblo');const out=[];
 POSTS.forEach((p,i)=>{out.push(post(p));if(ev[i])out.push(aiPost(ev[i]))});return out.join('');
}
function aiPost(e){const g=going.has(e.id),l=liked.has('ai-'+e.id);return `<article class="post ai"><div class="ph"><div class="av aiav">${ic('spark')}</div><div class="nm"><b>Kalea IA <span class="aitag">${ic('spark')} Creado con IA</span></b><small>Fuente: ${e.src}</small></div></div>
 <div class="evimg"><img class="pimg" src="${e.img}" alt=""><div class="evdate"><b>${e.day}</b><small>${e.mon}</small></div><span class="evscope">${e.scope==='pueblo'?'Elgoibar':'Gipuzkoa'}</span></div>
 <div class="evbody"><h4>${e.title}</h4><div class="evmeta">${ic('cal')} ${e.when}</div><div class="evmeta">${ic('pin')} ${e.where}</div><p>${e.txt}</p><div class="evtip">${ic('bolt')} ${e.tip}</div></div>
 <div class="pa"><button class="pill ${l?'liked':''}" data-like="ai-${e.id}">${ic('heart')} ${(e.likes||Math.round(e.going*1.4))+(l?1:0)}</button><button class="pill" data-ics="${e.id}">${ic('cal')} Calendario</button><button class="cta ${g?'done':''}" data-going="${e.id}">${g?ic('check')+' Vas':ic('user')+' Me apunto'}</button></div><div class="evgo">${e.going+(g?1:0)} vecinos van</div></article>`}
function ics(id){const e=AIEV.find(x=>x.id===id);const txt=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Kalea//ES','BEGIN:VEVENT','UID:'+e.id+'@kalea','DTSTART;TZID=Europe/Madrid:'+e.s,'DTEND;TZID=Europe/Madrid:'+e.e,'SUMMARY:'+e.title,'LOCATION:'+e.where,'DESCRIPTION:'+e.txt,'END:VEVENT','END:VCALENDAR'].join('\r\n');
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([txt],{type:'text/calendar'}));a.download=e.id+'.ics';document.body.appendChild(a);a.click();a.remove();toast('Añadido a tu calendario')}

function explore(){
 const cats=['Todos','Bares','Restaurantes','Peluquerías','Barberías','Panaderías','A domicilio'];
 const M={'Bares':'Bar','Restaurantes':'Restaurante','Peluquerías':'Peluquería','Barberías':'Barbería','Panaderías':'Panadería','A domicilio':'domicilio'};
 const match=k=>cat==='Todos'||B[k].cat.includes(M[cat]);
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
 <button class="rate" data-rate="${k}"><span>Valora ${b.name}</span><span class="st5">★★★★★</span></button><div class="tabs2"><button class="on" data-pt="menu">${b.action==='cita'?'Servicios':'Carta'}</button><button data-pt="pubs">Publicaciones</button><button data-pt="info">Info</button></div><div id="pt"></div></div>`;
 const pt=w=>{$('#pt').innerHTML=w==='menu'?b.menu.map(m=>`<div class="menu-i"><div>${m[0]}<small>${m[1]}</small></div><b>${m[2]}</b></div>`).join(''):w==='pubs'?`<div class="grid3">${order.concat(order).slice(0,9).map(x=>`<img src="${B[x].img}" alt="">`).join('')}</div>`:`<div class="hours">${b.street}, 20870 Elgoibar<br>Lunes a jueves: 9:00 a 22:00<br>Viernes y sábado: 9:00 a 1:00<br>Domingo: 10:00 a 16:00<br><br>Esta página se crea sola al unirse a Kalea y sale en Google.</div>`;
  document.querySelectorAll('[data-pt]').forEach(x=>x.classList.toggle('on',x.dataset.pt===w))};
 document.querySelectorAll('[data-pt]').forEach(x=>x.onclick=()=>pt(x.dataset.pt));pt('menu');view.scrollTop=0;
}

function pointsV(){
 view.innerHTML=`<div class="top"><div class="place">${t('points')}</div></div><div class="wallet"><small>Puntos Kalea</small><div class="pts">${(user?points:0).toLocaleString('es-ES')}</div><small>= ${((user?points:0)/100).toFixed(2).replace('.',',')} € para gastar en Elgoibar</small><div class="qr">${ic('qr')}</div></div>
 ${user?'':`<div style="margin:0 18px 14px"><button class="gbtn" data-login="1">${GLOGO} Entra para empezar a sumar</button></div>`}<div class="sec"><h3>Cómo ganar puntos</h3></div><div class="list">
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
 const types=[['plan','user','Plan en grupo','Si se llega al mínimo, se hace'],['flash','bolt','Hueco de última hora','Llena una mesa o cita libre'],['story','story','Historia','24 horas en el inicio'],['post','img','Publicación','Foto con botón de reservar'],['offer','tag','Oferta','Descuento para vecinos']];
 view.innerHTML=`<div class="top"><div class="place">Publicar</div></div><div class="pub">${types.map(x=>`<button class="${ptype===x[0]?'on':''}" data-ptype="${x[0]}"><div class="ic">${ic(x[1])}</div><b>${x[2]}</b><small>${x[3]}</small></button>`).join('')}</div>
 ${ptype==='plan'?planForm():`<div class="preview"><b>${ptype==='flash'?'Nuevo hueco de última hora':ptype==='story'?'Nueva historia':ptype==='post'?'Nueva publicación':'Nueva oferta'}</b>
 <label>Qué ofreces</label><input class="field" value="${ptype==='flash'?'Mesa para 4 esta noche':ptype==='offer'?'2x1 en pintxos los jueves':'Pintxo pote este jueves'}">
 ${ptype==='flash'?`<label>Hora</label><div class="opts"><span class="opt">20:30</span><span class="opt on">21:30</span><span class="opt">22:00</span></div><label>Descuento</label><div class="opts"><span class="opt">-10%</span><span class="opt on">-15%</span><span class="opt">-20%</span></div>`:`<label>Foto o vídeo</label><div class="opts"><span class="opt">${ic('img')} Subir</span></div>`}
 <div class="reach">${ic('bell')} Avisaremos a 1.240 vecinos a menos de 1 km</div>
 <button class="big-cta" id="pubgo">Publicar ahora</button></div>`}`;
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
function hookPub(){const b=$('#pubgo');if(b)b.onclick=()=>need('Para publicar',()=>toast(ptype==='plan'?'Plan publicado. Te avisamos con cada vecino que se apunte':'Publicado. Ya lo ven tus vecinos'))}
function me(){
 if(!user){view.innerHTML=`<div class="top"><div class="place">${t('profile')}</div><div class="lang"><button class="${lang==='es'?'on':''}" data-lang="es">ES</button><button class="${lang==='eu'?'on':''}" data-lang="eu">EU</button></div></div><div class="guest"><div class="ava">${ic('user')}</div><b>Estás de visita</b><p>Mira todo lo que quieras. Entra con Google para reservar, pedir, comentar y sumar puntos.</p><button class="gbtn" data-login="1">${GLOGO} Continuar con Google</button></div><div class="list"><div class="li"><div class="ic">${ic('town')}</div><div class="t"><b>¿Tienes un negocio?</b><small>Crea tu página gratis en 2 minutos</small></div><span class="v">›</span></div></div>`;return}
 view.innerHTML=`<div class="top"><div class="place">${t('profile')}</div><div class="lang"><button class="${lang==='es'?'on':''}" data-lang="es">ES</button><button class="${lang==='eu'?'on':''}" data-lang="eu">EU</button></div></div>
 <div class="me">${user.picture?`<img class="ava" src="${user.picture}" alt="" referrerpolicy="no-referrer">`:`<div class="ava">${user.name[0]}</div>`}<div><b>${user.name}</b><small>Vecino de Elgoibar · Nivel Oro</small></div></div>
 <div class="sec"><h3>Próximas</h3></div><div class="list">
 <div class="li"><div class="ic">${ic('cal')}</div><div class="t"><b>Mendi Jatetxea · mesa para 4</b><small>Sábado a las 21:30</small></div></div>
 <div class="li"><div class="ic">${ic('scis')}</div><div class="t"><b>Txema Barber · corte y barba</b><small>Martes a las 17:30</small></div></div>
 <div class="li"><div class="ic">${ic('bag')}</div><div class="t"><b>Goxo Okindegia · pedido en camino</b><small>Llega en 15 min</small></div></div></div>
 <div class="sec"><h3>Siguiendo</h3></div><div class="stories">${order.map(k=>`<button class="st" data-biz="${k}"><div class="ring seen"><img src="${B[k].img}" alt=""></div><span>${B[k].name.split(' ')[0]}</span></button>`).join('')}</div>
 <div class="list"><div class="li"><div class="ic">${ic('town')}</div><div class="t"><b>¿Tienes un negocio?</b><small>Crea tu página gratis en 2 minutos</small></div><span class="v">›</span></div><button class="li out" data-logout="1"><div class="ic">${ic('back')}</div><div class="t"><b>Cerrar sesión</b></div></button></div>`;
}

function render(){nav();({home,explore,points:pointsV,profile:me,publish,town}[tab])();hookPub();view.scrollTop=0}

function openSheet(html){$('#sheet').innerHTML='<div class="grab"></div>'+html;$('#sheet').classList.add('on');$('#scrim').classList.add('on')}
function closeSheet(){$('#sheet').classList.remove('on');$('#scrim').classList.remove('on')}
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
function commentSheet(i){
 const p=POSTS[i],cs=COMMENTS[p.b]||[];
 openSheet(`<h3>Comentarios</h3><div class="sub">${B[p.b].name}</div><div id="cl">${cs.map(c=>`<div class="cm"><b>${c[0]}</b> ${c[1]}</div>`).join('')}</div>
 <div class="cbox"><input class="field" id="ci" placeholder="Escribe un comentario..."><button class="send" id="cs">Enviar</button></div>`);
 const send=()=>{const v=$('#ci').value.trim();if(!v){$('#ci').focus();return}need('Para comentar',()=>{(COMMENTS[p.b]=COMMENTS[p.b]||[]).push([user.name.split(' ')[0],v]);p.com++;closeSheet();toast('Comentario publicado');if(tab==='home')home()})};
 $('#cs').onclick=send;
}
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
 openSheet(`<h3>${isC?'Pedir cita en':'Reservar en'} ${b.name}</h3><div class="sub">${b.open}</div>
 <label>${isC?'Servicio':'Personas'}</label>${isC?opts(b.menu.map(m=>m[0]),b.menu[0][0]):opts(['2','3','4','5','6+'],'2')}
 <label>Día</label>${opts(['Hoy','Mañana','Sábado','Domingo'],'Hoy')}
 <label>Hora</label>${opts(isC?['10:00','12:30','16:00','17:30','19:00']:['13:30','14:00','20:30','21:30','22:00'],pre||(isC?'17:30':'21:30'),isC?{'17:30':'-20%'}:{'21:30':'-15%'})}
 <button class="big-cta" id="go">${isC?'Confirmar cita':'Confirmar reserva'}</button><div class="earn">${ic('coin')} +50 puntos al confirmar</div>`);
 document.querySelectorAll('.sheet .opts').forEach(g=>g.querySelectorAll('.opt').forEach(o=>o.onclick=()=>{g.querySelectorAll('.opt').forEach(x=>x.classList.remove('on'));o.classList.add('on')}));
 $('#go').onclick=()=>need(isC?'Para confirmar tu cita':'Para confirmar tu reserva',()=>{closeSheet();points+=50;toast((isC?'Cita confirmada en ':'Reserva confirmada en ')+b.name,50)});
}
function story(k){
 const b=B[k],a=ACT[b.action],caps={itsasoa:'Pintxo pote esta noche. Txakoli + pintxo 3 €',mendi:'Chuletón del día listo para la brasa',goxo:'Sale hornada nueva a las 18:00',ile:'Colores de otoño. Reserva y te regalamos el tratamiento',txema:'Me queda un hueco hoy a las 17:30',etxea:'Viernes: reparto gratis en todo el pueblo'};
 const s=$('#story');s.innerHTML=`<img class="bg" src="${b.img}" alt=""><div class="bars"><i id="sb"></i></div><div class="sh"><img class="av" src="${b.img}" alt=""><div><b>${b.name}</b><br><small>hace 1 h</small></div><button class="x" id="sx">×</button></div><div class="cap">${caps[k]}</div><div class="scta"><button class="big-cta" id="sgo">${t(a[0])}</button></div>`;
 s.classList.add('on');requestAnimationFrame(()=>requestAnimationFrame(()=>$('#sb').classList.add('go')));
 const close=()=>{s.classList.remove('on');clearTimeout(s._t)};s._t=setTimeout(close,5000);
 $('#sx').onclick=close;$('#sgo').onclick=()=>{close();action(k)};
}

document.addEventListener('click',e=>{
 const el=e.target.closest('[data-plan],[data-prole],[data-ev],[data-news],[data-vote],[data-inc],[data-bono],[data-scope],[data-ics],[data-going],[data-tab],[data-biz],[data-act],[data-like],[data-story],[data-flash],[data-cat],[data-ptype],[data-lang],[data-com],[data-rate],[data-login],[data-logout]');if(!el)return;
 if(el.tagName==='A')e.preventDefault();
 const d=el.dataset;
 if(d.plan){const k=d.plan;need('Para apuntarte al plan',()=>{if(joinedP.has(k))joinedP.delete(k);else{joinedP.add(k);const p=PLANS.find(x=>x.id===k);const n=p.now+1;toast(n>=p.min?'¡Mínimo conseguido! El plan se hace':'Apuntado. Faltan '+(p.min-n)+'. No pagas nada hasta que se llegue',10);points+=10}home()})}
 else if(d.prole){prole=d.prole;publish();hookPub()}
 else if(d.ev)evSheet(d.ev);
 else if(d.news)newsSheet(d.news);
 else if(d.vote!==undefined){const i=+d.vote;need('Para votar',()=>{if(voted===null){voted=i;points+=20;toast('Voto enviado al ayuntamiento',20)}town()})}
 else if(d.inc)need('Para avisar al ayuntamiento',incSheet);
 else if(d.bono)need('Para pedir tu bono',()=>{if(!bonoOk){bonoOk=true;toast('Bono de 10 € activado. Úsalo en cualquier negocio')}if(tab==='town')town()});
 else if(d.scope){scope=d.scope;home()}
 else if(d.ics)ics(d.ics);
 else if(d.going){const k=d.going;need('Para apuntarte',()=>{if(going.has(k)){going.delete(k)}else{going.add(k);points+=10;toast('Te has apuntado. Te avisamos el día antes',10)}if(tab==='home')home()})}
 else if(d.tab){if(d.pt2)ptype=d.pt2;tab=d.tab;render()}
 else if(d.biz)profile(d.biz);
 else if(d.act)action(d.act);
 else if(d.like){const k=d.like;need('Para dar me gusta',()=>{liked.has(k)?liked.delete(k):liked.add(k);if(tab==='home')home()})}
 else if(d.com)commentSheet(+d.com);
 else if(d.rate){const k=d.rate;need('Para valorar',()=>rateSheet(k))}
 else if(d.login)need('Para guardar tus reservas y puntos',()=>render());
 else if(d.logout)logout();
 else if(d.story)story(d.story);
 else if(d.flash){const f=FLASH[d.flash];action(f.b,f.txt.match(/\d{1,2}:\d{2}/)[0])}
 else if(d.cat){cat=d.cat;explore()}
 else if(d.ptype){ptype=d.ptype;publish();hookPub()}
 else if(d.lang){lang=d.lang;render();tab='profile';nav()}
});
$('#scrim').onclick=closeSheet;
render();

})();
