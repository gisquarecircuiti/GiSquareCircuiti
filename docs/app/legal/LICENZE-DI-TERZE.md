# Licenze di terzi
GiSquare Circuiti è un programma originale di Andrea Aldini. Usa anche componenti di terzi, distribuiti con le licenze libere indicate qui. Per questi componenti valgono le rispettive licenze.

## Componenti inclusi nel programma
| Componente | Uso | Licenza |
|---|---|---|
| **Electron** (con Chromium e Node.js) | contenitore dell'applicazione | MIT (Electron); Chromium e Node.js contengono componenti con varie licenze libere, elencate nei file `LICENSE.electron.txt` e `LICENSES.chromium.html` presenti nella cartella d'installazione |
| **avr8js** 0.21.1 – © Uri Shaked | emulazione del microcontrollore ATmega328P | MIT (testo sotto) |
| **electron-updater** (electron-builder) – © Roman Vanesyan, Loopline Systems e collaboratori | controllo e installazione degli aggiornamenti del programma | MIT |
| **Librerie di supporto di electron-updater** (installate insieme a esso): js-yaml, argparse, sax, semver, graceful-fs, fs-extra, jsonfile, universalify, lazy-val, lodash.escaperegexp, lodash.isequal, tiny-typed-emitter, builder-util-runtime, debug, ms | funzioni interne del controllo degli aggiornamenti | licenze libere permissive: MIT (la maggior parte), ISC (semver, graceful-fs), Python-2.0 (argparse), BlueOak-1.0.0 (sax). Il file di licenza di ciascun pacchetto è conservato nella sua cartella, dentro l'applicazione |
| **Open Sans** – © 2020 The Open Sans Project Authors | carattere dell'interfaccia | SIL Open Font License 1.1 (testo nel file `LICENZA-OPEN-SANS.txt`; incluso senza modifiche) |
| **ngspice** – © Regents of the University of California, ngspice team e altri autori | motore di simulazione dei circuiti elettronici: programma separato, incluso nella cartella `ngspice` e avviato dal programma come programma esterno | in prevalenza licenza BSD (3 clausole); alcune parti hanno altre licenze libere: MIT (sparse), PostgreSQL, BSD 4 clausole (getopt), **LGPL** (numparam, KLU), **GPL 2 o successive** (alcuni modelli XSPICE, come le tabelle) e pubblico dominio. La distribuzione di ngspice è inclusa senza modifiche, con i suoi file di documentazione e di licenza (cartella `ngspice`); nei pacchetti per macOS ngspice è compilato dall'autore a partire dai sorgenti originali, non modificati; l'avviso di licenza della versione inclusa è anche nel file `LICENZA-NGSPICE.txt`; i testi GPL e LGPL sono nei file `LICENZA-GPL-2.0.txt`, `LICENZA-GPL-3.0.txt` e `LICENZA-LGPL-2.1.txt`. Codice sorgente: ngspice.sourceforge.io; vedi anche “Offerta del codice sorgente” più sotto. *This product includes software developed by the University of California, Berkeley and its contributors.* |
| Sketch di esempio compilati (lampeggio, pulsante, potenziometro, semaforo, display LCD, servomotore, sensori di temperatura, fotoresistenza, ultrasuoni, PIR, joystick, LED RGB, cicalino, sensori di umidità e gas, tastierino) | esempi delle schede a microcontrollore | il codice degli esempi è di Andrea Aldini; i programmi compilati contengono il core Arduino AVR con la libreria Wire (LGPL 2.1, sorgente su github.com/arduino/ArduinoCore-avr) e, negli esempi con il display, la libreria **LiquidCrystal** – © Arduino, Adafruit (LGPL 2.1, sorgente su github.com/arduino-libraries/LiquidCrystal) oppure **LiquidCrystal_PCF8574** – © Matthias Hertel (BSD 3-Clause, testo sotto); nell'esempio del servomotore la libreria **Servo** – © Arduino e collaboratori (LGPL 2.1, sorgente su github.com/arduino-libraries/Servo); nell'esempio del sensore DHT11 la libreria **DHT sensor library** – © Adafruit Industries (MIT, testo sotto); nell'esempio del tastierino la libreria **Keypad** – © Mark Stanley, Alexander Brevig (LGPL 2.1, sorgente su github.com/Chris--A/Keypad). Il sorgente degli esempi è visibile nell'editor “Sketch…” e si può modificare e ricompilare con le librerie originali (o con loro versioni modificate). Testo della LGPL: `LICENZA-LGPL-2.1.txt`. I programmi compilati contengono inoltre **avr-libc** (libreria C per i microcontrollori AVR, licenza BSD a 3 clausole: avviso e testo più sotto) e le routine di supporto del compilatore (**libgcc**, GPL 3 con “GCC Runtime Library Exception”, che non impone condizioni sui programmi compilati) |

