const fs = require('fs');
let text = fs.readFileSync("day3/input.txt").toString().trim();
let textByLine = text.split("\n");

function calcNTrees(xSteps, downSteps) {
    let nTrees = 0;
    let posX = 0;
    for (let i = 0; i < textByLine.length; i+=downSteps) {

        if (textByLine[i].charAt(posX%textByLine[i].length) == '#') {
            nTrees++;
        }
        posX += xSteps;
    }
    return nTrees;
}


console.log(calcNTrees(1,1) * calcNTrees(3,1) * calcNTrees(5,1) * calcNTrees(7,1) * calcNTrees(1,2));