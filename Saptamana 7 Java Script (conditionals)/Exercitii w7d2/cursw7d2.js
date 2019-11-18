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
    if (typeof string1 !== "string") {//verific ca tipul sirului de caractere sa fie string
        return "Wrong data type!"//mesaj predefinit in cazul in care nu este string
    }
    else if (string1 === "") {//verificam ca nu avem de a face cu un string gol
        return "We have an empty string. Please insert new data."//mesaj predefinit pentru string gol
    }
    else {
        var newString1 = "";//declaram ca variabila un nou string si assignam stringul gol
        var trimString1 = string1.trim();//declar variabila echivalenta cu stringul fara spatii in fata si in spate
        for (i = 0; i < trimString1.length; i++) {//sintaxa specifica for; parcurgem string-ul fara spatii de la indexul 0 la lungimea sa - 1 si incrementam contorul pos_Array
            var char = trimString1.charAt(i);//declaram variabila char aferente literei de la indexul i
            var charCode = char.charCodeAt(0);//declaram variabila charCode aferente codului ASCII al literei de la indexul 0
            if (charCode >= 97 && charCode <= 122) {//cat timp vorbim de un set de litere mici cuprinse in intervalul 97-122 in tabelul ASCII,
                newString1 += char.toUpperCase();//le transformam in litere mari si le concatenam newString1
            }
            else if (charCode >= 65 && charCode <= 90) {//altfel cat timp vorbim de un set de litere mici cuprinse in intervalul 65-90 in tabelul ASCII,
                newString1 += char.toLowerCase();//le transformam in litere mici si le concatenam newString1
            }
            else newString1 += char;//altfel orice alt caracter diferit de cele alfabetice este concatenat newString1
        }
    }
    return newString1;//afisam newString1
};
myFunction("xxXyYzZZ");//apelam functia
myFunction("ANA are MeRe.");


//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

function myFunction(str, numb) {
    if (typeof str !== "string" || typeof numb !== "number") {//verific ca tipul sirului de caractere sa fie string, iar numarul de tip number
        return "Wrong data types!"//mesaj predefinit in cazul in care nu se respecta una din conditii
    }
    else if (str === "") {//verificam ca nu avem de a face cu un string gol
        return "We have an empty string. Please insert new data."//mesaj predefinit pentru string gol
    }
    else if (numb === 0) {
        return "It's not possible to set this data."//mesaj predefinit in cazul in care numb = 0
    }
    else {
        return result = str.repeat(numb)//afisam rezultatul concatenarii repetitive a stringului
    }
}

myFunction("Micutzu ", 4);//apelam functia


//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante

// VARIANTA 1 - ES5 (cu functia If):
function palindrome(string1) {
    if (typeof string1 !== "string") {//verific ca tipul sirului de caractere sa fie string
        return "Wrong data type!"//mesaj predefinit in cazul in care nu este string
    }
    else if (string1 === "") {//verificam ca nu avem de a face cu un string gol
        return "We have an empty string. Please insert new data."//mesaj predefinit pentru string gol
    }
    else {
        var keepStrNum = /[^A-Za-z0-9]/g;//declaram variabila keepStrNum care cauta la nivel global toate caracterele non alfanumerice si le stocheaza
        var lowerStrNumStrict = string1.toLowerCase().replace(keepStrNum, "");//in string-ul nostru vom face toate caracterele litere mici si vom inlocui cu ajutorul replace toate caracterele non alfanumerice cu "" 
        var reverseStrNumStrict = lowerStrNumStrict.split("").reverse().join("");//declaram variabila reverseStrNumStrict care se obtine prin transformarea lowerStrNumStrict in array si cu reverse crearea imaginii sale in oglinda si e apoi transformat iar in string
        return lowerStrNumStrict === reverseStrNumStrict;//se verifica daca lowerStrNumStrict este echivalent ca valoare si tip cu imginea sa in oglinda (adica reverseStrNumStrict)
    }
}
palindrome("Level");//apelam functia
palindrome("A.D. asa da");


// VARIANTA 2 - ES5(cu functia For):
function palindrome1(string2) {
    if (typeof string2 !== "string") {//verific ca tipul sirului de caractere sa fie string
        return "Wrong data type!"//mesaj predefinit in cazul in care nu este string
    }
    else if (string2 === "") {//verificam ca nu avem de a face cu un string gol
        return "We have an empty string. Please insert new data."//mesaj predefinit pentru string gol
    }
    else {
        var keepStrNum = /[^A-Za-z0-9]/g;//declaram variabila keepStrNum care cauta la nivel global toate caracterele non alfanumerice si le stocheaza
        var lowerStrNumStrict = string2.toLowerCase().replace(keepStrNum, "");//in string-ul nostru vom face toate caracterele litere mici si vom inlocui cu ajutorul replace toate caracterele non alfanumerice cu ""
        var len = string2.length;//declaram variabila len care repezinta lungimea string-ului
        for (var i = 0; i < len / 2; i++) {//sintaxa specifica for; parcurgem string-ul de la indexul 0 la jumatatea lungimii sale-1 si incrementam contorul i (metoda care simplifica executia functiei in cazul string-urilor foarte lungi)
            if (lowerStrNumStrict[i] !== lowerStrNumStrict[len - 1 - i]) {//daca vom compara litere care sunt la aceeasi distanta fata de capatul cel mai apropiat si vor fi diferite,
                return false;//se afiseaza false => stringul nu e palindrom
            }
        }
        return true;//altfel stringul este palindrom
    }
}
palindrome1("Level");//apelam functia
palindrome1("A.D. asa da");
palindrome1("node");

