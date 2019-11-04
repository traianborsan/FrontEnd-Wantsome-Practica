//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"


function myFunction(e_mail_user) {
    if (e_mail_user !== "string") {
        return "Wrong data type!"
    }
    else if (e_mail_user === "") {
        return "We have an empty string. Please insert new data."
    }
    else if ()
}

//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"

function myFunction(first_Upper) {
    if (typeof first_Upper !== "string") { // typeof - compara tipul de date
        return "Wrong data type!"
    }
    else if (first_Upper === "") {
        return "We have an empty string. Please insert new data."
    }
    else {
        var string = first_Upper.trim();
        var string_Lower = string.toLowerCase().split(" ");
        for (var pos_Array = 0; pos_Array < string_Lower.length; pos_Array++) { // cuv
            var subString = string_Lower[pos_Array].split(""); // lit
            // for (var pos_Array_Word = 0; pos_Array_Word < subString.length; pos_Array_Word++) {
                subString[0] = subString[0].toUpperCase();
            // }
            string_Lower[pos_Array] = subString.join("");
        }
        return string_Lower.join(" ");
    }
}

console.log(myFunction("i am superman"))


//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"



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


//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante




//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care 
//contine ca si elemente cele mai mari numere din fiecare array




//Ex7
// Implementati o functie care face reverse la un string




//Ex8 
// Implementati o functie care calculeaza factorialul unui numar




//Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma




//Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care 
//trece testul specificat




//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea 
//string




// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana 
//cand intalneste elementul cu valoarea specificata




// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN




// Ex 14
// Scrieti o functie care repeta un string de n ori specificate




