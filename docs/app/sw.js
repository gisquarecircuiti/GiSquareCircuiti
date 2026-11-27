// GiSquare Circuiti Web — copia dell'app nel browser per l'uso senza Internet e per gli aggiornamenti.
// I file del programma restano sul dispositivo; nessun dato viene inviato all'autore.
const BUILD = '9013cc38099e';
const CACHE = 'gisquare-web-' + BUILD;
const FILES = ["./","app.js","build/icon.png","build/icon.svg","core.js","devices.js","doc-pdf.js","engine/LICENSE-eecircuit-engine.txt","engine/eecircuit-engine.mjs","fonts/OFL-OpenSans.txt","fonts/open-sans-400.woff2","fonts/open-sans-600.woff2","fonts/open-sans-700.woff2","icons/icon-web-192.png","icons/icon-web-512.png","icons/icon-web-maskable-512.png","icons/icon-web.svg","index.html","lcd.js","legal-ui.js","legal/INFORMATIVA-PRIVACY.md","legal/LICENZA-D-USO.md","legal/LICENZA-GPL-2.0.txt","legal/LICENZA-GPL-3.0.txt","legal/LICENZA-LGPL-2.1.txt","legal/LICENZA-NGSPICE.txt","legal/LICENZA-OPEN-SANS.txt","legal/LICENZE-DI-TERZE.md","legal/NOTE-DI-VERSIONE.md","manifest.webmanifest","mcu-examples.js","mcu-ui.js","mcu.js","misure-ui.js","panels-ui.js","plc-ui.js","ribbon-ui.js","scheda-ui.js","schede.js","sim-worker.js","style.css","updater-ui.js","vendor/avr8js.js","verifica-ui.js","web-api.js","web-dirty.js","wired-ui.js","wired.js"];
self.addEventListener('install', e => {
  // scarica tutta l'app (circa 20 MB) prima di essere pronta; la nuova versione aspetta che l'utente la accetti
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, { cache: 'reload' })))));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('gisquare-web-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('message', e => { if (e.data === 'aggiorna') self.skipWaiting(); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url); if (url.origin !== location.origin) return;
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    const hit = await c.match(req, { ignoreSearch: true }) || (req.mode === 'navigate' ? await c.match('index.html') : null);
    if (hit) return hit;
    try { return await fetch(req); } catch (err) { return new Response('Non disponibile senza connessione', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } }); }
  })());
});
