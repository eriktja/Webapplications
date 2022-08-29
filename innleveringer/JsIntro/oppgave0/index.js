// Oppgave 1
const rmButton = document.getElementById("remove-btn");
const rmText = document.getElementById("remove");

rmButton.addEventListener("click", () => {
  rmText.style.visibility = "hidden";
});

// Oppgave 2
const chButton = document.getElementById("change-btn");
const chText = document.getElementById("change");

chButton.addEventListener("click", () => {
  chText.innerHTML = "hello, this is now changed";
});

// Oppgave 3
const input = document.getElementById("input");
const inputText = document.getElementById("input-text");

input.addEventListener("input", (e) => {
  inputText.textContent = e.target.value;
});

// Oppgave 4
const myList = ["item one", "item two", "item three"];
const list = document.getElementById("ul");
const listButton = document.getElementById("write-list");

listButton.addEventListener("click", () => {
  myList.forEach((item) => (list.innerHTML += `<li>${item}</li>`));
});
// Oppgave 5
const type = document.getElementById("select");
const newText = document.getElementById("text");
const newTextButton = document.getElementById("create");
const section = document.getElementById("placeholder");

newTextButton.addEventListener("click", () => {
  section.innerHTML += `<${type.value}>${newText.value}</${type.value}>`;
});

// Oppgave 6
const list6 = document.getElementById("list");
const removeList6 = document.getElementById("remove-li");

removeList6.addEventListener("click", () => {
  list6.innerHTML = ``;
});

// Oppgave 7
const name = document.getElementById("name");
const nameButton = document.getElementById("order");

name.addEventListener("input", (e) => {
  let size = e.target.value.length;
  if (size > 4) {
    nameButton.style.border = "thick solid #ff0000";
    nameButton.disabled = true;
  } else {
    nameButton.style.border = "";
    nameButton.disabled = false;
  }
});

// Oppgave 8

const list8 = document.querySelector(".children");
const colorButton = document.querySelector("#color");
const items = list8.querySelectorAll("li");

colorButton.addEventListener("click", () => {
  items.forEach((item) => (item.style.border = "thick solid #ff0000"));
});
