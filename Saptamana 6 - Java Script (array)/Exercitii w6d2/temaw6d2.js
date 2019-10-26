// 1. Scrieti o functie de tip named function denumita greatestNrBetween care:
// - Primeste ca argumente doua numere
// - Returneaza numarul care este mai mare
// Apelati functia de doua ori si afisati pe ecran textul: “Numarul mai mare dintre 5 si 10 este 10“

function greatestNrBetween(a,b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "We have wrong argument."
    };
    if (a>b) {
        return "Numarul mai mare dintre " + a + " si " + b + " este " + a + "."
    }
    else if (a<b) {
        return "Numarul mai mare dintre " + a + " si " + b + " este " + b + "."
    }
    else {return "Numarul " + a + " egal cu " + b};
};
console.log(greatestNrBetween(12,30));
console.log(greatestNrBetween(12,12));
console.log(greatestNrBetween(12,5));


// 2. Scrieti o functie de tip function expression asociata cu numele helloWorldInLang care:
// - Primeste ca argument codul unei limbi: “en”, “es”, “de”
// - Returneaza “Hello World” pentru limba corespunzatoare ( cel putin 3 limbi )
// - Daca limba nu este specificata, trebuie sa returneze textul pentru limba engleza
// Apelati functia pentru fiecare caz in parte.

var helloWorldInLang = function (lang_code) {
    if (typeof lang_code !== "string") {
        return "Wrong data type!!!";
    }

    if (lang_code === "en") {
    return "Hello world."
    }
    else {
        if (lang_code === "es") {
            return "Holla mundo."
        }
        else if (lang_code === "de") {
            return "Hallo."
        }
        else {return "Hello world."}
    }
}

console.log(helloWorldInLang(123));
console.log(helloWorldInLang("en"));
console.log(helloWorldInLang("es"));
console.log(helloWorldInLang("de"));
console.log(helloWorldInLang("ro"));


// 3. Scrieti o functie numita pluralizeWord care:
// - accepta doua argumente: un substantiv in engleza si un numar
// - returneaza numarul si forma de plural corespunzatoare substantivului, precum: “5 cats”, “1 dog”
// - adaugati cateva cazuri particulare pentru cuvinte precum “sheep” sau “geese” 


function pluralizeWord(numb,noun) {
    if (typeof numb !== "number" || typeof noun !== "string") {
        return "Wrong data types!"
    }
    else {
        if (numb < 0) {
            return "Not possible!!!"
        }

        else if (numb === 0) {
                if (noun === "goose") {
                    return numb + " geese"
                }
                else if (noun === "sheep") {
                    return numb + " sheep"
                }
                else if (noun === "mouse") {
                    return numb + " mice"
                }
                else {
                    return numb + noun + "s"
            }
        }
    
        else if (numb === 1) {
            return numb + " " + noun
        }
    
        else if (numb > 1) {
            if (noun === "goose") {
                return numb + " geese"
                }
            else if (noun === "sheep") {
                return numb + " sheep"
                }
            else if (noun === "mouse") {
                return numb + " mice"
                }
            else {
                return numb + noun + "s"
            }
}   
}
}

console.log(pluralizeWord(1,"cat"))
console.log(pluralizeWord(3, "cat"));
console.log(pluralizeWord(1, "goose"));
console.log(pluralizeWord(2, "goose"));
console.log(pluralizeWord(2, "sheep"));
console.log(pluralizeWord(5, "mouse"));
console.log(pluralizeWord(-1, "mouse"));


// 4. Scrieti o functie care accepta ca argument venitul anual al unui angajat in dolari (ex: $30,000) si calculeaza taxa
// corespunzatoare considerand urmatoarele criterii:
// - daca angajatul castiga anual o suma mai mica de $30,000, taxa este 0%
// - daca venitul anual se situeaza intre $50,000 - $99,999, taxa calculata trebuie sa fie 35%
// - pentru venit mai mare de $100,000, taxa se calculeaza ca procentaj de 40%
// Returnati un text care sa aiba un format asemanator: “Pentru un venit anual de x, aveti de platit taxe in valoare de
// y”


function annualWage (wage) {
    if (typeof wage !== "number") {
        return "Wrong data type!"
    }
    else {
        if (wage < 0) {
            return "Acest caz nu este posibil, decat atunci cand angajatorul nu a declarat veniturile dumneavoastra catre ANAF, insa a raportat cheltuieli cu personalul."
        }
        else if (wage === 0) {
            return "Pentru un venit anual de " + wage + " $ " + ", aveti de platit taxe in valoare de " + 0 * wage + " $."
        }
        else if (wage < 30000) {
            return "Pentru un venit anual de " + wage + " $ " + ", aveti de platit taxe in valoare de " + 0 * wage + " $."
        }
        else if (wage >= 30000) {
            if (wage < 50000) {
            return "Pentru un venit anual de " + wage + " $ " + ", nu a fost propusa momentan o taxa pe venit. Va rugam sa va adresati celei mai apropiate agentii ANAF pentru recalculare."
            }
            else if (wage >= 50000) {
                if (wage <= 99999) {
                return "Pentru un venit anual de " + wage + " $ " + ", aveti de platit taxe in valoare de " + 0.35 * wage + " $."
                }
                else if (wage > 100000) {
                return "Pentru un venit anual de " + wage + " $ " + ", aveti de platit taxe in valoare de " + 0.4 * wage + " $."
                }
                else {
                return "Cazul dumneavoastra trebuie analizat de catre ANAF."
                }
            }
        }
    }
}      

