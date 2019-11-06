// 1. Scrieti o functie sub forma named function care accepta ca argument un CNP si verifica sexul unei persoane.
// In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F".

function verifyGender(CNP) {//sintaxa asociata functiei named function
    // if(CNP[0] === 0) {

    // }
    
    if (typeof CNP !== "number") {
        return "Wrong data type for CNP."
    }//se verifica ca argumentul CNP este number, altfel suntem avertizati
    else {
        newCNP = CNP.toString();//convertim CNP in tipul string newCNP
        console.log(newCNP);
        len = newCNP.length;//calculam lungimea len a stringului newCNP
        if (len > 13) {
            return alert("You typed " + len + " digits. Please reconsider your CNP having only 13 digits.")
        }//verificam ca variabila len sa nu aiba mai multe caractere de vaoarea 13 cat stim ca poate avea CNP-ul
        // oricarei persoane
        else if (len < 13) {
            return alert("You typed " + len + " digits. Please reconsider your CNP having 13 digits.")
        }//verificam ca variabila len sa nu aiba mai putine caractere de vaoarea 13 cat stim ca poate avea CNP-ul
        // oricarei persoane
        else if (len === 13) {
            firstNumb = newCNP[0];//cand sunt 13 caractere alocam variabila firstNumb pentru caracterul de pe prima
            // pozitie, adica indexul 0
            switch (firstNumb) {
                //utilizam functia switch deoarece var firstNumb poate avea valori de la 1-9, iar dintre acestea
                //doar 4 sunt valide pentru determinarea sexului persoanei 

                case "0": return alert("First digit not accepted. Your CNP can't begin with 0.")
                break;
                // OBS: Pentru alte exercitii care permit ca prima cifra sa fie "0", cum pot evita ca la transformarea
                // numarului in string prima cifra sa dispara/ sa nu fie luata in considerare. Ce varianta propuneti?
                // Eu am incercat sa aplic length de number, care desi este variabila primitiva poate deveni si Object 

                case "1": return "Persoana verificata este de sexul M."//pentru firstNumb=1, inseamna ca vom avea persoanele
                // de sex masculin, cu data de nastere cuprinsa intre 01.01.1900 si 31.12.1999
                break;
                case "2": return "Persoana verificata este de sexul F."//pentru firstNumb=2, inseamna ca vom avea persoanele
                // de sex feminin, cu data de nastere cuprinsa intre 01.01.1900 si 31.12.1999
                break;
                case "3": return alert("Digit not accepted")
                break;
                case "4": return alert("Digit not accepted")
                break;
                case "5": return "Persoana verificata este de sexul M."//pentru firstNumb=5, inseamna ca vom avea persoanele
                // de sex masculin, cu data de nastere cuprinsa intre 01.01.2000 si 31.12.2099
                break;
                case "6": return "Persoana verificata este de sexul F."//pentru firstNumb=6, inseamna ca vom avea persoanele
                // de sex feminin, cu data de nastere cuprinsa intre 01.01.2000 si 31.12.2099
                break;
                case "7": return alert("Digit not accepted")
                break;
                case "8": return alert("Digit not accepted")
                break;
                case "9": return alert("Digit not accepted")
                break;
                default: return "A different case than all the above mentioned."
            }
        }
    }
}

// console.log(verifyGender(" 841223226727")); 
// console.log(verifyGender(1841223226727));
// console.log(verifyGender(2841223226727));
// console.log(verifyGender(5841223226727));
// console.log(verifyGender(6841223226727));
// console.log(verifyGender(41223226727));
// console.log(verifyGender(2841223226727100));
console.log(verifyGender(0841223226727));
//se vor verifica toate variantele posibile pentru a observa ce rezultate obtinem


// 2. Scrieti o functie sub forma function expression care accepta ca argument o valoare numerica cuprinsa intre
// 1 si 10 si decide calificativul punctajului. Criteriile sunt urmatoarele:
// - 1-3 = E
// - 3-6 = D
// - 7-8 = B
// - 9 = A
// - 10 = A+
// Functia va returna un text de forma "Calificatul corespunzator punctajului [punctaj] este [calificativ]".

