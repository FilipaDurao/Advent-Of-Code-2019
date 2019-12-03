const readFile = require("../utils/fileReader");

let totalFuel = 0;
let values;

function fillValues() {
    values = readFile("Day1Input.txt");
}

function loopValues() {
    for (let i = 0; i < values.length; i++) {
        calcFuel(values[i]);
    }
}

function calcFuel(mass) {
    let fuel = Math.floor(mass/3)-2;
    totalFuel += fuel;
}

fillValues();
loopValues();
console.log(totalFuel);