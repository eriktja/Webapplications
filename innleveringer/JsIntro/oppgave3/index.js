// TODO: Sett startverdien for de ulike tellerene du trenger for å ha kontroll på
// - antall feil
// - posisjonen til bokstaven du skal skrive
// - ordet som skal vises
// TODO: Lag en liste med ulike ord
// TODO: Hent ut HTML #ider og knappen
// TODO: Lag en funksjon for å skrive ut ordet som brukeren skal skrive eller en medling om at det ikke er flere ord igjen
// TODO: Lag en funksjon som gjør at vi kan bytte ord. Må også oppdatere tellerene
// TODO: Lag en funksjon for å sjekke om vi har skrevet riktig bokstav. Må ta hensyn til plassen i ordet vi skal skrive
// TODO: Lag en funksjon for å sjekke om posisjonen vi er på er lik lengden på ordet vi skal skrive. Det betyr at vi er ferdig med ordet og kan bytte ord
// TODO: Lag en funksjon som trigges når vi skriver på tastaturen og basert på hva vi skriver / posisjonen vi er på gjør nødvendige oppdateringer av grensesnittet
// TODO: Lag en funksjon som kan brukes til å oppdatere grensesnittet
// - Vise antall feil
// - Vise ordet vi skal skrive
// - Vise hvor langt vi har kommet (posisjonen) på det ordet vi skal skrive
// TODO: Lytt til keyup på window
// TODO: Lytt til klikk på knappen. Klikket skal gjøre knappen "disabled" samt starte oppgaven

const wordId = document.getElementById("word");
const letterId = document.getElementById("letter");
const wrongId = document.getElementById("wrongs");
const button = document.querySelector("button");

let wrongCount = 0;
let position = 0;
let wordLength = 0;
let word = "";

let words = ["hei", "på", "deg", "counting", "objects", "compressing", "git", "status", "push", "pull", "upstream", "fetch", "branch", "nothing", "to", "commit"];

button.addEventListener("click", () => {
    word = words.pop([rand()]);
    wordLength = word.length;
    write(word);
    button.disabled = true;
    wordGame();
});

const write = (w) => {
    wordId.innerHTML += ` <b>${w}</b>,`;
}

const rand = () => {
    return Math.floor(Math.random() * words.length);
}

letterId.addEventListener("keyup", (e) => {
    let key = e.key;
    console.log(key);
    debugger
})

const wordGame = () => {
    while(words.length > 0){
    }
}