var x = function (points) {//sintaxa asociata functiei function expression
    qualifier = "";//assignam initial pentru calificativul qualifier un string gol
    if (typeof points !== "number") {
        return "Wrong data types!"
    }//ne asiguram ca argumentul points sa fie de tip number, altfel avertizam utilizatorul
    else {
        if (points < 0 ) {
            return "The application doesn't accept negative values."
        }//nu permitem ca punctajul sa fie negativ
        else {
            if (points === 0) {
                return "This grade isn't accepted by the commitee and has no qualifier allocated to it."
            }//in cazul in care nota este 0 nu avem cum sa o asociem cu vreun calificativ si comunicam un mesaj
            else if (points <= 3) {
            qualifier = "E"
            return "Calificativul corespunzator punctajului " + points + " este " + qualifier + "."
            }//daca valoarea este cuprinsa in intervalul 0<points<=3 atunci lui qualifier i se assigneaza valoarea
            //"E" si se transmite mesajul de asociere intre punctaj si calificativ.
            else if (points > 3) {
                if (points <= 6) {
                    qualifier = "D"
                return "Calificativul corespunzator punctajului " + points + " este " + qualifier + "."
                }//daca valoarea este cuprinsa in intervalul 3<points<=6 atunci lui qualifier i se assigneaza valoarea
                 //"D" si se transmite mesajul de asociere intre punctaj si calificativ.
                else if (points > 6) {
                    if (points <= 8) {
                    qualifier = "B"
                    return "Calificativul corespunzator punctajului " + points + " este " + qualifier + "."
                    }//daca valoarea este cuprinsa in intervalul 6<points<=8 atunci lui qualifier i se assigneaza valoarea
                     //"B" si se transmite mesajul de asociere intre punctaj si calificativ.
                    else if (points === 9) {
                    qualifier = "A"
                    return "Calificativul corespunzator punctajului " + points + " este " + qualifier + "."
                    }//daca valoarea este cuprinsa in intervalul points=9 atunci lui qualifier i se assigneaza valoarea
                     //"A" si se transmite mesajul de asociere intre punctaj si calificativ.
                    else if (points === 10) {
                    qualifier = "A+"
                    return "Calificativul corespunzator punctajului " + points + " este " + qualifier + "."
                    }//daca valoarea este cuprinsa in intervalul points=10 atunci lui qualifier i se assigneaza valoarea
                     //"A+" si se transmite mesajul de asociere intre punctaj si calificativ.
                }
            }
        }
    } 
}

var z = x("abc");
console.log(z);
var z = x(-1);
console.log(z);
var z = x(0);
console.log(z);
var z = x(1);
console.log(z);
var z = x(2);
console.log(z);
var z = x(3);
console.log(z);
var z = x(4);
console.log(z);
var z = x(5);
console.log(z);
var z = x(6);
console.log(z);
var z = x(7);
console.log(z);
var z = x(8);
console.log(z);
var z = x(8.5);
console.log(z);
var z = x(9);
console.log(z);
var z = x(10);
console.log(z);
//se vor verifica toate variantele posibile pentru a observa ce rezultate obtinem
// OBS.: De verificat cand este vorba de nota gen 8.5 de ce da undefined.


// 3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un text de forma:
// "Marca [marca] se produce in [tara]". Trebuie sa aveti macar 6 cazuri. In cazul in care functia nu recunoaste
// marca, va returna "Marca este necunoscuta. " Scrieti codul in 3 variante diferite. In declararea functiei trebuie
// sa se regaseasca o functie anonima. Una dintre implementari trebuie sa fie bazata pe Object Literals
// ( read:  https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals )


// VARIANTA 1 DE REZOLVARE:
var car1 = {
    marca: "Mercedes Benz",
    tara: "Germania"
};//declaram obiectul car1

var car2 = {
    marca: "BMW",
    tara: "Germania"
};//declaram obiectul car2

var car3 = {
    marca: "Wolksvagen",
    tara: "Germania"
};//declaram obiectul car3

var car4 = {
    marca: "Dacia",
    tara: "Romania"
};//declaram obiectul car4

var car5 = {
    marca: "Skoda",
    tara: "Cehia"
};//declaram obiectul car5

var car6 = {
    marca: "Seat",
    tara: "Spania"
};//declaram obiectul car6

