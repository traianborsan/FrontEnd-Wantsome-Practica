// Cerinte:
// 1. Scrieti o functie care accepta ca argument o valoare numerica si afiseaza de atatea ori pe ecran textul: “Sunt la
// iteratia numarul [index]” - Scrieti codul in doua variante

//VARIANTA 1:
function num_Val(numb) {
    if (typeof numb !== "number") {
        return "Wrong data type!"
    }
    else {
        for (i = 1, text = ""; i <= numb; i++) {
            text = "Sunt la iteratia numarul " + i + ".";
            console.log(text);
        }
    }
}
console.log(num_Val(10));

//VARIANTA 2:
function num_Val1(numb) {
    if (typeof numb !== "number") {
        return "Wrong data type!"
    }
    else {
        var i = 1;
        do {
            text = "Sunt la iteratia numarul " + i + ".";
            console.log(text);
            i++;
        }
        while (i <= numb);
    }
}
console.log(num_Val1(10));


// 2. Scrieti o functie care accepta ca argument un array si afiseaza in consola elementele acestuia prin parcurgerea sa -
// Scrieti codul in doua variante

//VARIANTA 1:
function array_Argument(my_Array) {
    if (typeof my_Array !== "object") {
        return "Wrong data type!"
    }
    else {
        for (i = 0, len = my_Array.length, text = ""; i < len; i++) {
            text = my_Array[i];
            console.log(text);
        }
    }
}
array_Argument(["Mihnea", "Mihai", "Andrei", "Oana", "Mihaela"]);

//VARIANTA 2:
var x = function (my_Array1) {
    if (typeof my_Array1 !== "object") {
        return "Wrong data type!"
    }
    else {
        var i = 0;
        do {
            text = my_Array1[i];
            console.log(text);
            i++;
        }
        while (i < my_Array1.length);
    }
}
var y = x(["Mihnea", "Mihai", "Andrei", "Oana", "Mihaela"]);


// 3. Scrieti o functie care accepta ca argument un obiect si afiseaza in consola elementele acestuia prin parcurgerea sa -
// scrieti codul in doua variante

//VARIANTA 1:
function object_Argument(my_Object) {
    if (typeof my_Object !== "object") {
        return "Wrong data type!"
    }
    else {
        for (var i in my_Object) {
            text = my_Object[i];
            console.log(text);
        }
    }
}
object_Argument({ name: "Ovidiu", surname: "Grig", age: 18, status: "single", job: "programmer" });

//VARIANTA 2:
var x = function (my_Object1) {
    if (typeof my_Object1 !== "object") {
        return "Wrong data type!"
    }
    else {
        var my_Values = Object.values(my_Object1);
        var len = my_Values.length;
        var i = 0;
        while (i < len) {
            text = my_Values[i];
            console.log(text);
            i++;
        }
    }
}
var y = x({ name: "Ovidiu", surname: "Grig", age: 18, status: "single", job: "programmer" });



// Cerinte:
// 1. 0 100 200 300 400 500 600 700 800 900 1000
function hundreds(numb) {
    if (typeof numb !== "number") {
        return "Wrong data type!"
    }
    else {
        text = "";
        for (i = 0; i < 11; i++) {
            text += i * 100 + " ";
        }
        console.log(text);
    }
}
hundreds(10);

// 2. 1 2 4 8 16 32 64 128
var x = function (numb, power) {
    if (typeof numb !== "number" && power !== "number") {
        return "Wrong data type!"
    }
    else if (power !== power || (power !== 0 && power === power / 2)) {
        // daca argumentul "power" tinde spre infinit sau NaN, returnam "power"
        return power;
    }
    else if (power === 0) {
        return 1 + " ";
    }
    else if (power > 0) {
        text = "";
        for (i = 1; i <= Math.pow(numb, power); i *= 2) {
            text += i + " ";
        }
        console.log(text);
    }
}
var z = x(2, 7);
console.log(z);


