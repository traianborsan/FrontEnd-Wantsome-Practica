// EXERCITII ARRAY:
//Ex1: Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5.
var familyMembers = ["mother", "father", "son", "daughter", "grandparents"];
var result = familyMembers.length;
console.log(result)


//Ex2: Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur
var array1 = ['Car', 'Vehicle'];
var array2 = ['House', 'Job'];
var result = array1.concat(array2);
console.log(result);


//Ex3: Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand folosim metoda isArray()

var age = ["new born", "child", "teenager", "young adult", "adult", "old person"];
var result = Array.isArray(age);
console.log(result);
var number = 0;
var result1 = Array.isArray(number);
console.log(result1);


//Ex4: Folositi o metoda pe arrayuri avand in vedere variabila de mai jos, sa obtinem rezultatul "one and two and three and four and five" 
// fara sa modificati variabila initiala

var numbers = ['one', 'two', 'three', 'four', 'five'];
numbers.splice(1,0,"and");
numbers.splice(3,0,"and");
numbers.splice(5,0,"and");
numbers.splice(7,0,"and");
console.log(numbers);
var result = numbers.join(" ");
console.log(result)


//Ex5: Adaugati 2 elemente noi in arrayul de mai jos
var cars = ['Tesla', 'Dacia'];
cars.push("Renault", "Peugeot")
console.log(cars);


//Ex6: Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat.
cars.pop();
console.log(cars);


//Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului

cars.unshift("Dodge");
console.log(cars);

//Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array

cars.reverse();
console.log(cars);

//Ex9: Avand in vedere rezultatul anterior Folositi o metoda pe arrayuri care sa inlocuiasca incepand de la elementul 'Tesla' si sa adauge alte 2 elemente noi - splice();

cars.splice(2,2, "Hyunday", "Honda");
console.log(cars);

//Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic 

var arrayNumbers = [1, 5, 20 ,30, 100];
arrayNumbers.sort(function(a,b) {
    return a-b;
})
console.log(arrayNumbers)

arrayNumbers.sort(function(a,b) {
    return b-a;
})
console.log(arrayNumbers)

//Ex11 : Aveti urmatorul array - folositi o functie care sa ia arrayul ca argument si sa-l returneze ordonat
var fruitsArray = ["Apple", "Lemon", "Banana", "Orange", "Bere", "Mici"]
fruitsArray.sort();
console.log(fruitsArray);


// EXERCITII OBJECTS:
// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name

var car = {
    name: "Tesla",
    wheels: 4,
}
car.name = "Mercedes";
console.log(car);
delete car.name;
console.log(car)

//Ex2
// Creati un obiect cu 4 proprietati
// Stocati "key"-urile intr-o variabila noua
// intr-o alta variabila vreau sa am toate key-urile cu litere mari
// Stocati valorile intr-o variabila noua
// intr-o alta variabila vreau sa am toate valorile cu litere mici
// vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"

var person = {
    name: "Michael",
    age: 18,
    status: "single",
    saySomethingAboutPerson: function() {
  return "Mr./ Mrs. " + this.name + " is "+ this.age + " years old and has a marital status of " + this.status + " person. All the above information represent identification data for this person."
}
};
var objKeys = Object.keys(person);
var stringObjKeys = objKeys.join(" ")
var upperObjKeys = stringObjKeys.toUpperCase();
console.log(upperObjKeys);
var arrayObjKeys = upperObjKeys.split(" ");

var objValues = Object.values(person);
var stringObjValues = objValues.join(",")
var lowerObjValues = stringObjValues.toLowerCase();
console.log(lowerObjValues);
var arrayObjValues = lowerObjValues.split(",");

console.log(person.saySomethingAboutPerson());


//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.

var clothes = {
    model: "T-shirt",
    gender: "male",
    speak: function() {
          return console.log(this.model + " " + this.gender)
    }
};
console.log(clothes.speak());


//Ex4 
// Creati un obiect cu cateva proprietati
// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
// Pe obiectul nou adaugam 2 noi proprietati
// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.

var myGarden = {
    plant: "jasmin",
    number: 2,
    area: "front",
  };
  
  var copyMyGarden = Object.assign({}, myGarden);
  console.log(copyMyGarden);
  copyMyGarden.bloom = "april";
  copyMyGarden.season = "april-september";
  console.log(copyMyGarden);
  
  myHouse = { 
    rooms: 3,
    zone: "Bucium",
    animals: 1
  }
  
  var finalObject = Object.assign(copyMyGarden, myHouse);
  console.log(copyMyGarden);
  console.log(finalObject);

  
  // Ex5 
  // Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
  // Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
  // transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
  
var car = {
    model: {
        fourbyfour: "Jeep",
        normal: "Fiat Punto",
}
}
car.model.fourbyfour;
console.log(car.model.fourbyfour);
car.model.normal;
console.log(car.model.normal);
var objKeys = Object.keys(car.model);
console.log(objKeys);
var stringObjKeys = objKeys.join(" ");
var auto = new car();
console.log(car.model.fourbyfour + " si " + car.model.normal + " apartin obiectului " + auto.constructor.name + ".");

  //Ex6
  // Avem obiectul : 
  myObject = {
  name: "John",
  surname: "Applegate",
  }

//Adaugati o metoda care sa sorteze cele 2 valori ale numelui.

  myObject.sort = function() {
      var objValues = Object.values(myObject);
      var result = objValues.sort();
      return result
  }

  console.log(myObject);
  console.log(myObject.sort());
  
  //Ex7 
  //Faceti o functie constructor
  // Cu functia constructor creati 3 obiecte cu valori diferite
  // Pentru toate valorile din acele obiecte transformatile in litere mari.

  function school(teacher, student, grade) {
      this.teacher = teacher;
      this.student = student;
      this.grade = grade;
  };

  var mySchool = new school("Mrs. Jane", "Michael", "B+");
  var yourSchool = new school("Mr. Adams", "Michelle", "A");
  var hisSchool = new school("Mr. Doe", "Johnny", "C+");

  console.log(mySchool);
  console.log(yourSchool);
  console.log(hisSchool);

var objKeys1 = Object.values(mySchool);
var stringObjKeys1 = objKeys1.join(" ")
var upperObjKeys1 = stringObjKeys1.toUpperCase();
console.log(upperObjKeys1);
var arrayObjKeys1 = upperObjKeys1.split(" ");

var objKeys2 = Object.values(yourSchool);
var stringObjKeys2 = objKeys2.join(" ")
var upperObjKeys2 = stringObjKeys2.toUpperCase();
console.log(upperObjKeys2);
var arrayObjKeys2 = upperObjKeys2.split(" ");

var objKeys3 = Object.values(hisSchool);
var stringObjKeys3 = objKeys3.join(" ")
var upperObjKeys3 = stringObjKeys3.toUpperCase();
console.log(upperObjKeys3);
var arrayObjKeys3 = upperObjKeys3.split(" ");
