//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"


function myFunction(e_mail_user) {
    if (typeof e_mail_user !== "string") {//verific ca tipul e-mail-ului sa fie string
        return "Wrong data type!"//mesaj predefinit in cazul in care nu este string
    }
    else if (e_mail_user === "") {//verificam ca nu avem de a face cu un string gol
        return "We have an empty string. Please insert new data."//mesaj predefinit pentru string gol
    }
    else {
        var e_mail_user1 = e_mail_user.trim();//declar variabila echivalenta cu stringul fara spatii in fata si in spate
        var stringPosition = e_mail_user1.indexOf("@");//determinam indexul caracterului "@"
        var substring1 = e_mail_user1.substring(0, stringPosition);//cream un substring de la inceputul e-mail-ului pana la caracterul "@" 
        var substring2 = e_mail_user1.substr(stringPosition);//cream un substring de la caracterul "@" pana la finalul e-mail-ului 
        var substring3 = e_mail_user1.slice(0, 4);//cream un substring cu primele 5 caractere ale e-mail-ului
        var newSubstring1 = substring1.replace(substring1, substring3 + "...");//in substring1 inlocuim tot substring-ul cu substring3 si "..." 
        var result = newSubstring1.concat(substring2);//declaram result ca fiind concatenarea dintre primele 5 caractere ale e-mail-ului + "..." si substring2 ce contine restul caracterelor imediat dupa "@"
        return result;//afisam rezultatul
    }
}
myFunction("borsan_traian@yahoo.com");// apelam functia dorita
myFunction("ovidiu.grigoras@test.com");

//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"

function myFunction(first_Upper) {
    if (typeof first_Upper !== "string") {//verific ca tipul e-mail-ului sa fie string
        return "Wrong data type!"//mesaj predefinit in cazul in care nu este string
    }
    else if (first_Upper === "") {//verificam ca nu avem de a face cu un string gol
        return "We have an empty string. Please insert new data."//mesaj predefinit pentru string gol
    }
    else {
        var string = first_Upper.trim();//declar variabila echivalenta cu stringul fara spatii in fata si in spate
        var string_Lower = string.toLowerCase().split(" ");//string-ul va fi scris cu litere mici si va fi convertit in array dupa cuvinte .split(" ")
        for (var pos_Array = 0; pos_Array < string_Lower.length; pos_Array++) {//sintaxa specifica for; parcurgem array-ul de la indexul 0 la lungimea sa - 1 si incrementam contorul pos_Array
            var subString = string_Lower[pos_Array].split("");//declaram un substring pe care il alocam pentru parcurgerea fiecarui cuvant; substring-ul devine array de litere .spli("") 
            subString[0] = subString[0].toUpperCase();//transformam in majuscula prima litera din fiecare cuvant
            string_Lower[pos_Array] = subString.join("");//reconvertim seturile de litere din substring in cuvinte
        }
        return string_Lower.join(" ");//afisam rezultatul = reconversia seturilor de cuvinte in string-ul initial
    }
}

myFunction("i am superman");//apelare functie


//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"

function myFunction(string1) {
    if (typeof string1 !== "string") {
        return "Wrong data type!"
    }
    else if (string1 === "") {
        return "We have an empty string. Please insert new data."
    }
    else {
        var newString1 = "";
        var trimString1 = string1.trim();
        for (i = 0; i < trimString1.length; i++) {
            var char = trimString1.charAt(i);
            var charCode = char.charCodeAt(0);
            if (charCode >= 97 && charCode <= 122) {
                newString1 += char.toUpperCase();
            }
            else if (charCode >= 65 && charCode <= 90) {
                newString1 += char.toLowerCase();
            }
            else newString1 += char;
        }
    }
    return newString1;
};
myFunction("xxXyYzZZ");
myFunction("ANA are MeRe.");


//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

function myFunction(str, numb) {
    if (typeof str !== "string" || typeof numb !== "number") {
        return "Wrong data types!"
    }
    else if (str === "") {
        return "We have an empty string. Please insert new data."
    }
    else if (numb === 0) {
        return "It's not possible to set this data."
    }
    else {
        return result = str.repeat(numb)
    }
}

myFunction("Micutzu ", 4);


//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante

// VARIANTA 1(cu functia If):
function palindrome(string1) {
    if (typeof string1 !== "string") {
        return "Wrong data type!"
    }
    else if (string1 === "") {
        return "We have an empty string. Please insert new data."
    }
    else {
        var keepStrNum = /[^A-Za-z0-9]/g;
        var lowerStrNumStrict = string1.toLowerCase().replace(keepStrNum, "");
        var reverseStrNumStrict = lowerStrNumStrict.split("").reverse().join("");
        return lowerStrNumStrict === reverseStrNumStrict;
    }
}
palindrome("Level");
palindrome("A.D. asa da");


// VARIANTA 2(cu functia For):
function palindrome1(string2) {
    if (typeof string2 !== "string") {
        return "Wrong data type!"
    }
    else if (string2 === "") {
        return "We have an empty string. Please insert new data."
    }
    else {
        var keepStrNum = /[^A-Za-z0-9]/g;
        var lowerStrNumStrict = string2.toLowerCase().replace(keepStrNum, "");
        var len = string2.length;
        for (var i = 0; i < len / 2; i++) {
            if (lowerStrNumStrict[i] !== lowerStrNumStrict[len - 1 - i]) {
                return false;
            }
        }
        return true;
    }
}
palindrome1("Level");
palindrome1("A.D. asa da");
palindrome1("node");


