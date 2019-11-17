//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100

function myFunction(a, b) {
    if (a !== b) {
        return a + b;
    }
    else {
        return (a + b) * 5
    }
}
console.log(myFunction(10, 5));
console.log(myFunction(10, 10));


//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false

function sumOf(a, b) {
    if (a === 30 && b === 30 || (a + b) === 30) {
        return true
    }
    else {
        return false
    }
};
sumOf(30, 30);
sumOf(15, 15);
sumOf(10, 15);


//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

function checkString(string1) {
    if (string1 === "") {
        return string1.concat("JS")
    }
    else if (string1 === null) {
        return "JS"
    }
    else {
        let substr1 = string1.substr(0, 2);
        let string2 = "JS";
        if (substr1 === "JS") {
            return string1
        }
        else {
            return string2.concat(string1);
        }
    }
}
checkString('JSisAwsome') //- JSisAwsome
checkString('isEasy') //- JSisEasy
checkString(null) //- JS


//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

function removeDuplicates(parameter) {
    if (typeof parameter === "string") {
        return parameter.split("").filter(function (item, pos, self) {
            return self.indexOf(item) === pos;
        }).join('');
    }
    else if (typeof parameter === "number") {
        return Number(parameter.toString().split("").filter(function (item, pos, self) {
            return self.indexOf(item) === pos;
        }).join(""));
    }
    else {
        return "We are talking of other types of data."
    }
}
removeDuplicates('aabcdeef')// - 'abcdef'
removeDuplicates(122334)// - 1234


//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

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


//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * * 

function stars(numb) {
    let text = "";
    for (i = 1; i <= numb; i++) {
        text += "* ";
        console.log(text);
    }
}
stars(5);


//ex7
const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
    // append any negative numbers found in the numbers array 
    // into the negativeNumbers array constant variable above
}
extractNegativeNumbers([1, 2, -5, 4, -6])
//OBS.: Cerinta de a adauga valorile negative din functia extractNegativeNumbers (ce are ca argument un array)
//in const negativeNumbers nu este posibila deoarece la declararea constantei s-a facut si initializarea cu un
//array gol echivalent cu "undefined"; ATENTIE: o assignare ulterioara pentru const este imposibila.


//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

function calculate(numb1, numb2, operator) {
    if (typeof operator === "string" && operator === "add") {
        return console.log(numb1 + numb2);
    }
    else if (operator === "substract") {
        console.log(numb1 - numb2);
    }
    else if (operator === "multiply") {
        console.log(numb1 * numb2);
    }
    else if (operator === "divide") {
        console.log(numb1 / numb2);
    }
    else {
        return "We are talking about a different operator."
    }
}
calculate(2, 5, "add") //=> 7
calculate(10, 8, "substract") //=> 2


//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

function isDiv(numb) {
    const a = "THREE";
    const b = "FIVE";
    const c = "BOTH";
    if (numb % 3 === 0 && numb % 5 === 0) {
        return c;
    }
    else if (numb % 5 === 0) {
        return b;
    }
    else if (numb % 3 === 0) {
        return a;
    }
    else {
        return numb;
    }
};
isDiv(15) //=> "BOTH"
isDiv(9) //=> "THREE"
isDiv(7) //=> 7


//Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38


function displayDateFormat() {
    let date1 = new Date();
    let date1Day = date1.getDay();
    let date1DaysArray = [" Duminica", " Luni", " Marti", " Miercuri ", " Joi", " Vineri", " Sambata"];
    console.log("Azi este : " + date1DaysArray[date1Day] + ".");
    let date1Hour = date1.getHours();
    let date1Minutes = date1.getMinutes();
    let date1Seconds = date1.getSeconds();
    if (date1Hour < 10) {
        "0" + date1Hour;
    }
    else {
        date1Hour
    }
    if (date1Minutes < 10) {
        "0" + date1Minutes;
    }
    else {
        date1Minutes
    }
    if (date1Seconds < 10) {
        "0" + date1Seconds;
    }
    else {
        date1Seconds
    }
    let amOrPm = "";
    if (date1Hour >= 12) {
        amOrPm = " PM ";   
    }
    else {
        amOrPm = " AM ";
    }
    console.log("Ora este : " + date1Hour + amOrPm + " : " + date1Minutes + " : " + date1Seconds);
}


//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

function validPin(string1) {
    let keepNum = /[^0-9]/g;
    let NumStrict = string1.replace(keepNum, "");
    let len = string1.length;
    if (typeof string1 === "string" && len === 4 && string1 === NumStrict) {
        return true;
    }
    else {
        return false;
    }
};
validPin("1234") //=> true
validPin("12345") //=> false
validPin("z23f") //=> false


//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

function removeVowels(string1) {
    let vowels = /[AaEeIiOoUu]/g;
    let noVowelsString1 = string1.replace(vowels, "");
    let len = string1.length;
    for (i = 0; i < len; i++) {
        return noVowelsString1
    }
}
removeVowels("Hey I am developer") //=> "Hy m dvlpr"


//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false

function isSquareNumber(square) {
    if (square >= 0 && Math.sqrt(square) % 1 === 0) {
        return true;
    }
    else {
        return false;
    }
}

isSquareNumber(-1) //=> false
isSquareNumber(25) //=> true
isSquareNumber(3) //=> false


//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true

function isAnagram(string1, string2) {
    let keepString1 = /[^a-z]/g;
    let keepString2 = /[^a-z]/g;
    let newString1 = string1.trim().toLowerCase().replace(keepString1, "").split("");//acum este array
    let newString2 = string2.trim().toLowerCase().replace(keepString2, "").split("");//acum este array
    if (newString1.length !== newString2.length) {
        return false;
    }
    else if (newString1 === newString2) {
        return true
    }
    else {
        let myObject = {};
        for (i = 0; i < newString1.length; i++) {
            if (myObject[newString1[i]])
                myObject[newString1[i]] = myObject[newString1[i]] + 1;
            else
                myObject[newString1[i]] = 1;
        }

        for (j = 0; j < newString2.length; j++) {
            if (myObject[newString2[j]])
                myObject[newString2[j]] = myObject[newString2[j]] - 1;
            else
                myObject[newString2[j]] = 1;
        }

        for (var key in myObject) {
            if (myObject[key] !== 0)
                return false;
        }
        return true;
    }
}
isAnagram("School master", "The class room")//=> true
isAnagram("silent", "listen") //=> true