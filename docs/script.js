const labs = {
  electronics: {
    kicker: "AMBIENTE 01 / ELETTRONICA",
    title: "Vedi quello<br>che non si vede.",
    description: "Analizza tensioni e correnti, osserva i segnali nel tempo o esplora la risposta in frequenza. Con ngspice, la simulazione elettronica diventa un’esperienza da interrogare.",
    pills: ["Transitorio", "Oscilloscopio", "Bode"],
    image: "assets/gisquare-schermata-2.jpg",
    alt: "Analisi di un circuito elettronico con oscilloscopio e filtro RC",
    caption: "UN FILTRO RC, OSSERVATO NEL TEMPO"
  },
  wiring: {
    kicker: "AMBIENTE 02 / LOGICA CABLATA E PLC",
    title: "Segui il circuito.<br>Trova il guasto.",
    description: "Simula in tempo reale quadri, contattori, motori e guasti. Passa al PLC a 24 o 230 V, programma in Ladder e collega ingressi analogici e sensori 0–10 V.",
    pills: ["PLC Ladder", "Sensori 0–10 V", "Ricerca guasti"],
    image: "assets/gisquare-schermata-4.jpg",
    alt: "Schema di logica cablata con motore e pannello di stato dei dispositivi",
    caption: "AVVIAMENTO MOTORE CON RICERCA GUASTI"
  },
  arduino: {
    kicker: "AMBIENTE 03 / MICROCONTROLLORI",
    title: "Scrivi il codice.<br>Guarda che succede.",
    description: "Usa schede compatibili Uno e Nano con un vero sketch. Compila dall’editor o carica un file HEX, poi controlla LED, display, servomotori, sensori e monitor seriale durante la simulazione.",
    pills: ["Uno e Nano", "Editor sketch", "Monitor seriale"],
    image: "assets/gisquare-schermata-5.jpg",
    alt: "Scheda compatibile con Arduino collegata a un display LCD 16 per 2",
    caption: "UNO E DISPLAY LCD 16×2 IN SIMULAZIONE"
  }
};

const tabs = [...document.querySelectorAll(".lab-tab")];
const panel = document.querySelector("#lab-panel");
const panelTitle = document.querySelector("#panel-title");
const panelDescription = document.querySelector("#panel-description");
const panelKicker = document.querySelector("#panel-kicker");
const panelPills = document.querySelector("#panel-pills");
const panelImage = document.querySelector("#lab-image");
const panelCaption = document.querySelector("#lab-caption");

function selectLab(tab, focus = false) {
  const lab = labs[tab.dataset.lab];
  if (!lab) return;
  tabs.forEach((item) => {
    const selected = item === tab;
    item.classList.toggle("is-active", selected);
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  panel.setAttribute("aria-labelledby", tab.id);
  panelKicker.textContent = lab.kicker;
  panelTitle.innerHTML = lab.title;
  panelDescription.textContent = lab.description;
  panelPills.replaceChildren(...lab.pills.map((label) => {
    const pill = document.createElement("span");
    pill.textContent = label;
    return pill;
  }));
  panelImage.src = lab.image;
  panelImage.alt = lab.alt;
  panelCaption.firstChild.textContent = lab.caption;
  if (focus) tab.focus();
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectLab(tab));
  tab.addEventListener("keydown", (event) => {
    let nextIndex = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + tabs.length) % tabs.length;
    else return;
    event.preventDefault();
    selectLab(tabs[nextIndex], true);
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  menuToggle.setAttribute("aria-label", expanded ? "Apri il menu" : "Chiudi il menu");
  siteNav.classList.toggle("is-open", !expanded);
});
siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  siteNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Apri il menu");
}));
