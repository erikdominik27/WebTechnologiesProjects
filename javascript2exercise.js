const prompt = require("prompt-sync")
();
var name = "Calculator";
console.log(name);

let store;
let store2;

function asknstore() {
    const a = Number(prompt("Please enter the first number:"));
    const b = Number(prompt("Please enter the second number:"));
    store = { a, b };
}

function getasknstore() {
    return store;
}



function asknstore2(){
    const c = String(prompt("Please choose: addition, subtraction or multiplication:"))
store2 = c 
}

function getasknstore2(){
    return store2;
}

function Calculate(){
    const num1 = store.a;
    const num2 = store.b;
    const operation = store2;
    let result;

    if (operation === "addition" || operation === "+") {
        result = num1 + num2;
    } else if (operation === "subtraction" || operation === "-") {
        result = num1 - num2;
    } else if (operation === "multiplication" || operation === "*") {
        result = num1 * num2;
    } else {
        return "Invalid operation selected!";
    }

    return `The result of ${operation} is: ${result}`;
}

asknstore();
asknstore2();
console.log(Calculate());