## Programmi e librerie non inclusi (scaricati dall'utente, su sua scelta)
| Programma | Uso | Licenza |
|---|---|---|
| **arduino-cli** – © Arduino SA | compilazione degli sketch; scaricato dai server di Arduino solo se l'utente lo chiede | GPL 3.0 (vedi github.com/arduino/arduino-cli) |
| **Core Arduino AVR** – © Arduino SA e collaboratori | librerie incluse negli sketch compilati dall'utente | LGPL 2.1 |
| **Librerie aggiuntive** scelte dall'utente (finestra “Librerie…”) | installate da arduino-cli dall'elenco ufficiale di Arduino o da file .zip | ognuna con la propria licenza, indicata dall'autore della libreria |

## Offerta del codice sorgente (ngspice)
Alcune parti di ngspice sono distribuite con licenza GPL o LGPL. Il codice sorgente completo della versione di ngspice inclusa è disponibile su ngspice.sourceforge.io; inoltre, per almeno tre anni dalla distribuzione di questa versione, l'autore di GiSquare Circuiti ne fornisce una copia a chiunque la richieda scrivendo a gisquare.circuiti@gmail.com, al solo costo dell'eventuale supporto fisico. GiSquare Circuiti è un programma distinto che usa ngspice come programma esterno: le licenze di ngspice non si estendono al codice di GiSquare Circuiti.

## Marchi
Arduino® è un marchio di Arduino S.r.l.; “Uno” e “Nano” sono nomi di prodotti Arduino. GiSquare Circuiti è un progetto indipendente: non è un prodotto Arduino e non è affiliato né approvato da Arduino S.r.l. Le schede simulate sono indicate come “compatibili” solo per descrivere la compatibilità con gli sketch. I nomi di componenti citati per descrivere la compatibilità (per esempio HD44780, PCF8574, DHT11, DHT22, LM35, TMP36, ATmega328P) appartengono ai rispettivi produttori; i componenti del programma sono modelli generici. Gli altri nomi citati appartengono ai rispettivi titolari.

## Avviso e testo della licenza di avr-libc (BSD a 3 clausole)
```
avr-libc – Standard C library for Atmel AVR development
Copyright (c) 1999-2013 e successivi: Keith Gudger, Bjoern Haase, Steinar Haugen, Peter Jansen,
Reinhard Jessich, Magnus Johansson, Artur Lipowski, Marek Michalkiewicz, Colin O'Flynn, Bob Paddock,
Reiner Patommel, Michael Rickman, Theodore A. Roth, Juergen Schilling, Philip Soeberg, Anatoly Sokolov,
Nils Kristian Strom, Michael Stumpf, Stefan Swanepoel, Eric B. Weddington, Joerg Wunsch, Dmitry Xmelkov,
Frederic Nadeau, Georg-Johann Lay, Florin-Viorel Petrov, Dean Camera, Carlos Lamas, Cliff Lawson,
Dave Hylands, egnite Software GmbH, Rich Neswold, Harald Kipp, The Regents of the University of California,
Free Software Foundation, Inc., Atmel Corporation, Microchip Technology Inc. e X Consortium.
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice,
   this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation and/or
   other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be
   used to endorse or promote products derived from this software without specific
   prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

## Testo della licenza MIT di avr8js
```
The MIT License (MIT)

Copyright (c) 2019-2025 Uri Shaked

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

## Testo della licenza MIT di Electron
```
Copyright (c) Electron contributors
Copyright (c) 2013-2020 GitHub Inc.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## Testo della licenza BSD 3-Clause di LiquidCrystal_PCF8574
```
BSD 3-Clause License

Copyright (c) 2005-2020, Matthias Hertel,  http://www.mathertel.de/

All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

## Testo della licenza MIT di DHT sensor library (Adafruit)
```
Copyright (c) 2020 Adafruit Industries


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.
```


## Versione web: motore di calcolo nel browser
La versione web non usa il programma ngspice esterno ma **ngspice compilato per il browser (WebAssembly)**, distribuito nel pacchetto **eecircuit-engine** (© 2024 EElab.dev, licenza MIT; contiene ngspice, con le licenze indicate nella tabella precedente). Il motore è incluso con due soli adattamenti tecnici: sono stati tolti i file di modelli di tecnologie per circuiti integrati (FreePDK, PTM, SkyWater, GlobalFoundries) che il pacchetto originale carica ma che GiSquare Circuiti non usa; quando la pagina è aperta come file locale è corretto l'indirizzo di caricamento. Il programma ngspice compilato non è modificato e resta un file separato (engine/eecircuit-engine.mjs), sostituibile con un'altra versione compilata dagli stessi sorgenti. Nella versione web ngspice è compilato senza XSPICE; contiene le parti con licenza LGPL 2.1 (KLU, numparam), il cui testo è nel file LICENZA-LGPL-2.1.txt. Codice sorgente: ngspice.sourceforge.io e github.com/eelab-dev/EEcircuit-engine.

### Testo della licenza MIT di eecircuit-engine

    MIT License
    
    Copyright (c) 2024 EElab.dev
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
