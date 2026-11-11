========================================================
  GiSquare Circuiti — versione portable per Mac
  Istruzioni di installazione e primo avvio
========================================================

Grazie per provare GiSquare Circuiti.
Questa è una versione di prova (beta).


------------------------------------------------
1) QUALE FILE SCARICARE
------------------------------------------------
Ci sono due versioni per Mac. Scegli in base al processore:

  • "... mac-arm64.dmg"  -> Mac con Apple Silicon (M1, M2, M3, M4...)
  • "... mac-x64.dmg"    -> Mac con processore Intel

Per sapere quale hai: menu Apple (  in alto a sinistra) -> "Informazioni su
questo Mac". Alla voce "Chip" o "Processore":
  - se c'è scritto "Apple M..." scarica la versione arm64;
  - se c'è scritto "Intel" scarica la versione x64.

Esistono anche i file "portable-...zip": contengono lo stesso programma
senza il disco di installazione. Il .dmg è la scelta consigliata.


------------------------------------------------
2) INSTALLAZIONE DEL PROGRAMMA
------------------------------------------------
Con il file .dmg:
1. Fai doppio clic sul file .dmg: si apre una finestra.
2. Trascina "GiSquare Circuiti" nella cartella Applicazioni.
3. Chiudi la finestra ed espelli il disco dal Finder.

Con il file .zip: doppio clic sul file, poi trascina "GiSquare Circuiti.app"
nella cartella Applicazioni (o dove preferisci).


------------------------------------------------
3) PRIMO AVVIO (importante)
------------------------------------------------
Il programma non ha ancora la firma a pagamento di Apple, quindi al primo
avvio macOS può mostrare un avviso del tipo "Impossibile aprire ... Apple
non può verificare la presenza di malware". È normale: non indica un
problema del programma.

A) MAC CON APPLE SILICON (M1 e successivi)
   Qui il passaggio è QUASI SEMPRE necessario. Procedi così:

   Con macOS 15 (Sequoia) o successivi:
   1. Fai doppio clic su "GiSquare Circuiti": compare l'avviso, premi
      "Fine" (o "OK"). NON premere "Sposta nel Cestino".
   2. Apri Impostazioni di Sistema -> Privacy e sicurezza.
   3. Scorri in basso fino alla riga che nomina "GiSquare Circuiti" e premi
      "Apri comunque", poi conferma con la password o l'impronta.

   Con macOS 14 (Sonoma) o precedenti:
   1. Fai clic DESTRO (o Ctrl + clic) sull'icona del programma.
   2. Scegli "Apri".
   3. Nella finestra che compare premi di nuovo "Apri".

   Da quel momento in poi si avvia normalmente con un doppio clic.

B) MAC CON PROCESSORE INTEL
   Di solito il programma si apre con un doppio clic. Se compare lo stesso
   avviso, usa uno dei metodi descritti sopra (A) oppure il comando qui sotto.

C) SE NON SI APRE LO STESSO (valido per entrambi)
   Apri l'app Terminale, incolla questa riga e premi Invio (adatta il
   percorso se hai messo il programma altrove):

     xattr -dr com.apple.quarantine "/Applications/GiSquare Circuiti.app"

   Poi riprova ad aprire il programma. Il comando toglie solo il
   contrassegno "scaricato da Internet" dal programma.

Nota: scarica il file solo dal canale ufficiale (sito e pagina GitHub
Releases del progetto).


------------------------------------------------
4) ngspice (il motore di calcolo)
------------------------------------------------
Dalla versione 1.1.0 il programma per Mac include già ngspice: non devi
installare nient'altro e il pallino di ngspice in alto a destra diventa
verde da solo.

Se hai un pacchetto più vecchio (senza ngspice incluso), per simulare i
circuiti ELETTRONICI serve installare "ngspice" a parte, una volta sola.
La logica cablata e le schede a microcontrollore funzionano anche senza. Con Homebrew:

  a) Se non hai Homebrew, apri il Terminale e incolla questa riga:

     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

  b) Poi installa ngspice con:

     brew install ngspice

Se il programma non trova ngspice da solo, indicaglielo quando te lo
chiede (di solito in /opt/homebrew/bin/ngspice sui Mac Apple Silicon,
oppure in /usr/local/bin/ngspice sui Mac Intel).


------------------------------------------------
5) COME SI USA, IN BREVE
------------------------------------------------
  • Scegli l'ambiente in alto a sinistra: Elettronica, Logica cablata.
  • Trascina i componenti dal menu di sinistra sul foglio.
  • Collegali con lo strumento "Filo".
  • Premi "Simula" (o "Avvia") per far partire la simulazione.
  • Salva il circuito: i file hanno estensione .gsq.
  • Il pulsante "Info" (in alto a destra) mostra la licenza d'uso e i
    documenti del programma. Trovi una guida illustrata nel PDF
    "GiSquare Circuiti - Guida".


------------------------------------------------
NOTE
------------------------------------------------
I risultati sono a scopo didattico e non sono certificati: non
sostituiscono il progetto e le verifiche di un professionista su
impianti reali.

Questa copia è riservata ai tester invitati e non va ridistribuita.
Per segnalazioni e problemi: gisquare.circuiti@gmail.com

(c) 2026 Andrea Aldini - Tutti i diritti riservati.
