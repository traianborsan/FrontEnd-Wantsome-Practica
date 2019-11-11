// 1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
// raporta acest lucru in consola. (exemplu: “2 este numar par”);
// Scrieti functia in doua variante: while si for

//VARIANTA CU FOR:
for (var i = 0; i < 21; i++) {//sintaxa pentru for: parcurgem loop-ul de la 0-20, acestea fiind valorile contorului i si incrementam pentru fiecare apelare a functiei
    if (i % 2 === 0) { // verificam daca valoarea numerica pentru i din cadrul iteratiei curente este para; folosim operatorul % = modulo
        console.log(i + " este numar par.");//afisam in consola ce numere sunt pare
        continue;//se sare peste numerele care nu corespund conditiei din if
    }
    // de fiecare data cand executia ajunge aici, inseamna ca i este impar
    console.log(i + " este numar impar.");//afiseaza valoarea numerica si textul aferent pentru fiecare numar impar
};

//VARIANTA CU WHILE:
function findEvenOrOddNumb() {
    var i = 0;//assignam contorului i valoarea 0, pentru a putea incepe functia while
    while (i < 21) {//parcurgem while pana la i = 20
        if (i % 2 === 0) {// verificam daca valoarea numerica pentru i din cadrul iteratiei curente este para; folosim operatorul % = modulo
            console.log(i + " este numar par.");//afisam in consola ce numere sunt pare
            i++//incrementam cu 1 unitate contorul i
        }
        else {
            console.log(i + " este numar impar.")//afiseaza valoarea numerica si textul aferent pentru fiecare numar impar
            i++;//incrementam cu 1 unitate contorul i
        }
    }
}
findEvenOrOddNumb();//apelam functia findEvenOrOddNumb


// 2. Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
// rezultatul. (exemplu: “3*9=27”).
//  Scrieti functia in doua variante: while si for

//VARIANTA CU FOR:
function multiplyByNine() {
    for (i = 0; i < 11; i++) {//sintaxa pentru for: parcurgem loop-ul de la 0-10, acestea fiind valorile contorului i si incrementam pentru fiecare apelare a functiei
        console.log(i * 9);//afisam in consola numerele inmultite cu 9
    }
}
multiplyByNine();//apelam functia multiplyByNine

//VARIANTA CU WHILE:
function multiplyByNine1() {
    var i = 0;//assignam contorului i valoarea 0, pentru a putea incepe functia while
    while (i < 11) {//parcurgem while pana la i = 10
        console.log(i * 9);//afisam in consola numerele inmultite cu 9
        i++;//incrementam cu 1 unitate contorul i
    }
}
multiplyByNine1();//apelam functia multiplyByNine1

//  3. Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
// (exemplu: 1 * 0 = 0
//  1 * 1 = 1
//  …
//  1 * 10 = 10 )
// Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”

//VARIANTA CU FOR:
// 1. afiseaza tabla inmultirii (de tip string):
function multiplyByOne() {
    text = "";//assignam variabilei text un string gol
    for (i = 0; i < 11; i++) {//sintaxa pentru for: parcurgem loop-ul de la 0-10, acestea fiind valorile contorului i si incrementam pentru fiecare apelare a functiei
        var x = 1;//declaram variabila x, reprezentand numarul cu care vom inmulti contorul nostru si ii assignam valoarea 1
        text = x + " * " + i + " = " + x * i + "\n";//variabila text va deveni tabla inmultirii (ex.:1 * 0 = 0) si va fi de tip string
        console.log(text);//afisam in consola variabila text
    }
}
multiplyByOne();//apelam functia multiplyByOne

// 2. afiseaza doar rezultatul final al inmultirii unui numar cu 1 (de tip number):
function multiplyByOne1() {
    for (i = 0; i < 11; i++) {//sintaxa pentru for: parcurgem loop-ul de la 0-10, acestea fiind valorile contorului i si incrementam pentru fiecare apelare a functiei
        var x = 1;//declaram variabila x, reprezentand numarul cu care vom inmulti contorul nostru si ii assignam valoarea 1
        console.log(x * i);//afisam in consola rezultatul inmultirii celor 2 numere (de tip number)
    }
}
multiplyByOne1();//apelam functia multiplyByOne1


//VARIANTA CU WHILE:
// 1. afiseaza tabla inmultirii (de tip string):
function multiplyByOne2() {
    var i = 0;//assignam valoarea initiala (=0) pentru contorul i, pentru parcurgerea while
    var x = 1;//declaram variabila x, reprezentand numarul cu care vom inmulti contorul nostru si ii assignam valoarea 1
    while (i < 11) {//parcurgem while pana la i = 10
        text = x + " * " + i + " = " + x * i + "\n";//variabila text va deveni tabla inmultirii (ex.:1 * 0 = 0) si va fi de tip string
        console.log(text);//afisam in consola variabila text
        i++;//incrementam cu 1 unitate contorul i
    }
}
multiplyByOne2();//apelam functia multiplyByOne2

