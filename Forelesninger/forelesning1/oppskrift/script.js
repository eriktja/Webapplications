
const amountId = document.getElementById("amount");
const recipeId = document.getElementById("recipe");
const incrementBtn = document.querySelector(".btn-increment");
const decrementBtn = document.querySelector(".btn-decrement");

const recipe = {
    wheat_flour: {
        label: "hvetemel",
        amount: 75,
        unit: "g"
    },
    whole_wheat_flour: {
        label: "fullkornhvetemel",
        amount: 30,
        unit: "g"
    },
    sugar: { label: "sukker", amount: 0.1, unit: "ts" },
    salt: { label: "salt", amount: 0.1, unit: "ts" },
    yeast: { label: "gjær", amount: 0.05, unit: "pakke(r)" },
    water: { label: "vann", amount: 0.7, unit: "dl" },
    butter: { label: "smør", amount: 10, unit: "g" }
    };

const inc = () => {
    let currentAmount = amountId.innerHTML;
    amountId.innerHTML = Number(currentAmount) + 1;
    createRecipe();
}
const dec = () => {
    let currentAmount = amountId.innerHTML;
    if(currentAmount == 1) return;
    amountId.innerHTML = Number(currentAmount) - 1;
    createRecipe();
}

function handleButtonClick(event) {
    const buttonId = event.target.id;
    switch(buttonId) {
        case "increment":
            inc();
            break;
        case "decrement":
            dec();  
            break;
        default:
            console.log("ERROR");
    }    
}

incrementBtn.addEventListener("click", handleButtonClick);
decrementBtn.addEventListener("click", handleButtonClick);


// function createRecipe() {
//     recipeId.innerHTML = null;
//     const recipeValues = Object.values(recipe);
//     recipeValues.forEach( ({label, amount, unit}) => {
//         recipeId.innerHTML += createIngredient(label, amount, unit);
//     })
// }
// Gjør det samme som funksjonen over. 
function createRecipe() {
    recipeId.innerHTML = Object.values(recipe).map(createIngredient).join("");
}

function createIngredient({label, amount, unit}){
    return `<li>${Number(amount * amountId.innerHTML).toFixed(2)}${unit} ${label}</li>`;
}

console.log(amountId.innerHTML);
console.log(recipeId);

createRecipe();