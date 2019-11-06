Cerinte:
// 1. Scrieti o functie care verifica daca un input este sau nu de tip string.

function is_string(input) {
    if (typeof input === "string") {
        return true;
    }
    else {
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
        myArray.splice(1, 1, "S.");
        var res = myArray.join(" ");
        return result = res.toString()
    }
}

console.log(abbrev_name("Robin Singh"));
"Robin S."


// 5. Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ):

function capitalize(string1) {
    if (typeof(string1) !== "string") {
        return "Wrong data type!"
    }
    else {
        var y = string1.trim();
        var z = y[0];
        var w = y.replace(z,"");
        var part_result = z.toUpperCase();
        var result = part_result.concat(w);
        return console.log(result)
    } 
  };

console.log(capitalize('js string exercises'));
"Js string exercises"


// 6. Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului:

function truncate_string(string_Element, num_Of_Char) {
    if (typeof string_Element !== "string" && typeof num_Of_Char !== "number") {
        return "Wrong data type!"
    }
    else {
        return string_Element.substr(0, num_Of_Char)
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

function insert(string1, string2, position) {
    var substring1 = string1.substr(0,position);
    var substring2 = string1.slice(position,);
    if (typeof string1 !== "string" && string2 !== "string" && typeof position !== "number") {
        return "Wrong data type!"
    }
    else if (string1 === "" || string2 === "") {
        return "We have an/ both empty string(s). Please insert new data."
    }
    else {
        if (position > string1.length-1) {
            return "Not possible. We surpassed our string."
        }
        else {
            console.log(string1);
            console.log(string2.concat(string1));
            var result1 = substring1.concat(string2).concat(substring2)
            if (result1 !== "") {
                return console.log(result1)
            }
            else {
                return "A different case scenario."
            }
        } 
    }
}

console.log(insert('We are doing some exercises.','JavaScript ',18));
"We are doing some exercises."
"JavaScript We are doing some exercises."
"We are doing some JavaScript exercises."


// 9. Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:

function remove_first_occurrence(string1,string2) {
    var noSpace_String1 = string1.trim();
    var noSpace_String2 = string2.trim()
    if (typeof noSpace_String1 !== "string" && noSpace_String2 !== "string") {
        return "Wrong data type!"
    }
    else if (noSpace_String1 === "" || noSpace_String2 === "") {
        return "We have an/ both empty string(s). Please insert new data."
    }
    else {
        var result = noSpace_String1.replace(" " + noSpace_String2, "")
        return result
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
        if (string1.toUpperCase() === string2.toUpperCase() && string1.toLowerCase() === string2.toLowerCase()) {
            return true
        }
        else {
            return false
        }
    }
}

console.log(compare_strings('abcd', 'AbcD'));
true


// 11. Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:

function Uncapitalize(string1) {
    if (typeof(string1) !== "string") {
        return "Wrong data type!"
    }
    else {
        var y = string1.trim();
        var z = y[0];
        var w = y.replace(z,"");
        var part_result = z.toLowerCase();
        var result = part_result.concat(w);
        return console.log(result)
    } 
  };

console.log(Uncapitalize('Js string exercises'));
"js string exercises"