const fs = require('fs');
let input = fs.readFileSync("day3/input.txt").toString().trim();
let textByLine = input.split("\n");

let nTrees = 0;
let posX = 0;
for (let i = 0; i < textByLine.length; i++) {

    if (textByLine[i].charAt(posX%textByLine[i].length) == '#') {
        nTrees++;
    }
    posX += 3;
}

console.log(nTrees);