var find = function(marca) {//sintaxa asociata functiei function expression
    if (typeof marca !== "string") {
        return alert("Wrong data type!")
    }//ne asiguram ca argumentul marca sa fie de tip string, altfel avertizam utilizatorul
    else if (marca === "") {
        return "We have an empty string. Please insert new data."
    }//ne asiguram ca argumentul marca sa nu fie de tip string gol, altfel avertizam utilizatorul
    else {
        marcaWithoutSpace = marca.trim();//cu trim ne asiguram ca nu avem spatii goale in fata si in spatele textului si
        //assignam rezultatul variabilei marcaWithoutSpace
        if (marcaWithoutSpace === car1.marca) {
            return console.log("Marca " + this.car1.marca + " se produce in tara " + this.car1.tara + ".")
        }//daca marcaWithoutSpace este identica ca valoare si tip cu marca obiectului car1 dam mesajul de mai sus, aducand
        //cu "this." exact valorile proprietatilor marca si tara din obiectul car1
        else if (marcaWithoutSpace === car2.marca) {
            return console.log("Marca " + this.car2.marca + " se produce in tara " + this.car2.tara + ".")
        }//idem car1.marca, doar ca acum selectam valorile proprietatilor din obiectul car2
        else if (marcaWithoutSpace === car3.marca) {
            return console.log("Marca " + this.car3.marca + " se produce in tara " + this.car3.tara + ".")
        }//idem car1.marca, doar ca acum selectam valorile proprietatilor din obiectul car3
        else if (marcaWithoutSpace === car4.marca) {
            return console.log("Marca " + this.car4.marca + " se produce in tara " + this.car4.tara + ".")
        }//idem car1.marca, doar ca acum selectam valorile proprietatilor din obiectul car4
        else if (marcaWithoutSpace === car5.marca) {
            return console.log("Marca " + this.car5.marca + " se produce in tara " + this.car5.tara + ".")
        }//idem car1.marca, doar ca acum selectam valorile proprietatilor din obiectul car5
        else if (marcaWithoutSpace === car6.marca) {
            return console.log("Marca " + this.car6.marca + " se produce in tara " + this.car6.tara + ".")
        }//idem car1.marca, doar ca acum selectam valorile proprietatilor din obiectul car6
        else {
            return "Marca este necunoscuta."
        }//valoare specifica altor cazuri
    }
};

var result = find("Seat");
console.log(result);
var result = find("Dacia");
console.log(result);
var result = find("Skoda");
console.log(result);
var result = find("Wolksvagen");
console.log(result);
var result = find("BMW");
console.log(result);
var result = find("Mercedes Benz");
console.log(result);
var result = find("Renault");
console.log(result);
var result = find(true);
console.log(result);
var result = find(123);
console.log(result);
//se vor verifica toate variantele posibile pentru a observa ce rezultate obtinem


// VARIANTA 2 DE REZOLVARE:
function car (marca, tara) {
    this.marca = marca;
    this.tara = tara;
};//sintaxa asociata functiei constructor function - mai eficienta si mai eleganta in cazul bazelor de date
//ce gestioneaza milioane de obiecte

var car1 = new car("Mercedes Benz", "Germania");
var car2 = new car("BMW", "Germania");
var car3 = new car("Wolksvagen", "Germania");
var car4 = new car("Dacia", "Romania");
var car5 = new car("Skoda", "Cehia");
var car6 = new car("Seat", "Spania");
//declararea celor 6 obiecte, cu proprietatile lor

var find = function(marca) {//sintaxa asociata functiei function expression; iar functia este aceeasi ca
    //la rezolvarea 1
    if (typeof marca !== "string") {
        return alert("Wrong data type!")
    }
    else if (marca === "") {
        return "We have an empty string. Please insert new data."
    }
    else {
        marcaWithoutSpace = marca.trim();
        if (marcaWithoutSpace === car1.marca) {
            return console.log("Marca " + this.car1.marca + " se produce in tara " + this.car1.tara + ".")
        }
        else if (marcaWithoutSpace === car2.marca) {
            return console.log("Marca " + this.car2.marca + " se produce in tara " + this.car2.tara + ".")
        }
        else if (marcaWithoutSpace === car3.marca) {
            return console.log("Marca " + this.car3.marca + " se produce in tara " + this.car3.tara + ".")
        }
        else if (marcaWithoutSpace === car4.marca) {
            return console.log("Marca " + this.car4.marca + " se produce in tara " + this.car4.tara + ".")
        }
        else if (marcaWithoutSpace === car5.marca) {
            return console.log("Marca " + this.car5.marca + " se produce in tara " + this.car5.tara + ".")
        }
        else if (marcaWithoutSpace === car6.marca) {
            return console.log("Marca " + this.car6.marca + " se produce in tara " + this.car6.tara + ".")
        }
        else {
            return "Marca este necunoscuta."
        }
    }
};

