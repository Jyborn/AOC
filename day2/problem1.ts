const fs = require('fs');
let text = fs.readFileSync("day2/input.txt");
let textByLine = text.toString().split("\n");

let splitPolicyPass = [];
let validPasswords = 0;
for (let i = 0; i < textByLine.length; i++) {

    splitPolicyPass[i] = textByLine[i].split(/[\s:-]+/);
    console.log(splitPolicyPass[i]);
    let lowBound = splitPolicyPass[i][0];
    let highBound = splitPolicyPass[i][1];
    let char = splitPolicyPass[i][2];
    let pass = splitPolicyPass[i][3];

    let nChar = pass.split(char).length - 1;
    if (nChar <= highBound && nChar >= lowBound) {
        validPasswords++;
        console.log("valid");
    }
}

console.log(validPasswords);
