const fs = require('fs');
let text = fs.readFileSync("day2/input.txt");
let textByLine = text.toString().split("\n").map(Number);

for (let i = 0; i < textByLine.length; i++) {
    for (let j = i + 1; j < textByLine.length; j++) {
        for (let k = j + 1; k < textByLine.length; k++) {
            if (textByLine[i] + textByLine[j] + textByLine[k] == 2020) {
                console.log(textByLine[i] + "+ " + textByLine[j] + " + " + textByLine[k] + " = " + (textByLine[i] * textByLine[j] * textByLine[k]));
            }
        }
    }
}