var result = find("Seat");
console.log(result);
var result = find("Dacia");
console.log(result);
var result = find("Skoda");
console.log(result);
var result = find("Wolksvagen");
console.log(result);
var result = find("BMW");
console.log(result);
var result = find("Mercedes Benz");
console.log(result);
var result = find("Renault");
console.log(result);
var result = find(true);
console.log(result);
var result = find(123);
console.log(result);


// VARIANTA 3 DE REZOLVARE:
function car (marca, tara) {//idem rezolvarea 2
    this.marca = marca;
    this.tara = tara;
};

var car1 = new car("Mercedes Benz", "Germania");
var car2 = new car("BMW", "Germania");
var car3 = new car("Wolksvagen", "Germania");
var car4 = new car("Dacia", "Romania");
var car5 = new car("Skoda", "Cehia");
var car6 = new car("Seat", "Spania");
//idem rezolvarea 2

var find = function(marca) {//idem rezolvarile 1 si 2, doar ca in acest caz dupa ce verificam ca marca este de tip string
    //si e diferita de stringul gol, utilizam functia switch cu parametrul marcaWithoutSpace si vom avea cele 6 cazuri
    //specifice obiectelor noastre, respectiv valoarea default pentru cazul in care se introduce o marca neinserata de noi
    if (typeof marca !== "string") {
        return alert("Wrong data type!")
    }
    else if (marca === "") {
        return "We have an empty string. Please insert new data."
    }
    else {
        marcaWithoutSpace = marca.trim();
        switch (marcaWithoutSpace) {
            case car1.marca: return console.log("Marca " + this.car1.marca + " se produce in tara " + this.car1.tara + ".")
            break;
            case car2.marca: return console.log("Marca " + this.car2.marca + " se produce in tara " + this.car2.tara + ".")
            break;
            case car3.marca: return console.log("Marca " + this.car3.marca + " se produce in tara " + this.car3.tara + ".")
            break;
            case car4.marca: return console.log("Marca " + this.car4.marca + " se produce in tara " + this.car4.tara + ".")
            break;
            case car5.marca: return console.log("Marca " + this.car5.marca + " se produce in tara " + this.car5.tara + ".")
            break;
            case car6.marca: return console.log("Marca " + this.car6.marca + " se produce in tara " + this.car6.tara + ".")
            break;
            default: return "Marca este necunoscuta."
        }
    }
}

var result = find("Seat");
console.log(result);
var result = find("Dacia");
console.log(result);
var result = find("Skoda");
console.log(result);
var result = find("Wolksvagen");
console.log(result);
var result = find("BMW");
console.log(result);
var result = find("Mercedes Benz");
console.log(result);
var result = find("Renault");
console.log(result);
var result = find(true);
console.log(result);
var result = find(123);
console.log(result);

// 4. Scrieti o functie de tip IIFE care:
// - sorteaza urmatorul array in functie de proprietatea "salary" a fiecarui obiect continut:
// var cars = [
//   {name: "John",  salary: 20000 },
//   { name: "Danny", salary: 30500 },
//   { name: "Bekker", salary: 15000 }
// ];
// - afiseaza in consola array-ul sortat

var cars = [
  {name: "John",  salary: 20000 },
  { name: "Danny", salary: 30500 },
  { name: "Bekker", salary: 15000 }
];

(function () {//sintaxa specifica functiei de tip Immediately Invoked Function Expression(IIFE)
    var sortedCars = cars.sort(function(a,b) {
        return a.salary-b.salary;
    })//asociem variabilei sortedCars functia de sortare cars.sort, metoda care va avea 2 parametri, ce vor compara
    //toate cazurile posibile aferente valorilor proprietatii salary si va returna obiectele array-ului sortate
    //crescator dupa suma castigata de fiecare persoana
    console.log(sortedCars)//verific in consola arrayul sortat
    })();


// Veti crea un fisier javascript separat pe care il veti include intr-un fisier html. Verificarea se va face prin
// deschiderea paginii html in browser.