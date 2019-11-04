Cerinte:
// 1. Scrieti o functie care verifica daca un input este sau nu de tip string.

function is_string(input) {
    if (typeof input === "string") {return true;
    } else {
      return false;
    }
  };
  is_string("numeric");

console.log(is_string('w3resource'));
// true
console.log(is_string([1, 2, 4, 0]));
// false


// 2. Scrieti o functie care verifica daca un string este gol sau nu.

function is_Blank(input) {
  if (typeof input === "string" && input.length === 0) {
    return true;
  } else {
    return false;
  }
};
is_Blank("");

console.log(is_Blank(''));
console.log(is_Blank('abc'));
// true
// False


// 3. Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte:

function string_to_array(a) {
  if (typeof a !== "string") {
      return "Wrong date type";
  }
  else {
      return a.split(" ");}
      };
string_to_array("Robin Singh");

console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]


// 4. Scrieti o functie care transforma un string in forma abreviata:

function abbrev_name(str_name) {
    if (typeof str_name !== "string") {
        return "Wrong data type."
    }
    else {
        var myArray = str_name.split(" ");
        console.log(myArray);
        myArray.splice(1, 1, "S.");
        console.log(myArray);
        var res = myArray.join(" ");
        return result = res.toString()
    }
}

console.log(abbrev_name("Robin Singh"));
"Robin S."


// 5. Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ):

function capitalize(stri1) {
    var x = typeof(stri1);
    if (x === "string") {
    var y = stri1.trim();
    var z = y[0];
    var w = y.replace(z,"");
    var result1 = z.toUpperCase();
    var result2 = result1.concat(w);
      return console.log(result2)
  } else {
    "Parameter not a string"
  };
  };
  capitalize("mingea este in portbagaj.")

console.log(capitalize('js string exercises'));
"Js string exercises"


// 6. Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului:

function truncate_string(string_element, num_Of_Char) {
    if (typeof string_element !== "string" && typeof num_Of_char !== "number") {
        return "Wrong data type!"
    }
    else {
        return string_element.substr(0, num_Of_Char)
    };
}

console.log(truncate_string("Robin Singh",4));
"Robi"


// 7. Scrieti o functie care specifica daca o caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau
// nu:

function isUpperCaseAt(string1, position) {
    if (typeof string1 !== "string" && typeof position !== "number") {
        return "Wrong data type!"
    }
    else if (string1 === "") {
        return "We have an empty string. Please insert new data."
    }
    else {
        if (position > string1.length-1) {
            return "Not possible. We surpassed our string."
        }
        else {
            select_char = ""
            if (position <= string1.length-1) {
                select_char = string1.charAt(position)
                if (select_char === "!" || select_char === "?" || select_char === "~" || select_char === "`" || select_char === "@" || select_char === "#" ||
                select_char === "$" || select_char === "%" || select_char === "^" || select_char === "&" || select_char === "*" || select_char === "(" ||
                select_char === ")" || select_char === "-" || select_char === "_" || select_char === "=" || select_char === "+" || select_char === "[" ||
                select_char === "{" || select_char === "]" || select_char === "}" || select_char === "|" || select_char === ";" || select_char === ":" ||
                select_char === "'" || select_char === "," || select_char === "<" || select_char === "." || select_char === ">" || select_char === "/" || select_char === "?") {
                    return "This character is an operator or a punctuation mark."
                }
                else if (select_char === "0" || select_char === "1" || select_char === "2" || select_char === "3" || select_char === "4" ||
                select_char === "5" || select_char === "6" || select_char === "7" || select_char === "8" || select_char === "9") {
                    return "This character is a number. Not eligible for this exercise." 
                }
                else {
                    if (select_char === select_char.toUpperCase() && select_char !== select_char.toLowerCase()) {
                        return true;
                    }
                    else if (select_char === select_char.toLowerCase()) {
                        return false
                    }
                    else {
                        return "Different situation."
                    }
                }   
            }
            }
        }
    }
               
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
false


// 8. Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:

function insert(string3, string4, position1) {
    console.log(string3)
    if (typeof string3 !== "string" && string4 !== "string" && typeof position1 !== "number") {
        return "Wrong data type!"
    }
    else if (string3 === "" || string4 === "") {
        return "We have an/ both empty string(s). Please insert new data."
    }
    else {
        if (position1 > string3.length-1) {
            return "Not possible. We surpassed our string."
        }
        else if (position1 <= string3.length-1) {
            if (result1 = string4.concat(string3)) {
                return result1
            }
            else {
                var a = result1.substr(string4.length-1,position1)
                var b = result1.slice(string4.length-1+position1,result1.length-1)
                result2 = a.concat(string4)
                return result2.concat(b)
            }
        }
        else {
            return "Whole different scenario."
        }
    }
}

console.log(insert('We are doing some exercises.','JavaScript ',18));
"We are doing some exercises."
"JavaScript We are doing some exercises."
"We are doing some JavaScript exercises."


// 9. Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:

function remove_first_occurrence(string1,string2) {
    if (typeof string1 !== "string" && string2 !== "string") {
        return "Wrong data type!"
    }
    else if (string1 === "" || string2 === "") {
        return "We have an/ both empty string(s). Please insert new data."
    }
    else {
        var a = string1.trim()
        var myArray = a.split(" ")
        var c = myArray.length
        var position = 0 
        if (c-1-position < 0) {
            return "We surpassed our string!"
        }
        else if (position < c-1) {
            var pos_element = myArray[position]
            if (pos_element !== string2) {
                console.log(myArray)
                return position++
            }
            else {
                var result = myArray.splice(position, 1,"")
                console.log(result)
                return result.join()
            }   
        }
        else {
            return "We couldn't find the second array inside the first one."
        }
    }
}


console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
"The quick brown fox jumps over lazy dog"


// 10. Scrieti o functie care compara doua string-uri case-insensitive:

function compare_strings(string1,string2) {
    if (typeof string1 !== "string" && string2 !== "string") {
        return "Wrong data type!"
    }
    else if (string1 === "" || string2 === "") {
        return "We have an/ both empty string(s). Please insert new data."
    }
    else if (string1.length !== string2.length) {
        return "We have different string lengths"
    }
    else if (string1.length === string2.length) {
        var char_1 = string1[0]
        var char_2 = string2[0]
        if (char_1.toUpperCase === char_2.toUpperCase &&
            char_1.toLowerCase === char_2.toLowerCase) {
            return true
        }
        else {
            return false
        }
    }
    char_1++
    char_2++
}

console.log(compare_strings('abcd', 'AbcD'));
true


// 11. Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:

function Uncapitalize(stri1) {
    var x = typeof(stri1);
    if (x === "string") {
    var y = stri1.trim();
    var z = y[0];
    var w = y.replace(z,"");
    var result1 = z.toLowerCase();
    var result2 = result1.concat(w);
      return console.log(result2)
  } else {
    "Parameter not a string"
  };
  };
  Uncapitalize("Mingea este in portbagaj.")

console.log(Uncapitalize('Js string exercises'));
"js string exercises"