//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care 
//contine ca si elemente cele mai mari numere din fiecare array

function biggestValues(myArray) {
    var bigestValuesArray = [0, 0, 0, 0, 0, 0];
    for (var i = 0; i < myArray.length; i++) {
        for (var j = 0; j < myArray[i].length; j++) {
            if (myArray[i][j] > bigestValuesArray[i]) {
                bigestValuesArray[i] = myArray[i][j];
            }
        }
    }
    return bigestValuesArray;
}
biggestValues([[800, 31, 4, ""], [5, 8, 11, 14, 50, 101], [2, 4, 6, 8, true], [1, true, "us", 8], [23, 1], [5000, 2500, 1000, 0]]);


//Ex7
// Implementati o functie care face reverse la un string

function reverse(string1) {
    if (typeof string1 !== "string") {
        return "Wrong data type!"
    }
    else if (string1 === "") {
        return "We have an empty string. Please insert new data."
    }
    else {
        newString = string1.trim();
        return newString.split("").reverse().join("");
    }
}
reverse("Am fost la masa!");
reverese("lalea");


//Ex8 
// Implementati o functie care calculeaza factorialul unui numar

function factorialNumb(number1) {
    if (typeof number1 !== "number") {
        return "Wrong data type!"
    }
    else {
        factorialResult = 1;
        for (i = 1; i <= number1; i++) {
            factorialResult *= i;
        }
    }
    return factorialResult;
}
factorialNumb(5);


//Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma

function verifyStringInString(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "Wrong data type!"
    }
    else if (string1 === "" || string2 === "") {
        return "We have an/both empty string(s). Please insert new data."
    }
    else {
        if (string1.substr(-string2.length) === string2) {
            return true;
        } else {
            return false;
        }
    }
}
verifyStringInString("Masina", "sina");
verifyStringInString("Masina", "Ina");


//Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care 
//trece testul specificat

var myArray = [10, true, undefined, 1, 10, "mama", "copil", 8, 25, 0];

var trueOrFalse = function () {
    if (typeof myArray[i] === "number" && myArray[i] >= 8) {
        return true
    }
};

function arrayToBoolean(myArray, trueOrFalse) {
    var myNewArray = [];
    var counter = 0;
    for (i = 0; i < myArray.length; i++) {
        if (trueOrFalse()) {
            for (j = 0; j < myNewArray.length; j++) {
                myNewArray[j] = myArray[i];
                counter++;
                if (myNewArray !== [] && counter === 1) {
                    break;
                }
            }
        }
        return console.log(myNewArray[j]);
    }
}

arrayToBoolean([10, true, undefined, 1, 10, "mama", "copil", 8, 25, 0], trueOrFalse);

//OBS Nu am reusit sa o rezolv.


//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea 
//string

function verifyLettersOfStrings(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "Wrong data type!"
    }
    else if (string1 === "" || string2 === "") {
        return "We have an/both empty string(s). Please insert new data."
    }
    else {
        var keepStr1 = /[^A-Za-z]/g;
        var keepStr2 = /[^A-Za-z]/g;
        var newStr1 = string1.trim().toLowerCase().replace(keepStr1, "");
        var newStr2 = string2.trim().toLowerCase().replace(keepStr2, "");
        var counter = 0;
        for (var i = 0; i < newStr1.length; i++) {
            var letter = newStr1[i];
            if (newStr2.indexOf(letter) > -1) {
                counter++
                if (counter === newStr1.length) {
                    return "All letters from second string are within first string!"
                }
                else {
                    return "We have some letters of second string missing from first string"
                }
            }
        }
    }
}
verifyLettersOfStrings("Ana are de mers catre scoala acum.", "ziua este senina.");


// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana 
//cand intalneste elementul cu valoarea specificata

function arrayNumb(myArray, numb) {
    if (typeof myArray !== "object" || typeof numb !== "number") {
        return "Wrong data type!"
    }
    else {
        var len = myArray.length;
        if (numb !== myArray[i]) {
            var i = 0;
            while (i < len) {
                console.log(myArray[i]);
                i++;
                if (numb === myArray[i]) {
                    break;
                }
            }
        }
    }
}
arrayNumb(["mic", true, "", null, 5, 80], 5);


// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN

function eliminateFalseValues(myArray) {
    var finalArray = [];
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i]) {
            finalArray.push(myArray[i]);
        }
    }
    return finalArray;
}

eliminateFalseValues(["mama", null, 8, 9, 0, undefined, NaN, false, ""])


// Ex 14
// Scrieti o functie care repeta un string de n ori specificate


function repeatString(string1, numb) {
    if (typeof string1 !== "string" || typeof numb !== "number") {
        return "Wrong data types!"
    }
    else if (string1 === "") {
        return "We have an empty string. Please insert new data."
    }
    else if (numb === 0) {
        return "It's not possible to set this data."
    }
    else {
        var result = "";
        for (i = 1; i <= numb; i++) {
            result = string1;
            console.log(result)
        }
        return result
    }
}
repeatString("Micutzu", 7);




