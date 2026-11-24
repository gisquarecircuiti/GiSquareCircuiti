# Sito GiSquare Circuiti

Sito statico in italiano, pronto per GitHub Pages. Non richiede installazione, build, framework o servizi esterni.

## Pubblicazione

1. Copia **il contenuto** di questa cartella nella radice del repository GitHub (oppure nella cartella `/docs` se vuoi pubblicare da lì).
2. In GitHub apri **Settings → Pages**.
3. In **Build and deployment**, seleziona **Deploy from a branch**, scegli il branch principale e la cartella `/ (root)` oppure `/docs`, secondo dove hai copiato i file.
4. Salva e attendi la pubblicazione indicata nella sezione Pages.

I pulsanti di download puntano ai file delle release del repository `gisquarecircuiti/GiSquareCircuiti`: Windows e Linux alla release `v1.2.0`, Mac alla `v1.1.0` finché non saranno pronti i pacchetti Mac 1.2.0. A ogni nuova versione si aggiornano il tag e i nomi dei file in `index.html`.

La pagina descrive le funzioni del programma (le novità di ogni versione sono nella pagina Releases del repository), i tre ambienti, strumenti reali e macchine elettriche, le funzioni per i docenti, la versione web e il download. In `documenti/` ci sono guida rapida, manuale, guida per i docenti, guida per Chromebook e amministratori e volantino; in `legal/` licenza d’uso (contratto 3.1 e archivio del 3.0) e informative. In `app/` c'è la versione web, solo con i file offuscati.

## Anteprima locale

Apri `index.html` in un browser. Per i link interni, i tab dei laboratori e la navigazione mobile basta la funzionalità già inclusa nel sito.

## Struttura

- `index.html` — contenuti e collegamenti
- `styles.css` — grafica responsive
- `script.js` — tab dei tre ambienti e menu mobile
- `assets/` — marchio, icona e schermate del software
- `documenti/` — guide e volantino in PDF, istruzioni per Mac
- `legal/` — licenza d’uso, note di versione e informative (`EULA-BETA.html` rimanda alla nuova licenza; `LICENZA-D-USO-WEB.html` è il contratto 3.1 della versione web)
- `app/` — **versione web** del programma (si apre da `app/`): file già pronti e offuscati, generati dallo script di build della versione web; non modificarli a mano. Il motore `app/engine/eecircuit-engine.mjs` (16 MB) resta un file separato, non offuscato, come richiede la licenza LGPL di ngspice. `app/manifest.webmanifest`, `app/sw.js` e `app/icons/` rendono la versione web installabile come app («GiSquare Circuiti Web») e utilizzabile senza Internet: `sw.js` contiene l’elenco dei file e un numero di build, va sempre rigenerato insieme ai file dell’app.


