# Sito GiSquare Circuiti

Sito statico in italiano, pronto per GitHub Pages. Non richiede installazione, build, framework o servizi esterni.

## Pubblicazione

1. Copia **il contenuto** di questa cartella nella radice del repository GitHub (oppure nella cartella `/docs` se vuoi pubblicare da lì).
2. In GitHub apri **Settings → Pages**.
3. In **Build and deployment**, seleziona **Deploy from a branch**, scegli il branch principale e la cartella `/ (root)` oppure `/docs`, secondo dove hai copiato i file.
4. Salva e attendi la pubblicazione indicata nella sezione Pages.

I pulsanti di download puntano alla release `v1.1.0` del repository `gisquarecircuiti/GiSquareCircuiti` (nomi dei file: `GiSquare-Circuiti-Setup-1.1.0.exe`, `GiSquare-Circuiti-1.1.0-portable.exe`, `GiSquare-Circuiti-1.1.0-mac-arm64.dmg`, `GiSquare-Circuiti-1.1.0-mac-x64.dmg`, i due `.zip` portable per Mac, `GiSquare-Circuiti-1.1.0-linux-amd64.deb`, `GiSquare-Circuiti-1.1.0-portable-linux-x86_64.AppImage`). A ogni nuova versione sostituisci `1.1.0` con il nuovo numero in `index.html`.

La pagina presenta le novità della versione 1.1, i tre ambienti, strumenti reali e macchine elettriche, le funzioni per i docenti e il download. In `documenti/` ci sono guida rapida, manuale, guida per i docenti e volantino; in `legal/` licenza d’uso, note di versione e informative. Mantieni queste cartelle accanto a `index.html` quando copi il sito nel repository.

## Anteprima locale

Apri `index.html` in un browser. Per i link interni, i tab dei laboratori e la navigazione mobile basta la funzionalità già inclusa nel sito.

## Struttura

- `index.html` — contenuti e collegamenti
- `styles.css` — grafica responsive
- `script.js` — tab dei tre ambienti e menu mobile
- `assets/` — marchio, icona e schermate del software
- `documenti/` — guide e volantino in PDF, istruzioni per Mac
- `legal/` — licenza d’uso, note di versione e informative (`EULA-BETA.html` rimanda alla nuova licenza)


