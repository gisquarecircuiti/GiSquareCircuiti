# Informativa sulla privacy
**GiSquare Circuiti – versione beta** · aggiornata all'11 novembre 2026
(informativa ai sensi degli articoli 13 e 14 del Regolamento (UE) 2016/679, “GDPR”)

## In breve
- Il programma **funziona sul tuo computer** e **non invia dati all'autore**: niente account, niente registrazione, niente statistiche d'uso, niente pubblicità, niente cookie.
- I circuiti, le impostazioni e i modelli importati restano **solo sul tuo computer**.
- Il programma si collega a Internet **solo se lo chiedi tu**: per scaricare il compilatore gratuito arduino-cli, il supporto per le schede e le librerie Arduino (dai server di Arduino). Il motore di simulazione ngspice è incluso e lavora senza Internet.
- All'avvio il programma controlla automaticamente se è uscita una nuova versione, collegandosi al servizio GitHub (Microsoft). Vengono scambiate solo le informazioni tecniche necessarie a confrontare la versione e, su Windows, a scaricare l'aggiornamento: **nessun dato personale, nessun account**. Puoi **disattivare** questo controllo dalla finestra “Informazioni”. Fa eccezione la versione portable per Windows, che non esegue alcun controllo.
- L'autore tratta i tuoi dati solo se gli scrivi (per esempio per una segnalazione).

## 1. Titolare del trattamento
Andrea Aldini – email: gisquare.circuiti@gmail.com

## 2. Dati sul tuo computer
Il programma salva sul tuo computer, nella cartella dei dati dell'applicazione (su Windows di solito `%APPDATA%\GiSquare Circuiti`; su macOS in `~/Library/Application Support/GiSquare Circuiti`; su Linux e Chrome OS in `~/.config/GiSquare Circuiti`):
- le impostazioni (per esempio il percorso di ngspice e di arduino-cli e l'accettazione della licenza);
- i modelli di componenti che importi;
- il compilatore arduino-cli, se scegli di scaricarlo dal programma.

Le librerie Arduino che installi dalla finestra “Librerie…” vanno nella cartella delle librerie dell'utente (su Windows di solito `Documenti\Arduino\libraries`), la stessa usata dall'IDE Arduino.

I circuiti e gli sketch vengono salvati dove decidi tu. Questi file **non vengono trasmessi** all'autore né ad altri. Puoi cancellarli in qualsiasi momento; disinstallando il programma puoi eliminare anche la cartella dei dati.

## 3. Collegamenti a servizi di terzi
Solo quando lo scegli, il programma:
- scarica arduino-cli dal sito ufficiale `downloads.arduino.cc`;
- fa scaricare ad arduino-cli il supporto per le schede AVR dai server di Arduino;
- quando cerchi o installi una libreria (finestra “Librerie…”), fa scaricare ad arduino-cli l'elenco delle librerie e la libreria scelta dai server di Arduino.

Il programma chiede ad arduino-cli di **non** controllare in rete la disponibilità di nuove versioni.

Inoltre il programma controlla la disponibilità di aggiornamenti (in tutte le versioni, tranne la portable per Windows):
- all'avvio controlla in automatico se è disponibile una versione più recente, collegandosi a GitHub (`api.github.com` e `github.com`, gestiti da GitHub, Inc. / Microsoft);
- se c'è un aggiornamento te lo segnala. Su **Windows** (versione installata) lo scarica **solo dopo la tua conferma** (dai domini di GitHub, per esempio `objects.githubusercontent.com`) e l'installazione parte quando lo decidi tu. Su **Mac e Linux** non scarica nulla da solo: se lo chiedi, apre nel browser la pagina di download.

Questo controllo si può **disattivare** dalla finestra “Informazioni” (casella “Controlla automaticamente all'avvio”). In questi collegamenti GitHub riceve i dati tecnici della connessione (per esempio l'indirizzo IP), come titolare autonomo secondo la propria informativa (github.com); l'autore di GiSquare Circuiti non riceve questi dati. La versione portable per Windows non esegue questo controllo e si aggiorna manualmente scaricando la nuova versione.

In questi casi il tuo computer si collega ai server di Arduino, che ricevono i dati tecnici di ogni collegamento a Internet (per esempio l'indirizzo IP). Il titolare di quel trattamento è Arduino, secondo la propria informativa sulla privacy (arduino.cc). L'autore di GiSquare Circuiti non riceve questi dati.

Il motore di simulazione ngspice (incluso nel programma) e il compilatore lavorano sul tuo computer e non inviano dati.

## 4. Dati che invii all'autore
Se scrivi all'autore (segnalazioni di errori, suggerimenti, richieste), vengono trattati i dati che comunichi: indirizzo email, nome, contenuto del messaggio ed eventuali allegati (per esempio un file di circuito o una schermata).
- **Finalità**: rispondere, risolvere i problemi segnalati e migliorare il programma durante la fase di prova.
- **Base giuridica**: l'esecuzione dell'accordo di prova (licenza beta) e la tua richiesta (art. 6, par. 1, lettera b, GDPR); per il miglioramento del programma, il legittimo interesse dell'autore (lettera f).
- **Conservazione**: per la durata della fase beta e fino a 12 mesi dopo la sua conclusione, poi i messaggi vengono cancellati, salvo obblighi di legge.
- **Destinatari**: i dati non vengono venduti né ceduti. Sono gestiti con il servizio di posta elettronica dell'autore (Google Gmail), che agisce secondo le proprie condizioni e può trattare dati anche fuori dall'Unione europea con le garanzie previste dal GDPR.
- **Natura del conferimento**: facoltativa; senza i dati non è possibile rispondere.

Ti chiediamo di **non inviare dati personali di altre persone** (per esempio di studenti) nelle segnalazioni: se mandi schermate o file, controlla che non contengano nomi o dati di terzi.

## 5. Uso a scuola
Il programma non richiede dati degli studenti e non crea profili. Chi lo usa in classe resta responsabile dei dati eventualmente inseriti nei file (per esempio nomi in un testo dello schema), secondo le regole dell'istituto.

## 6. I tuoi diritti
Puoi chiedere in ogni momento l'accesso ai tuoi dati, la loro rettifica o cancellazione, la limitazione del trattamento, la portabilità e opporti al trattamento basato sul legittimo interesse (articoli 15–22 GDPR), scrivendo a gisquare.circuiti@gmail.com. Hai anche il diritto di proporre reclamo al **Garante per la protezione dei dati personali** (www.garanteprivacy.it).

## 7. Modifiche
Se il programma inizierà a trattare dati in modo diverso, questa informativa sarà aggiornata e mostrata nel programma prima dell'uso.