// 3. 0 2 4 6 8 10
var x = function (numb) {
    if (typeof numb !== "number") {
        return "Wrong data type!"
    }
    else {
        text = "";
        for (i = 0; i < 6; i++) {
            text += i * 2 + " ";
        }
        console.log(text);
    }
}
var z = x(5);
console.log(z);


// 4. 3 6 9 12 15
var x = function (numb) {
    if (typeof numb !== "number") {
        return "Wrong data type!"
    }
    else {
        text = "";
        for (i = 1; i < 6; i++) {
            text += i * 3 + " ";
        }
        console.log(text);
    }
}
var z = x(5);
console.log(z);


// 5. 9 8 7 6 5 4 3 2 1 0
function reverse(numb) {
    if (typeof numb !== "number") {
        return "Wrong data type!"
    }
    else {
        text = "";
        for (i = 9; i >= 0; i--) {
            text += i + " ";
        }
        console.log(text);
    }
}
reverse(9);


// 6. 1 1 1 2 2 2 3 3 3 4 4 4
function repeat_Iteration(numb) {
    if (typeof numb !== "number") {
        return "Wrong data type!"
    }
    else {
        for (i = 1, text1 = ""; i <= numb; i++) {
            text1 += i + " " + i + " " + i + " ";
        }
        console.log(text1);
    }
}
console.log(repeat_Iteration(4));


// 7. 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
function repeat_Sequence(numb) {
    if (typeof numb !== "number") {
        return "Wrong data type!"
    }
    else {
        for (i = 0, text1 = ""; i <= numb; i++) {
            text1 += i + " ";
            for (j = 0, text2 = ""; j <= numb; j++) {
                text2 += j + " ";
                for (k = 0, text3 = ""; k <= numb; k++) {
                    text3 += k + " ";
                }
            }
        }
        console.log(text1 + text2 + text3);
    }
}
console.log(repeat_Sequence(4));


// Cerinte:
// Implementati functia stream. Trebuie sa:
// ● accepte ca argumente 2 functii: conditionalFn, actionFn.
// ● apeleaza actionFn pana cand conditionalFn returneaza fals
// ● nu returneaza nimic

// Exemplu 1:
// conditionalFn = function() { return false; };
// actionFn = function() {
//     console.log("Vreau sa ies la tabla!"); 
// };
// stream(conditionalFn, actionFn); // Nu afiseaza nimic

// Exemplu2:
// counter = 10;
// conditionalFn = function() {
// counter--;
// return counter >= 0;
// };
// stream(conditionalFn, actionFn); // Afiseaza “Vreau sa
// ies la tabla” de 10 ori

var actionFn = function () {
    console.log("Vreau sa ies la tabla!");
}
console.log(actionFn);

counter = 10;
conditionalFn = function () {
    counter--;
    return counter >= 0;
};

function stream(conditionalFn, actionFn) {
    if (typeof conditionalFn !== "function" || typeof actionFn !== "function") {
        return "Wrong data type!" //la functions nu se face o astfel de verificare
    }
    else {
        while (conditionalFn()) {
            actionFn();
        }
    }
}

stream(conditionalFn, actionFn); // Nu afiseaza nimic
//OBS.: De vorbit cum ar trebui sa o gandesc.


// Cerinta:
// Implementati functia computeSumOfArrayElements.
// Trebuie sa:
// ● accepte ca argument un array format din numere
// ● returneze suma numerelor din array
// ● foloseasca instructiunea while

// Exemplu 1:
// computeSumOfArrayElements([]); // returneaza 0

// Exemplu 2:
// computeSumOfArrayElements([1,2,3,4]); // returneaza 10

function computeSumOfArrayElements(myArray2) {
    if (typeof myArray2 !== "object") {
        return "Wrong data type for our array!"
    }
    else {
        i = 0;
        if (typeof myArray2[i] !== "number" || typeof myArray2[i] === "NaN") {
            return 0
        }
        else {
            var sum = 0;
            while (i < myArray2.length) {
                sum += myArray2[i];
                i++;
            }
            return sum;
        }
    }
}

computeSumOfArrayElements([]);
computeSumOfArrayElements([1, 2, 3, 4]);