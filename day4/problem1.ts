const fs = require('fs');
let input = fs.readFileSync("day4/input.txt").toString().trim();
let textByLine = input.split("\n\n");

let reqFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
let valid;
let validPassports = 0

for (let i = 0; i < textByLine.length; i++) {
    valid = true;
    textByLine[i] = textByLine[i].replace(/\n/g, " ");
    textByLine[i] = textByLine[i] + " ";
    for (let j = 0; j < reqFields.length; j++) {
        if (!textByLine[i].includes(reqFields[j])) {
            valid = false;
        } else if (valid) {
            let index = textByLine[i].indexOf(reqFields[j]);
            console.log(textByLine[i]);
            valid = checkValue(textByLine[i].slice(index, index + 3), textByLine[i].slice(index + 4, textByLine[i].indexOf(" ", index)));
        }
    }
    if (valid) {
        validPassports++;
    }
}

function checkValue(field, val) {
    switch (field) {
        case "byr":
            if (val.length == 4) return (Number(val) <= 2002 && Number(val) >= 1920)
            return false;
        case "iyr":
            if (val.length == 4) return (Number(val) <= 2020 && Number(val) >= 2010)
            return false;
        case "eyr":
            if (val.length == 4) return (Number(val) <= 2030 && Number(val) >= 2020)
            return false;
        case "hgt":
            let hgt = val.match(/\d+/g).map(Number);
            if (val.includes("cm") && hgt <= 193 && hgt >= 150) return true;
            if (val.includes("in") && hgt <= 76 && hgt >= 59) return true;
            return false;
        case "hcl":
            let re = /^#[0-9A-F]{6}$/i;
            return re.test(val);
        case "ecl":
            let validECL = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
            let valid = false;
            for (let i = 0; i < validECL.length; i++) {
                if (val == validECL[i]) {
                    valid = true;
                }
            }
            return valid;
        case "pid":
            return (/^\d+$/.test(val) && val.length == 9)
    }
}


console.log(validPassports);
