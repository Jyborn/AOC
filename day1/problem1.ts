const fs = require('fs');
let text = fs.readFileSync("day1/input.txt");
let textByLine = text.toString().split("\n").map(Number);

console.log(textByLine);

for (let i = 0; i < textByLine.length; i++) {
    for (let j = i + 1; j < textByLine.length; j++) {
        if (textByLine[i] + textByLine[j] == 2020) {
            console.log(textByLine[i] + " * " + textByLine[j] + " = " + (textByLine[i] * textByLine[j]));
        }
    }
}

