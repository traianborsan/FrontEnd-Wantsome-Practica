// Setul 1 de exercitii din clasa:

//Ex1
//Scrieti o functie multiplyByTen care atunci cand o apelam cu console.log(multiplyByTen(6)) sa avem 60 rezultat.
var multiplyByTen = function(a) {
    return a*10
};
console.log(multiplyByTen(6));

//Ex2
//Scrieti o functie myNameIs care sa ia un singur parametru si cand o apelam cu numele nostru sa returneze "Numele meu este ___"
function myNameIs(a) {
    return "Numele meu este  " + a
};
myNameIs("Cristi");
console.log(myNameIs("Marius"));

//Ex3 
//Scrieti o functie care sa transforme un numar in string.
var numb = 3;
var n = numb.toString();
console.log(n);
typeof(n);

//Ex4 
//Scrieti o functie care sa returneze patratul numarului pe care-l dam ca si argument.
function square(a) {
    return a**2
};
square(4);
console.log(square(5));

//Ex5
//Scrieti o functie numita aflaViitorul care sa aiba 4 parametrii -  numele jobului, compania, in cati ani, si cati bani - ar trebui sa returnam "Eu voi fi job in x ani la compania y si voi face z bani pe ora"
//Chemati/invocati/apelati acea functie de 3 ori cu diferite argumente.

function aflaViitorul(jobName, comp, years, euro) {
    return "Eu voi fi " + jobName + " in " + years + " ani la " + comp + " si voi face " + euro + " euro pe ora."
};
aflaViitorul("Reprezentant vanzari", "Oracle", 5, 20);
aflaViitorul("Programator JS", "UiPath", 3, 50);
aflaViitorul("Programator FrontEnd", "Google", 3, 100);

//Ex6
//Scrieti o functie care sa calculeze cati ani are o pisica in ani pisicesti avand in vedere ca 1 an de om = 7 ani de pisica.
// functia are 1 singur parametru - deci va accepta 1 singur argument.
// Rezultatul trebuie sa fie "Pisica mea are xx ani in ani pisicesti"
//BONUS - adaugati un alt parametru care reprezinta varsta noastra si obtinem la final varsta pisciii relatata la varsta noastra.

function catYears(a) {
    return "Pisica mea are " + a*7 + " ani in ani pisicesti."
};
catYears(8);
console.log(catYears(10));

function catYears(a, b) {
    return "Pisica mea are " + a*7 + " ani in ani pisicesti. Eu am " + b + " ani omenesti, prin urmare varsta pisicii mele este de " + a*7/b + " ori mai scazuta/ ridicata decat varsta mea."
};
catYears(2,33);
console.log(catYears(6,33));

//Ex7
// Vreau sa scriu o functie ce sa calculeze pentru urmatorii X ani cate cani de cafea voi bea
// Functia accepta ca parametrii years si coffePerDay.
// Rezultatul va fi "In urmatorii X ani voi bea in total Y cani de cafea"

function drunk_coffee(years, coffeePerDay) {
    return "In urmatorii " + years + " voi bea in total " + coffeePerDay*365*years + " cani de cafea."
  };
  drunk_coffee(5,4);
  console.log(drunk_coffee(10,2));

//EX8 BONUS 
// Faceti 2 functii una calculateCelsiusToFarenheit() si una calculateFarenheitToCelsius() unde sa facem conversia dintre celsius si farenhite.
// rezultatul trebuie sa fie "X grade Celsius reprezinta Y grade Farenhite"
// folositi https://www.mathsisfun.com/temperature-conversion.html ca si referinta pentru calcul.

function calculateCelsiusToFarenheit(Celsius) {
    return Celsius + " grade Celsius reprezinta " + (Celsius*9/5)+32 + " grade Farenheit."
  }
  calculateCelsiusToFarenheit(21.5);
  console.log(calculateCelsiusToFarenheit(37.8));
  
  
  function calculateFarenheitToCelsius(Farenheit) {
    return Farenheit + " grade Farenheit reprezinta " + (Farenheit-32)*5/9 + " grade Celsius."
  }
  calculateFarenheitToCelsius(21.5);
  console.log(calculateFarenheitToCelsius(37.8));


