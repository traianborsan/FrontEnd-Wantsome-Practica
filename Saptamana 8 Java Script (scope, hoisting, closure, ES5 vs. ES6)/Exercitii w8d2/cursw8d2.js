//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/

//varianta ES5 - function expression - variabila in care stochez ca si val o functie
var sumNumbersUpTo = function (limit) {
    var sum = 0;
    for (var i = 1; i <= limit; i++) {
        sum += i
    };
    return sum
};
sumNumbersUpTo(7);

//varianta ES6
const sumNumbersUpToNew = limit => {
    let sum = 0;
    let i = 1
    while (i <= limit) {
        sum += i
        i++
    }
    return sum
}
sumNumbersUpToNew(7);

/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/

//varianta ES5
function findLongestString(string1) {
    let str = string1.split(" ");
    let longestString1 = 0;
    let result = "";
    for (var i = 0; i < str.length; i++) {
        if (longestString1 < str[i].length) {
            longestString1 = str[i].length;
            result = str[i];
        }
    }
    return result;
}
findLongestString('Wantsome is Awsomeeee today');

//varianta ES6

const longestWordFromTown = words => {
    let arr = words.split(' ').sort((a, b) => { return b.length - a.length });
    return arr[0];
}
longestWordFromTown('Wantsome is Awsomeeee today');

/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/

//varianta ES5
function reverseString(string1) {
    if (string1.length !== 0) {
        var result = string1.split("").reverse().join("")
        return result
    }
    else {
        return "We seem to have an empty string!"
    }
}
reverseString("level R");

//varianta ES6
const reverseStr = string2 => {
    let result = (string2.length !== 0) ? string2.split("").reverse().join("") : "We seem to have an empty string!";
    return result
}
reverseStr("Code level RED!")


/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/

//varianta ES5
function replaceCharWithNext(string1) {
    return string1.replace(/[A-Za-z]/g, function (char) {
        return String.fromCharCode(char.charCodeAt(0) + 1)
    })
};
replaceCharWithNext("Ana are mere!");

//varianta ES6
const replaceCharWithNext = string1 => {
    let result = string1.replace(/[A-Za-z]/g, function (char) {
        return String.fromCharCode(char.charCodeAt(0) + 1)
    })
    return result
};
replaceCharWithNext("Ana are mere!");

/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/

//varianta ES5 (am folosit functia Math.floor, dar ea functioneaza corect doar la numerele pozitive si din
//acest motiv am pus restrictia la inceputul functiei)
function convertToTime(numb) {
    if (numb > 0 && typeof numb === "number") {
        if (Math.floor(numb % 60) >= 0 && Math.floor(numb / 60) >= 0) {
            return Math.floor(numb / 60) + ":" + Math.floor(numb % 60)
        }
    }
    else {
        return "We don't accept negative values or other data types."
    }
}
convertToTime(45);
convertToTime(240);
convertToTime(87);
convertToTime("");
convertToTime(-87);

//varianta ES6
const convertToTime = numb => {
    let result = (Math.floor(numb % 60) >= 0 && Math.floor(numb % 60) < 59 && Math.floor(numb / 60) >= 0) ? Math.floor(numb / 60) + ":" + Math.floor(numb % 60) : "We don't accept negative values and other data types."
    return result
};
convertToTime(45);
convertToTime(240);
convertToTime(87);
convertToTime("");
convertToTime(-87);


/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/

//varianta ES5
function stringSortLetters(string1) {
    if (string1.length !== 0) {
        var keepString = /[^A-Za-z]/g;
        var result = string1.toLowerCase().replace(keepString, "").split("").sort().join("");
        return result
    }
    else {
        return "No sorting needed. Empty string."
    }
}
stringSortLetters("Sa vedem ce va fi la finalul cursului.");

//varianta ES6
const stringSortLetters = string1 => {
    let keepString = /[^A-Za-z]/g;
    let result = (string1.length !== 0) ? string1.toLowerCase().replace(keepString, "").split("").sort().join("") : "No sorting needed. Empty string.";
    return result
}
stringSortLetters("Sa vedem ce va fi la finalul cursului.");

/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/

//varianta ES5
function verifyAddOperator(string1) {
    var len = string1.length;
    for (var i = 0; i < len; i += 2) {
        if (string1[i] !== "+") {
            return false;
        }

        if (i >= len - 1) {
            return true;
        }
    }
}
verifyAddOperator("+a+b+c+");
verifyAddOperator("+ab+c+d+");

//varianta ES6
const stringSortLetters = string1 => {
    let len = string1.length;
    for (let i = 0; i < len; i += 2) {
        if (string1[i] !== "+") {
            return false;
        }
        if (i >= len - 1) {
            return true;
        }
    }
}
verifyAddOperator("+a+b+c+");
verifyAddOperator("+ab+c+d+");