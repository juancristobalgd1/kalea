# Kalea

La red social local de tu pueblo. Empezamos por Elgoibar.

**Demo visual:** https://juancristobalgd1.github.io/kalea/

## La idea
Todos los negocios del pueblo en una sola app, con formato de red social:

- **Historias y publicaciones** de bares, restaurantes, peluquerías, barberías, panaderías...
- **Reservar, pedir cita o pedir a domicilio** desde cada publicación o perfil.
- **Huecos de última hora:** el negocio publica una mesa o cita libre con descuento y se avisa a los vecinos cercanos.
- **Puntos del pueblo:** lo que gastas en un negocio se convierte en puntos canjeables en cualquier otro.
- **Ayuntamiento:** bonos de comercio local, agenda de eventos y avisos, dentro de la app.
- **Tablón:** empleo local y pisos (con Pisder).
- **Página web automática** para cada negocio (`kalea.app/elgoibar/<negocio>`), pensada para salir en Google.
- **Eventos creados con IA:** Kalea IA publica sola los próximos eventos del pueblo y de la provincia (fecha, lugar, foto y fuente), con botones de *Me apunto* y *Añadir al calendario*, y los conecta con los negocios cercanos (mesas libres antes o después del evento).
- Euskera y castellano.

## Estado
Prototipo de interfaz (HTML, CSS y JS sin dependencias). Negocios, eventos, precios y datos son ficticios.

- Landing: `index.html` · App directa: `app.html`
- Se puede mirar todo sin registro. Para dar me gusta, comentar, valorar, reservar, pedir o apuntarse a un evento se pide entrar con Google.
- Acceso con Google: pegar el ID de cliente OAuth (tipo *Aplicación web*, origen `https://juancristobalgd1.github.io`) en `config.js`. Sin ID funciona en modo demo. En producción, el token de Google se tiene que verificar en el servidor.

## Ejecutar en local
No hay dependencias ni compilación: es HTML, CSS y JS planos. Sirve la carpeta con cualquier servidor estático y abre la app:

```bash
python3 -m http.server 8000
# → http://localhost:8000/  (index.html redirige a app.html)
```

No abras `app.html` con doble clic (`file://`): el navegador bloquea `fetch` y el service worker, y las secciones de noticias y empleo se quedan vacías en silencio.

**Acceso con Google en local:** en la consola de Google, añade `http://localhost:8000` como origen autorizado además de `https://juancristobalgd1.github.io`, y pega el ID de cliente en `config.js`. Sin ID todo funciona en modo demo.

## Datos automáticos (`scripts/`)
Los JSON se regeneran desde la raíz del repo; solo hacen falta Python 3 y `curl`, nada que instalar con `pip`:

- `python3 scripts/news.py` — escribe `news.json` (RSS de Diario Vasco y Naiz) y `lanbide.json` (ofertas de Lanbide; si el servicio tarda en responder, se queda para la siguiente ejecución).
- `python3 scripts/gas.py` — escribe `gas.json` (precios de la API de minetur para estaciones a menos de 25 km de Elgoibar).
- `python3 scripts/esquelas.py` — ⚠️ roto desde el 21/10/2026: Diario Vasco movió las esquelas a [esquelas.diariovasco.com](https://esquelas.diariovasco.com/), un portal que renderiza el listado con JavaScript, y el scraper ya no encuentra datos. El script lo detecta y falla sin tocar `esquelas.json`; hace falta reescribirlo contra el portal nuevo (o su API).

GitHub Actions ejecuta `news.py` cada hora, `gas.py` cada 3 horas y `esquelas.py` a diario y commitea los JSON cambiados (`.github/workflows/`).

## Comprobaciones
`python3 scripts/check.py` comprueba en local, sin dependencias: que los cuatro JSON se pueden leer y tienen las claves esperadas, que los archivos que usan `app.html` y el service worker existen y que los scripts de Python compilan.

## Próximos pasos
1. Backend: negocios, publicaciones, historias, reservas y pedidos.
2. Páginas de negocio renderizadas en servidor con datos estructurados para Google.
3. Panel del negocio (publicar, gestionar reservas y huecos).
4. Sistema de puntos y canje.
5. Agente de eventos: lee la agenda del ayuntamiento, la API de eventos culturales de Open Data Euskadi (Kulturklik) y los carteles que suban los negocios; redacta la publicación en castellano y euskera, cita la fuente y la publica (con revisión del ayuntamiento al principio).
6. Piloto con 10 negocios de Elgoibar y propuesta al ayuntamiento.