console.log(annualWage(-100));
console.log(annualWage(0));
console.log(annualWage(29999));
console.log(annualWage(40000));
console.log(annualWage(70000));
console.log(annualWage(99999));
console.log(annualWage(100100));


// 5. Scrieti in doua variante o functie care accepta ca argument o valoare numerica pentru un parametru numit points si
// afiseaza:
// - AA if points is greater than 90
// - AB if points is greater than 80 and less than or equal to 90
// - BB if points is greater than 70 and less than or equal to 80
// - BC if points is greater than 60 and less than or equal to 70
// - CC if points is greater than 50 and less than or equal to 60
// - CD if points is greater than 40 and less than or equal to 50
// - DD if points is greater than 30 and less than or equal to 40
// - FF if points is less than or equal to 30

// VARIANTA 1:

function toPoints (points) {
    if (typeof points !== "number") {
        return "Wrong data type!"
    }
    else {
        if (points <0 ) {
            return "The application doesn't accept negative values."
        }
        else {
            if (points === 0) {
                return "FF"
            }
            else if (points <= 30) {
            return "FF"
            }
            else if (points > 30) {
                if (points <= 40) {
                return "DD"
                }
                else if (points > 40) {
                    if (points <= 50) {
                    return "CD"
                    }
                    else if (points > 50) {
                        if (points <= 60) {
                            return "CC"
                        }
                        else if (points > 60) {
                            if (points <= 70) {
                                return "BC"
                            }
                            else if (points > 70) {
                                if (points <= 80) {
                                    return "BB"
                                }
                                else if (points > 80) {
                                    if (points <= 90) {
                                        return "AB"
                                    }
                                    else if (points > 90) {
                                        return "AA"
                                    }
                                }
                            }
                        }
                    } 
                }
            }      
        }      
    }              
}

console.log(toPoints("string"));
console.log(toPoints(-1));
console.log(toPoints(30));
console.log(toPoints(40));
console.log(toPoints(50));
console.log(toPoints(60));
console.log(toPoints(70));
console.log(toPoints(80));
console.log(toPoints(90));
console.log(toPoints(95));


// VARIANTA 2:

function toPoints (points) {
    if (typeof points !== "number") {
        return "Wrong data type!"
    }
    else {
        if (points <0 ) {
            return "The application doesn't accept negative values."
        }
        else {
            if (points === 0) {
                return "FF"
            }
            else if (points - 30 <= 0) {
            return "FF"
            }
            else if (points - 30 > 0) {
                if (points - 40 <= 0) {
                return "DD"
                }
                else if (points - 40 > 0) {
                    if (points - 50 <= 0) {
                    return "CD"
                    }
                    else if (points - 50 > 0) {
                        if (points - 60 <= 0) {
                            return "CC"
                        }
                        else if (points - 60 > 0) {
                            if (points - 70 <= 0) {
                                return "BC"
                            }
                            else if (points - 70 > 0) {
                                if (points - 80 <= 0) {
                                    return "BB"
                                }
                                else if (points - 80 > 0) {
                                    if (points - 90 <= 0) {
                                        return "AB"
                                    }
                                    else if (points -90 > 0) {
                                        return "AA"
                                    }
                                }
                            }
                        }
                    } 
                }
            }      
        }      
    }              
}

console.log(toPoints("string"));
console.log(toPoints(-1));
console.log(toPoints(30));
console.log(toPoints(40));
console.log(toPoints(50));
console.log(toPoints(60));
console.log(toPoints(70));
console.log(toPoints(80));
console.log(toPoints(90));
console.log(toPoints(95));


// VARIANTA 3:

