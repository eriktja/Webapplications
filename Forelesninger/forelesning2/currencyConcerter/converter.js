
const obj = {a:1, b:1, c:1}; 
const { a, ...leftOvers } = obj;
console.log(a, leftOvers)

const prompt = require('prompt-sync')();

let lang = prompt("Norsk(no) | Engligh(en): ");

const currencies = {
    "dkk": 1.34,
    "eur": 10,
    "usd": 9
}   

let value;
let currency;


const converter = (value, currency) => {
    return value / currencies[currency];
} 

switch(lang){
    case("no"): {
        console.log("hei fra norge");
        value = prompt("Hvilken verdi vil du konvertere?: ");
        currency = prompt("Danske kroner(dkk) | Euro(eur) | Amerikanske dollar(usd): ");
        console.log(converter(value, currency));
        break;
    } 
    case("en"): {
        console.log("hello from england");
        value = prompt("How much would you like to convert?: ");
        currency = prompt("Danish kroner(dkk) | Euro(eur) | US dollar(usd): ");
        console.log(converter(value, currency));
        break;
    }
    default: {
        console.log("ERROR! Not a registered language");
    }
}

