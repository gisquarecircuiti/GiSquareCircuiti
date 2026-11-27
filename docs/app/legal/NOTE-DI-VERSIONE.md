# Note di versione – GiSquare Circuiti 1.3.0

## Novità rispetto alla 1.2.0

### Pinza amperometrica e sonda di corrente
- **Pinza amperometrica** (gruppo Strumenti): si aggancia con un clic a un filo già disegnato e ne misura la corrente **senza interrompere il circuito**, con valore efficace vero, medio (DC) o efficace della sola parte alternata. Si sposta trascinandola su un altro filo; il verso si può invertire come girando la pinza.
- **Sonda di corrente per l'oscilloscopio**: si aggancia a un filo e la sua uscita si collega al canale A o B. Sensibilità 1 V/A, 100 mV/A o 10 mV/A. L'oscilloscopio riconosce la sonda e mostra direttamente gli ampere (scala in A/div, Ipp, Ieff, Imedio, cursori e trigger in ampere).
- **Pinza anche in Logica cablata**: agganciata a un filo mostra la corrente efficace e il valore massimo dall'avvio (MAX), per leggere la corrente di spunto dei motori.
- Quattro esempi nuovi (pinza su un circuito RL, tensione e corrente in un circuito RL, corrente di spunto di una lampada, corrente di avviamento del motore in logica cablata) e due schede di laboratorio nuove (59 schede in tutto).
- Nella modalità verifica lo studente può usare pinza e sonda anche sul circuito bloccato.

### Verifiche: guasti su più componenti
- Nell'ambiente Elettronica i guasti della modalità verifica si possono applicare anche a **interruttori e pulsanti** (non chiude mai, incollato), **diodi, LED e Zener** (interrotto, in cortocircuito), **lampade** (filamento interrotto), **fusibili** (già fuso), **relè** (bobina interrotta, contatto che non commuta, contatto incollato) e **batterie** (scarica, interrotta). Prima erano possibili solo su resistenze, condensatori e induttori.
- Il contatto del relè guasto è disegnato nella posizione reale (a riposo o in lavoro), non in quella che farebbe pensare la tensione sulla bobina.
- Una verifica si può salvare anche se nel circuito non ci sono componenti a cui applicare un guasto: in quel caso si fa con le domande e la tabella delle misure.
- Attenzione: una verifica con i guasti nuovi va aperta con la versione 1.3.0 o successiva (anche la versione web è già aggiornata).

### Interfaccia
- Con il pannello Proprietà chiuso, sul bordo destro resta una linguetta «Proprietà» ben visibile: un clic lo riapre.
- Chiudendo o riaprendo il pannello Proprietà la griglia di puntini copre sempre tutto il foglio (prima nella parte liberata i puntini sparivano finché non si spostava la vista).

### Guide
- Manuale (capitoli sulla pinza amperometrica e sulla sonda di corrente) e guida per i docenti aggiornati alla 1.3.0.

# GiSquare Circuiti 1.2.0
Le novità nate dalla versione web e dalle prove in classe. Le stesse funzioni ci sono anche nella versione web.

## Novità rispetto alla 1.1.0

### Nuovi componenti per le schede a microcontrollore
- **Sensore di fiamma** (uscite analogica e digitale con soglia), **sensore magnetico a effetto Hall**, **modulo relè** (attivo alto o basso, contatti NA/COM/NC), **motore passo-passo con driver** (passo intero, mezzo passo, una fase), **matrice di LED 8×8 con driver seriale**, **striscia di LED RGB indirizzabili**.
- **Sei esempi nuovi** con gli sketch già compilati e **sei schede di laboratorio** con traccia, domande e soluzione (57 schede in tutto).

### Misure e grafici
- **Wattmetro digitale**: il valore scelto (P, S, Q, cos φ, V o I) compare sul display del simbolo; funziona anche in corrente continua.
- **Lente sui grafici**: si trascina un rettangolo sulla parte di segnale da ingrandire; pulsanti ＋, －, «Vista completa» (anche con il doppio clic) e trascinamento del grafico ingrandito. Legenda e pulsanti stanno in una barra sopra il grafico e non coprono più le tracce.
- **Diagramma di Bode**: lente sulle frequenze e **cursori A e B** con guadagno, fase e rapporto fra le frequenze.
- **Immagine del grafico completa** (nel diagramma di Bode modulo e fase con la scala delle frequenze, informazioni e legenda) e nuovo pulsante **«Copia grafico»** per incollarlo nella relazione.
- **Nomi dei nodi comprensibili**: nei risultati, al posto di n1, n2… compaiono i componenti collegati (per esempio «R1-C1»); passando con il mouse su un nodo si illumina nello schema, e passando su un filo se ne leggono nome e tensione.

### Lavoro più sicuro
- **Avviso alla chiusura** con un circuito non salvato: «Salva e chiudi», «Chiudi senza salvare» o «Annulla».
- **Recupero automatico**: ogni 30 secondi una copia di sicurezza del circuito non salvato; se il programma si chiude per sbaglio, alla riapertura si può recuperare.
- «Apri», «Nuovo» e gli esempi chiedono conferma solo se ci sono modifiche non salvate.

### Interfaccia
- **«Ruota» anche sugli strumenti**: multimetro, oscilloscopio e wattmetro ruotano i morsetti e restano dritti e leggibili.
- **Cursore a matita** quando si disegnano i fili.
- **Modalità verifica**: l'avviso giallo diventa un'etichetta «Verifica» nella barra in basso, che non copre più lo schema; un clic mostra spiegazione e pulsanti.
- Con la finestra stretta, un messaggio lungo nella barra in basso non allarga più l'interfaccia.

### Licenza
- **Contratto di licenza 3.1**, valido per il programma per computer e per la versione web (licenza d'uso gratuita); al primo avvio della 1.2.0 viene chiesto di accettarlo. Informativa sulla privacy aggiornata (preferenze e copia di sicurezza salvate solo sul computer).

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