//   Setul 2 de exercitii din clasa:

  //Ex1 : La ce index intalnim cuvantul 'trece', dar cuvantul 'javascript'? Scrieti si metodele folosite.
var str = "Daca te simti bine, nu te ingrijora, trece!";
//Raspuns: 
var stringPosition = str.indexOf("trece"); sau
var stringPosition = str.indexOf("trece", 15);
console.log(stringPosition);
var stringPosition = str.indexOf("javascript");
var stringPosition = str.indexOf("javascript", 0);
console.log(stringPosition);

// Ex2.0: Returnati stringul Kiwi folosind metoda slice() cu indexi pozitivi si apoi negativi.
// Ex 2.1: Returnati toate fructele incepand de la 'Lemon'.
  var fruits = "Apple, Lemon, Plum, Kiwi";
var result1 = fruits.slice(20,24);
var result2 = fruits.slice(-4);
// OBS.: aici am omis ultimul parametru si a parcurs stringul pana la final.
console.log(result1);
console.log(result2);

// Ex 3: Returnati stringul 'Plum' folosind metoda substr()
var moreFruits = "Apple, Lemon, Plum, Kiwi";
var result = moreFruits.substr(14, 4);
console.log(result);

// Ex 4: Inlocuiti 'Mia Kalifa' cu numele vostru folosind o metoda pe stringuri
// bonus: Inlocuiti "Sasha" cu numele vostru in tot stringul de mai jos.
   var replaceName = "Eu sunt Mia Kalifa, doctor docent in matematica";
var result = replaceName.replace("Mia Kalifa", "Cristi");
console.log(result);

   var bonusName = "Sasha este o persoana de nota 10, Sasha invata javascript(mai nou)"
   var result = bonusName.replace(/Sasha/g, "Cristi");
console.log(result);

// Ex5: Vreau ca toate literele sa fie intai cu caractere mici si apoi cu caractere mari
var text = "24 de orE intr-o zi, 24 de beRi intr-o lAda. Vreo coincidenta?"
var result1 = text.toLowerCase();
var result2 = text.toUpperCase();
console.log(result1);
console.log(result2);

// Ex6: Vreau sa am la final un singur string cu toate celalte stringuri (indentati calumea, cu spatii unde e nevoie)
var text1 = "Când ai un";
var text2 = "ciocan";
var text3 = "in mana toate lucrurile ti se par";
var text4 = "cuie";
var result = text1.concat(" ", text2, " ", text3, " ", text4);
console.log(result);

// Ex7: Vreau sa stiu intai ce litera se afla pentru indexul 6, apoi ce unicode are aceasta litera, si apoi vreau sa o accesez cu 'property access'
var word = "Mamaliga";
var result1 = word.charAt(6);
console.log(result1);
var result2 = word.charCodeAt(6);
console.log(result2);
var result3 = word[6];
console.log(result3);

// Ex8: Vreau sa am o noua variabla care sa cotina un array format din toate stringurile de mai jos care sunt despartite de '|'
var cars = "Toyota|Mazda|Tesla|Hyundai|Dacia";
var modif = cars.split("|");
console.log(modif);

//Big BONUS 
// Se dau variabilele de mai jos, vreau sa ajung la rezultatul "NU EXISTA INTREBARI PROASTE" fara sa modific valorile celor 2 variabile;
var firstWord = 'Nu exista';
var secondWord = 'raspunsuri proaste';
var replaceWord = secondWord.replace("raspunsuri", "intrebari");
console.log(replaceWord);
var concatWords = firstWord.concat(" ", replaceWord);
console.log(concatWords);
var upperWords = concatWords.toUpperCase();
console.log(upperWords);