function toPoints (points) {
    if (typeof points !== "number") {
        return "Wrong data type!"
    }
    else {
        if (points <0 ) {
            return "The application doesn't accept negative values."
        }
        else {
            switch(points) {
                case 0: return "FF"
                break;
                case 1: return "FF"
                break;
                case 2: return "FF"
                break;
                case 3: return "FF"
                break;
                case 4: return "FF"
                break;
                case 5: return "FF"
                break;
                case 6: return "FF"
                break;
                case 7: return "FF"
                break;
                case 8: return "FF"
                break;
                case 9: return "FF"
                break;
                case 10: return "FF"
                break;
                case 11: return "FF"
                break;
                case 12: return "FF"
                break;
                case 13: return "FF"
                break;
                case 14: return "FF"
                break;
                case 15: return "FF"
                break;
                case 16: return "FF"
                break;
                case 17: return "FF"
                break;
                case 18: return "FF"
                break;
                case 19: return "FF"
                break;
                case 20: return "FF"
                break;
                case 21: return "FF"
                break;
                case 22: return "FF"
                break;
                case 23: return "FF"
                break;
                case 24: return "FF"
                break;
                case 25: return "FF"
                break;
                case 26: return "FF"
                break;
                case 27: return "FF"
                break;
                case 28: return "FF"
                break;
                case 29: return "FF"
                break;
                case 30: return "FF"
                break;
                case 31: return "DD"
                break;
                case 32: return "DD"
                break;
                case 33: return "DD"
                break;
                case 34: return "DD"
                break;
                case 35: return "DD"
                break;
                case 36: return "DD"
                break;
                case 37: return "DD"
                break;
                case 38: return "DD"
                break;
                case 39: return "DD"
                break;
                case 40: return "DD"
                break;
                case 41: return "CD"
                break;
                case 42: return "CD"
                break;
                case 43: return "CD"
                break;
                case 44: return "CD"
                break;
                case 45: return "CD"
                break;
                case 46: return "CD"
                break;
                case 47: return "CD"
                break;
                case 48: return "CD"
                break;
                case 49: return "CD"
                break;
                case 50: return "CD"
                break;
                case 51: return "CC"
                break;
                case 52: return "CC"
                break;
                case 53: return "CC"
                break;
                case 54: return "CC"
                break;
                case 55: return "CC"
                break;
                case 56: return "CC"
                break;
                case 57: return "CC"
                break;
                case 58: return "CC"
                break;
                case 59: return "CC"
                break;
                case 60: return "CC"
                break;
                case 61: return "BC"
                break;
                case 62: return "BC"
                break;
                case 63: return "BC"
                break;
                case 65: return "BC"
                break;
                case 66: return "BC"
                break;
                case 67: return "BC"
                break;
                case 68: return "BC"
                break;
                case 69: return "BC"
                break;
                case 64: return "BC"
                break;
                case 70: return "BC"
                break;
                case 71: return "BB"
                break;
                case 72: return "BB"
                break;
                case 73: return "BB"
                break;
                case 74: return "BB"
                break;
                case 75: return "BB"
                break;
                case 76: return "BB"
                break;
                case 77: return "BB"
                break;
                case 78: return "BB"
                break;
                case 79: return "BB"
                break;
                case 80: return "BB"
                break;
                case 81: return "AB"
                break;
                case 82: return "AB"
                break;
                case 83: return "AB"
                break;
                case 84: return "AB"
                break;
                case 85: return "AB"
                break;
                case 86: return "AB"
                break;
                case 87: return "AB"
                break;
                case 88: return "AB"
                break;
                case 89: return "AB"
                break;
                case 90: return "AB"
                break;
                case 91: return "AA"
                break;
                case 92: return "AA"
                break;
                case 93: return "AA"
                break;
                case 94: return "AA"
                break;
                case 95: return "AA"
                break;
                case 96: return "AA"
                break;
                case 97: return "AA"
                break;
                case 98: return "AA"
                break;
                case 99: return "AA"
                break;
                case 100: return "AA"
                break;
                default: return "Talk with your administrator!"
            }
        }
    }
}

console.log(toPoints("string"));
console.log(toPoints(-1));
console.log(toPoints(30));
console.log(toPoints(40));
console.log(toPoints(50));
console.log(toPoints(60));
console.log(toPoints(70));
console.log(toPoints(80));
console.log(toPoints(90));
console.log(toPoints(95));


// 6. Scrieti o functie care testeaza daca o anumita data introdusa este weekend:
// Test Data :
// console.log(is_weekend('Nov 15, 2014'));
// console.log(is_weekend('Nov 16, 2014'));
// console.log(is_weekend('Nov 17, 2014'));
// Output :
// "weekend"
// "weekend"
// undefined

// pas 1: Stabilesc ca date este de tip String;
// pas 2: Aloc unei date de tip "mmm dd, yyyy" o zi din saptamana (folosesc un Array);
// pas 3: Realizez alocarea cuvantului "weekend" pentru zilele de "Saturday" si "Sunday" (folosind switch)

function is_weekend(date) {
    if (typeof date !== "string") {
        return "Wrong date type!"
    }
    else {
        var days = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday"],
        var numb = [0, 1, 2, 3, 4, 5, 6]
        switch(date){
            case "Saturday": return "weekend"
            break;
            case "Sunday": return "weekend"
            break;
            default: return undefined
        }
        
    }
}

console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));