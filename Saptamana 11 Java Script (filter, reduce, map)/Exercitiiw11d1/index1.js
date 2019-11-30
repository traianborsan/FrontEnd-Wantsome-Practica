//EXERCITIUL 1:
function capitalizeNames(arr){
    // your code here




   }
   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
   // ["John", "Jacob", "Jingleheimer", "Schmidt"]


//EXERCITIUL 2:
// Scrieti codul corespunzator functiei care dubleaza fiecare element de tip valoare numerica dintr-un array specificat ca
// argument
function doubleEachNumber(arr){
 // write your code in here
}
console.log(doubleEachNumber([2, “5”, 100, “100”, “blalblala”])); // [4, “5”, 200, “100”, “blalblala”]


//EXERCITIUL 3:
function getPersonsNames(arr){
    // your code here
   }
   console.log(getPersonsNames([
    {
    name: "Angelina",
    surname: “Jolie”,
    age: 80
    },
    {
    name: "Eric",
    surname: “Jones”,
    age: 27
    },
   ]));
   // ["Angelina Jolie", "Eric Jones"]


   //EXERCITIUL 4:
   function computeExamPass(arr){
    // your code here
   }
   console.log(computeExamPass([
    {
    name: "Angelina",
    surname: “Jolie”,
    grade: 7
    },
    {
    name: "Eric",
    surname: “Jones”,
    grade: 3
    },
   ]));

  /* [
    "Angelina Jolie has passed the
    exam",
    "Eric Jones has not passed the exam"
    ]
    */

//EXERCITIUL 5:
//    Implementati functia de mai jos si utilizati
//    rezultatul pentru a afisa elementele intr-o pagina
   function getPersonsDomElements(arr){
    // your code here
   }
   console.log(getPersonsDomElements([
    {
    name: "Angelina",
    surname: “Jolie”,
    age: 80
    },
    {
    name: "Eric",
    surname: “Jones”,
    age: 27
    },
   ]));

   /* [
"<h1>Angelina Jolie"<h1><h2>80</h2>”,
“<h1>Eric Jones</h1><h2>27</h2>”
]
*/

/* Ex.1 (http://bit.do/ex1FP)
Loop through the Array and remove all non-active users from the initial Array */

const myData = [{
    name: 'Iggy Turskis',
    active: false
},{
    name: 'Geoff Newell',
    active: true
},{
    name: 'Peter Newnham',
    active: true
},{
    name: 'James Walker',
    active: false
}];


/*Ex 2 (http://bit.do/ex2FP)
Convertiti toate distantele in mile - 0.621371 * distance - folosind map
Returnati toate itemele cu distanta mai mica de 10000  - folosind filter
Returnati distanta totala - folosind reduce
*/

const distances = [
    { from: 'New York', to: 'Dhaka', distance: 12654},
    { from: 'Sydney', to: 'chittagong', distance: 8858},
    { from: 'Kolkata', to: 'Sylhet', distance: 670}
  ]


  // Ex 3 (http://bit.do/FPex3)
  //Returnati un array de obiecte care sa contina doar id si titlul fiecarui item de mai jos 
const releases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];


// Ex 4 (http://bit.do/FPex4)
//Returnati id-urile videourilor care au rating 5.0
const newReleases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];


// Ex 5 (http://bit.do/FPbonus1)
//Vreau la final sa am o lista de video ids

const movieLists = [
    {
        name: "New Releases",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "Dramas",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
];


//Ex 6 (https://codepen.io/oviduzz/pen/eadGeR?editors=1010)
//Returnati id, title, si 150x200 box art url pentru fiecare video
//hint aveti de folosit map,filter

let movieLists = [
    {
        name: "Instant Queue",
        videos : [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "New Releases",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
];


//ex.1. (http://bit.do/exFunctional1)
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.charCodeAt()
const moveLetters = function(string){
    // your code
  }
  

  // ex2 (http://bit.do/exFunctional1)
  // Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
  // changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"
  let changeWordCase = function(string){
    // Code
  }


  // ex3 (https://codepen.io/oviduzz/pen/QRpRqz?editors=0010)
// Faceti asftel incat toate variabilele de mai jois sa returneze ceea ce zice numele
const arr = [
    {name:'sasha', sex:'f', age:7, species:'cat'},
    {name:'john', sex:'m', age:133, species:'human'},
    {name:'titus', sex:'m', age:62, species:'human'},
    {name: 'kalifa', sex:'f', age:255, species:'human'},
    {name: 'oreo', sex:'m', age:21, species:'cat'},
    ];
    
  // let allCats =  code
  // let allHumans =  code
  // let allFemales =  code
  // let totalOfAllAges =  code
  // let averageAgeOfCats =  code
  // let averageAgeOfHumans = code
  // let avgLengthOfNames = code


  //ex 1. (https://codepen.io/oviduzz/pen/joBjBP?editors=0010)
// Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor - // f1(f2(value))
//ex composedValue(square, double, 5);  // 100
// functia square returneaza patratul numarului iar double - dublul numarului


//ex.2 (https://codepen.io/oviduzz/pen/joBjBP?editors=0010)
//faceti o functie 'compose' care atunci cand va fi apleata returneaza rezultatul altor 2 functii;
//exemplu const myFunction = compose(square, double) 
// myFunction(5)  --> 100
// myFunction(10) --> 400  ...etc


//ex.3 (https://codepen.io/oviduzz/pen/joBjBP?editors=0010)
//faceti o functie find care ia ca parametrii un array si o functie care testeaza arrayul si returneaza doar elmentele care trec testele.
// find([1,2,3,4,5], isOdd); returneaza 1 3 5
