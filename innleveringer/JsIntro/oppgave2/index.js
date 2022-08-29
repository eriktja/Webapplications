const users = [
  { id: 0, name: "Trude", age: 77 },
  { id: 1, name: "Simen", age: 85 },
  { id: 2, name: "Lars", age: 99 },
  { id: 3, name: "Ali", age: 34 },
  { id: 4, name: "Finn", age: 60 },
  { id: 5, name: "Kåre", age: 70 },
  { id: 6, name: "Hanne", age: 20 },
  { id: 7, name: "Åse", age: 21 },
  { id: 8, name: "Anne", age: 6 },
  { id: 9, name: "Amanda", age: 31 },
  { id: 10, name: "Morgan", age: 87 }
];

const userUl = document.getElementById("users");
const searchId = document.getElementById("name");
const ageId = document.getElementById("age");
const buttonId = document.getElementById("filter");

const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

// SØK PÅ NAVN
searchId.addEventListener("input", (e) => {
  const search = e.target.value;
  if(search === ""){
    createTableUI(users);
  }
  else {
    createTableUI(filterArray(e));
  }
});
const filterArray = (e) => {
  let res = [];
  const search = e.target.value;
  users.forEach((user) => {
      if (user.name.toLowerCase().includes(search.toLowerCase())) {
        res.push(user);
    }
  });
  return res;
}

// FILTRER PÅ MINIMUMSALDER
buttonId.addEventListener("click", () => {
  let age = Number(ageId.value);
  console.log(age);
  let res = [];
  users.forEach((user) => {
    if(user.age > age){
      res.push(user);
    }
  })
  if(age == 0){
    createTableUI(users);
  }
  else{
    createTableUI(res);
  }
})
  
// TODO: Hent HTML #id med getElementById
// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)

const main = () => {
  createTableUI(users);
};

main();
