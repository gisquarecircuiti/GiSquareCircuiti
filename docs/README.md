# Sito GiSquare Circuiti

Sito statico in italiano, pronto per GitHub Pages. Non richiede installazione, build, framework o servizi esterni.

## Pubblicazione

1. Copia **il contenuto** di questa cartella nella radice del repository GitHub (oppure nella cartella `/docs` se vuoi pubblicare da lì).
2. In GitHub apri **Settings → Pages**.
3. In **Build and deployment**, seleziona **Deploy from a branch**, scegli il branch principale e la cartella `/ (root)` oppure `/docs`, secondo dove hai copiato i file.
4. Salva e attendi la pubblicazione indicata nella sezione Pages.

I pulsanti di download puntano alla release pubblica `v1.1.0-beta.2` del repository `gisquarecircuiti/GiSquareCircuiti`. Controlla e aggiorna il link dell’installer nel file `index.html` quando pubblicherai una nuova release.

La pagina presenta le funzioni di elettronica, microcontrollori, logica cablata e PLC. Include la schermata principale e immagini estratte dalla guida rapida, la guida rapida aggiornata (8 pagine) e il manuale completo (60 pagine) in `documenti/` e le pagine legali in `legal/`. Mantieni queste cartelle accanto a `index.html` quando copi il sito nel repository.

## Anteprima locale

Apri `index.html` in un browser. Per i link interni, i tab dei laboratori e la navigazione mobile basta la funzionalità già inclusa nel sito.

## Struttura

- `index.html` — contenuti e collegamenti
- `styles.css` — grafica responsive
- `script.js` — tab dei tre ambienti e menu mobile
- `assets/` — marchio, icona e schermate del software
- `documenti/` — guida rapida e manuale PDF
- `legal/` — EULA e informativa privacy, in Markdown e HTML