//VARIANTA ES6: (mai trebuie sa o verific, nu functioneaza corect)
function isPalindromeVTwo(theStr) {
    if (theStr.split('').reverse().join('') === theStr) {
        return `Congrats! The word ${theStr} is a palindrome`;
    }
    return `The word ${theStr} is not a palindrome: (`;
}
isPalindromeVTwo("Level");//apelam functia
isPalindromeVTwo("A.D. asa da");
isPalindromeVTwo("node");


//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care 
//contine ca si elemente cele mai mari numere din fiecare array

function biggestValues(myArray) {
    var bigestValuesArray = [0, 0, 0, 0, 0, 0];//declaram bigestValuesArray cu 6 valori egale cu 0
    for (var i = 0; i < myArray.length; i++) {//sintaxa specifica for; parcurgem array-ul dat ca argument in functie de la indexul 0 la lungimea sa-1 si incrementam contorul i
        for (var j = 0; j < myArray[i].length; j++) {//sintaxa specifica for; parcurgem array-urile ce figureaza in interiorul celui principal de la indexul 0 la lungimea sa-1 si incrementam contorul j
            if (myArray[i][j] > bigestValuesArray[i]) {//daca valoarea de la index-ul j din array-ul secundar parcurs aflat la indexul i in array-ul principal este > valoarea de la index-ul i din bigestValuesArray,
                bigestValuesArray[i] = myArray[i][j];//indexului i din bigestValuesArray i se assingenaza valoarea gasita si se continua bucla pana se finalizeaza toate valorile array-urilor incluse in array-ul principal
            }
        }
    }
    return bigestValuesArray; //afisam bigestValuesArray cu valorile cele mai mari
}
biggestValues([[800, 31, 4, ""], [5, 8, 11, 14, 50, 101], [2, 4, 6, 8, true], [1, true, "us", 8], [23, 1], [5000, 2500, 1000, 0]]);//apelam functia


//Ex7
// Implementati o functie care face reverse la un string

function reverse(string1) {
    if (typeof string1 !== "string") {//verific ca tipul sirului de caractere sa fie string
        return "Wrong data type!"//mesaj predefinit in cazul in care nu este string
    }
    else if (string1 === "") {//verificam ca nu avem de a face cu un string gol
        return "We have an empty string. Please insert new data."//mesaj predefinit pentru string gol
    }
    else {
        newString = string1.trim();//declar variabila echivalenta cu stringul fara spatii in fata si in spate
        return newString.split("").reverse().join("");//afisam string-ul care este transformat in array de litere, se creaza imaginea in oglinda si se transforma inapoi in string
    }
}
reverse("Am fost la masa!");//apelam functia
reverese("lalea");


//Ex8 
// Implementati o functie care calculeaza factorialul unui numar

function factorialNumb(number1) {
    if (typeof number1 !== "number") {//verific ca tipul numarului sa fie number
        return "Wrong data type!"//mesaj predefinit in cazul in care nu este number
    }
    else {
        var factorialResult = 1;//declar variabila factorialResult si ii assignez valoarea 1
        for (i = 1; i <= number1; i++) {//sintaxa specifica for; parcurgem contorul i de la valoarea 1 la valoarea number1 si incrementam contorul j
            factorialResult *= i;//vom inmulti la fiecare iteratie valoarea salvata anterior pentru factorialResult cu valoarea contorului pana ajungem la number1
        }
    }
    return factorialResult;//afisam rezultatul final
}
factorialNumb(5);//apelam functia


//Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma

function verifyStringInString(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {//verific ca tipul celor 2 siruri de caractere sa fie string
        return "Wrong data type!"//mesaj predefinit in cazul in care nu este string
    }
    else if (string1 === "" || string2 === "") {//verificam ca nu avem de a face cu un string gol
        return "We have an/both empty string(s). Please insert new data."//mesaj predefinit pentru string gol
    }
    else {
        if (string1.substr(-string2.length) === string2) {//daca aplicam functia substr de la finalul string1 pe lungimea string2 si aceasta este egala cu string2 atunci inseamna ca se valideaza finalul string1 
            return true;//valoare returnata daca cerinta de mai sus este satisfacuta
        } else {
            return false;//valoare returnata daca cerinta de mai sus este satisfacuta
        }
    }
}
verifyStringInString("Masina", "sina");
verifyStringInString("Masina", "Ina");


//Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care 
//trece testul specificat

var trueOrFalse = function (numb) {
    return typeof numb === "number" && numb >= 8
};
function arrayToBoolean(myArray, trueOrFalse) {
    for (i = 0; i < myArray.length; i++) {
        if (trueOrFalse(myArray[i])) {
            return myArray[i]
        }
    }
}

arrayToBoolean([10, true, undefined, 1, 10, "mama", "copil", 8, 25, 0], trueOrFalse);

//OBS Nu am reusit sa o rezolv.


//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea 
//string

//VARIANTA ES5:
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

//VARIANTA ES6:
function hasSameLetters(str1, str2) {
    var str2Array = str2.split('');
    for (var i = 0; i < str2Array.length; i++) {
        if (str1.search(str2Array[i]) === -1) {
            return `Not all letters of ${str2} can be found in ${str1}`
        }
    }
    return `All letters of ${str2} can be found in ${str1}`
}
hasSameLetters("Ana are de mers catre scoala acum.", "ziua este senina.")


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




