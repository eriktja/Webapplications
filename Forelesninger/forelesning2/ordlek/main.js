// Start koding lengre ned (ved startHere)

const failColor = "rgb(226, 101, 91)";
const correctColor = "rgb(25, 232, 168)";
const failText = "Feil";
const correctText = "Ny runde";

const wordList = [
  "Huske",
  "Trene",
  "Danse",
  "Hoppe",
  "Sykle",
  "Gå",
  "Rulle",
  "Trille",
  "Kjøre",
  "Løpe",
  "Springe",
  "Hinke",
  "Sparke",
  "Sprinte",
  "Forflytte",
  "Trimme",
  "Løfte",
  "Snurre",
  "Svinge",
  "Svømme",
  "Flyte",
  "Fly",
  "Sveve",
  "Ake",
  "Dra",
];

// #### START HER ####
const startHere = "Her kommer din kode";

// Hent alle elementer fra document
const spans = document.querySelectorAll('span');
const inputs = document.querySelectorAll('input');
const testButtonId = document.getElementById('test');

// Generer en random index for å hente et tilfeldig ord
const random = () => {
    return Math.floor(Math.random() * wordList.length);
}

// Hent ut et ord for hver span i spans
const addWords = () => {
    // spread operator : [...NodeList]
    [...spans].forEach((span) => (span.innerHTML = wordList[random()]));
}
addWords();

