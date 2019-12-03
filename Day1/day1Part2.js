const readFile = require("../utils/fileReader");

let totalFuel = 0;
let values;

function fillValues() {
    values = readFile("Day1Input.txt");
}

function loopValues() {
    for (let i = 0; i < values.length; i++) {
        calcPartialFuel(values[i]);
    }
}

function calcPartialFuel(fuel) {
    while (calcFuel(fuel) > 0) {
        fuel = calcFuel(fuel);
        totalFuel += Math.max(fuel, 0);
    }
}

function calcFuel(mass) {
    return Math.floor(mass/3)-2;
}

fillValues();
loopValues();
console.log(totalFuel);