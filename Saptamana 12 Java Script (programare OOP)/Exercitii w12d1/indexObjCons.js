// function iceCream(ingredients, flavour, producer, distributor) {
//     this.ingredients = ingredients;
//     this.falvour = flavour;
//     this.producer = producer;
//     this.distributor = distributor;
// }

// const BettyBlue = {["milk", "sugar", "nuts", "wildberry"], "wilberry", "Betty Ice", "Betty Ice"};


//exemplu clasa facut de Lucian pentru a intelege partea cu prototype:

const Person = function(nameValue, surnameValue, ageValue) {
    //attributes - or properties
    this.name = nameValue;
    this.surname = surnameValue;
    this.age = ageValue;
    this.placeOfLiving = "Earth"

    //methods - or operations
    this.showPersonName = function() {
        console.log(`${this.name} ${this.surname}`)
    }
};
//constructorul in varianta veche ES5

const traianBasescu = new Person("Basescu", "Traian", 68); //object
//I can create similar objects until...n
console.log(traianBasescu);
traianBasescu.showPersonName();

const personWithSuperPowers = function(nameValue, surnameValue, ageValue) {
    //extends Person class + what's written bellow
    Person.call(this, nameValue, surnameValue, ageValue)
    this.superpowers = [];

    this.addSuperPower = function(superpower) {
        this.superpowers.push(superpower);
    }
};

personWithSuperPowers.prototype = new Person();
const aPersonWithSuperPowers = new personWithSuperPowers("Ovidiu", "Grigoras", 18);
aPersonWithSuperPowers.addSuperPower("invisibility");
//console.log(aPersonWithSuperPowers);
aPersonWithSuperPowers.showPersonName();//we show inheritance(=mostenire)

//Exercitiu clasa facut de Ovidiu:

function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = "triunghi";
};
const forma = {
    type: '',
    getType: function() {
        return this.type;
    }
}
Triangle.prototype = forma;
Triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c
}
const trinughi = new Triangle(2, 3, 4);
console.log(forma.isPrototypeOf(triunghi));
console.log(triunghi.getType());
//console.log(triunghi.constructor);


