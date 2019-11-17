//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/
//varianta ES5 - function expression - variabila in care stochez ca si val o fn
var sumNumbersUpTo = function(limit) {
    var sum = 0;
    for (var i = 1; i <=limit; i++) {
        sum += i
    };
    return sum
};

//varianta ES6
const sumNumbersUpToNew = limit => {
    let sum = 0;
    for (let i = 1; i <=limit; i++) {
        sum += i
    };
    return sum
};

/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/

//varianta ES5



//varianta ES6


/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/

//varianta ES5

//varianta ES6

/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/

//varianta ES5

//varianta ES6

/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/

//varianta ES5

//varianta ES6

/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/

//varianta ES5

//varianta ES6

/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/

//varianta ES5

//varianta ES6