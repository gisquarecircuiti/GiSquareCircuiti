# Note di versione – GiSquare Circuiti 1.1.0
Prima versione stabile del programma. Grazie a tutti i docenti e gli studenti che hanno provato le versioni beta e segnalato errori e idee.

## Novità rispetto alla 1.1.0 beta 3

### Per la scuola
- **51 schede di laboratorio** pronte (elettronica, impianti, automazione; biennio e triennio): obiettivo, traccia, domande e soluzione, con il circuito già caricato.
- **Relazione di laboratorio in PDF**: schema, componenti, misure, risposte e osservazioni dello studente.
- **Tabella delle misure**: letture prese direttamente dagli strumenti, colonne calcolate, errore percentuale, grafico e retta di regressione; si copia in Word ed Excel.
- **Verifiche**: il docente inserisce guasti nascosti, domande e punteggi e salva due copie (studente, bloccata, e docente); poi corregge con una griglia che propone i punti e calcola il voto; **riepilogo di classe** in PDF ed Excel.
- **Documentazione di progetto in PDF** con schema, componenti, risultati e misure.
- **Tre guide in PDF** dal pulsante Guide: manuale completo, guida rapida e la nuova **guida per i docenti**.

### Strumenti reali e macchine elettriche
- **Strumenti come quelli del banco**: multimetri con portate ed effetto di carico, oscilloscopio con sonde ×1/×10, trigger e modalità XY, generatore di funzioni con uscita da 50 Ω, alimentatore da banco con limite di corrente.
- **Macchine elettriche**: trasformatore reale dai dati di targa (prove a vuoto, in cortocircuito, sotto carico, curva di magnetizzazione), trasformatore a presa centrale, motore asincrono trifase (vuoto e rotore bloccato), motore in continua, dinamo (anche in derivazione) e alternatore trifase; variac, reostato e carico ohmico-induttivo per il rifasamento.
- **Microcontrollori**: dieci nuovi componenti (fotoresistenza, sensore a ultrasuoni, PIR, joystick, LED RGB, cicalino, sensori di umidità del terreno, livello dell'acqua e gas, tastierino 4×4) con i loro esempi.
- **30 nuovi esempi**: 74 in tutto.

### Interfaccia
- Nuova barra dei comandi con menu File, Laboratorio e Foglio.
- **Misure nel pannello Proprietà a tendina**: chiuse di regola, si aprono con un clic; per le schede a microcontrollore e gli altri componenti con molte misure compaiono solo quelle attive.
- **Valori**: la **M maiuscola vale mega** (1M = 1 MΩ), la m minuscola milli (10m = 0.01); si accetta anche il codice dei resistori (4k7 = 4.7 kΩ, 4R7 = 4.7 Ω). I decimali si scrivono con il punto; la virgola viene comunque capita.
- **Trascina un circuito .gsq sulla finestra** per aprirlo.
- **La finestra si riapre come l'hai lasciata**: ingrandita, a schermo intero o con la stessa dimensione e posizione (al primo avvio si apre ingrandita).

### Sicurezza e licenza
- Un file .gsq danneggiato o modificato a mano non può far eseguire comandi al computer né bloccare il programma (le parti non valide vengono scartate e segnalate); i CSV esportati non contengono formule che Excel potrebbe eseguire; la finestra del programma non apre pagine o file esterni.
- **Licenza d'uso definitiva (versione 3.0)**: gratuita e a tempo indeterminato per studio, didattica e uso personale; le scuole possono installarla su tutti i computer e distribuirla al proprio interno. Al primo avvio ti verrà chiesto di accettarla.
- Esempi e schede delle schede a microcontrollore si chiamano “Scheda Uno: …”.
- Electron 45.3 con le ultime correzioni di sicurezza di Chromium.

## Segnalare un problema
Scrivi a gisquare.circuiti@gmail.com oppure apri una segnalazione (Issue) sulla pagina GitHub del programma. Descrivi cosa hai fatto, cosa ti aspettavi e cosa è successo; se puoi allega il file .gsq del circuito. **Non inviare dati personali di studenti** (nomi, voti) nelle segnalazioni.