// 2. afiseaza doar rezultatul final al inmultirii unui numar cu 1 (de tip number):
function multiplyByOne3() {
    var i = 0;//assignam valoarea initiala (=0) pentru contorul i, pentru parcurgerea while
    var x = 1;//declaram variabila x, reprezentand numarul cu care vom inmulti contorul nostru si ii assignam valoarea 1
    while (i < 11) {//parcurgem while pana la i = 10
        console.log(x * i);//afisam in consola rezultatul inmultirii celor 2 numere (de tip number)
        i++;//incrementam cu 1 unitate contorul i
    }
}
multiplyByOne3();//apelam functia multiplyByOne3


// 4. Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se
// poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, obtii
// calificativul B \n ...samd “). Atentie: Rezultatul calificativului trebuie sa fie obtinut prin utilizarea functiei
// dezvoltate la tema anterioara ! 

//Functia din tema trecuta ajustata la valorile returnate dupa parcurgerea if-urilor:
var x = function (points) {//sintaxa asociata functiei function expression
    qualifier = "";//assignam initial pentru calificativul qualifier un string gol
    if (typeof points !== "number") {
        return "Wrong data types!"
    }//ne asiguram ca argumentul points sa fie de tip number, altfel avertizam utilizatorul
    else {
        if (points < 0) {
            return "The application doesn't accept negative values."
        }//nu permitem ca punctajul sa fie negativ
        else {
            if (points === 0) {
                return "This grade isn't accepted by the commitee and has no qualifier allocated to it."
            }//in cazul in care nota este 0 nu avem cum sa o asociem cu vreun calificativ si comunicam un mesaj
            else if (points <= 3) {
                qualifier = "E"
                return qualifier
            }//daca valoarea este cuprinsa in intervalul 0<points<=3 atunci lui qualifier i se assigneaza valoarea
            //"E" si se transmite mesajul de asociere intre punctaj si calificativ.
            else if (points > 3) {
                if (points <= 6) {
                    qualifier = "D"
                    return qualifier
                }//daca valoarea este cuprinsa in intervalul 3<points<=6 atunci lui qualifier i se assigneaza valoarea
                //"D" si se transmite mesajul de asociere intre punctaj si calificativ.
                else if (points > 6) {
                    if (points <= 8) {
                        qualifier = "B"
                        return qualifier
                    }//daca valoarea este cuprinsa in intervalul 6<points<=8 atunci lui qualifier i se assigneaza valoarea
                    //"B" si se transmite mesajul de asociere intre punctaj si calificativ.
                    else if (points === 9) {
                        qualifier = "A"
                        return qualifier
                    }//daca valoarea este points=9 atunci lui qualifier i se assigneaza valoarea
                    //"A" si se transmite mesajul de asociere intre punctaj si calificativ.
                    else if (points === 10) {
                        qualifier = "A+"
                        return qualifier
                    }//daca valoarea este points=10 atunci lui qualifier i se assigneaza valoarea
                    //"A+" si se transmite mesajul de asociere intre punctaj si calificativ.
                }
            }
        }
    }
}

//VARIANTA CU FOR:
function displayQualifier() {
    text = "";//assignam variabilei text un string gol
    for (i = 1; i < 11; i++) {//sintaxa pentru for: parcurgem loop-ul de la 0-10, acestea fiind valorile contorului i si incrementam pentru fiecare apelare a functiei
        text = "Pentru " + i + ", obtii calificativul " + x(i) + "\n";//variabila text va fi de forma "Pentru 1, obtii calificativul E (rezultat din apelarea functiei de tip function expression x(i))"
        console.log(text);//afisam in consola variabila text
    }
}
displayQualifier();//apelam functia displayQualifier


//VARIANTA CU WHILE:
function displayQualifier1() {
    var i = 1;//assignam valoarea initiala (=1) pentru contorul i, pentru parcurgerea while
    while (i < 11) {//parcurgem while pana la i = 10
        text = "Pentru " + i + ", obtii calificativul " + x(i) + "\n";//variabila text va fi de forma "Pentru 1, obtii calificativul E (rezultat din apelarea functiei de tip function expression x(i))"
        console.log(text);//afisam in consola variabila text
        i++;//incrementam cu 1 unitate contorul i
    }
}
displayQualifier1();//apelam functia displayQualifier1