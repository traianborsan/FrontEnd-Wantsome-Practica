//Selectati fiecare element cu metodele ajutatoare
// primul dupa id - getElementById
const a = document.getElementById("test");
console.log(a);
a.style.backgroundColor = "red"

//al doilea si al 3lea cu getElementsByClassName
const b = document.getElementsByClassName("test");
console.log(b);

console.log(b[0]);
b[0].style.backgroundColor = "blue"
console.log(b[1]);
b[1].style.backgroundColor = "green"



//cele 2 section cu getElementByTagName
let c = document.getElementsByTagName("section");
console.log(c[0]);
console.log(c[1]);
c[0].style.backgroundColor = "yellow"
c[1].style.backgroundColor = "magenta"
//etc

let d = document.querySelector("#test-query");
console.log(d);
const e = Array.from(d);
console.log(e);
e[0].style.backgroundColor = "green";

// La fiecare selectie vom schimba background color-ul cu o culoare diferita pentru fiecare metoda


// Practice:
// - Pentru exemplul din linkul anterior selectati li-ul mijlociu (al doilea) si schimbati culoarea sibling-ului anterior si
// urmator folosind 2 metode de mai sus.

// <!DOCTYPE html>
// <html>
// <head>
//   <title>Traversing the DOM</title>
// </head>
// <body>
//   <h1>Traversing the DOM</h1>
//   <p>Let's work with this example to <strong>MASTER</strong> the DOM!</p>
//   <h2>List of Items..</h2>
//   <ul>
//     <li>Pizza</li>
//     <li>Burgers</li>
//     <li>Doritos</li>
//   </ul>
// </body>
// <script>
//   const h1 = document.getElementsByTagName('h1')[0];
//   const p = document.getElementsByTagName('p')[0];
//   const ul = document.getElementsByTagName('ul')[0];
// </script>
// </html>



let a = document.querySelector("ul");
let b = a.children;
let len = b.length;
// console.log(b[0]);
// console.log(b[1]);
// console.log(b[2]);

b[1].nextElementSibling.style.color = "yellow";
b[1].previousElementSibling.style.color = "magenta";


// <!DOCTYPE html>
// <html lang="en">
// <body>
// <img src="https://www.tutorialrepublic.com/lib/images/javascript-illustration.png">
// </body>
// </html>

//Step 1
select img
const image = document.querySelector('img');
image.hasAttribute('src'); // true
image.getAttribute('src'); // returns the link
image.removeAttribute('src');


//Add src attribute
image.setAttribute('src', 'https://dc8gwjuur0w0x.cloudfront.net/lists/avatars/000/000/047/original_o-PINT-GLASS-BEER-facebook.jpg?1473216955');



// <!DOCTYPE html>
// <html lang="en">
// <style>
//     .active {
//         border: 5px solid green;
//     }
//     .alert {
//         border: 5px solid red;
//     }
//     .hidden {
//         display: none;
//     }
//     div {
//         border: 5px solid lightgrey;
//         padding: 15px;
//         margin: 5px;
//     }
// </style>
// <body>
//     <div>Div #1</div>
//     <div class="active">Div #2</div>
// </body>
// </html>

const div = document.querySelector('div');
div.className = 'alert';

const secondDiv = document.querySelector('.active');
//add hidden class
secondDiv.classList.toggle('hidden')
secondDiv.classList.toggle('hidden')
secondDiv.classList.remove('hidden');

secondDiv.classList.replace('active', 'alert')


// <!DOCTYPE html>
// <html lang="en">
// <body>
// <img src="https://www.tutorialrepublic.com/lib/images/javascript-illustration.png">
// </body>
// </html>

Step 1
select img
const image = document.querySelector('img');
image.hasAttribute('src'); // true
image.getAttribute('src'); // returns the link
image.removeAttribute('src');


//Add src attribute
image.setAttribute('src', 'https://dc8gwjuur0w0x.cloudfront.net/lists/avatars/000/000/047/original_o-PINT-GLASS-BEER-facebook.jpg?1473216955');


// <!DOCTYPE html>
// <html lang="en">
// <body>
//     <div style="height: 200px;
//                 width: 200px;
//                 border: 5px solid black;
//                 display: flex;
//                 justify-content: center;
//                 align-items: center;">Style me!</div>
// </body>
// </html>

// Select the div
const div = document.querySelector('div');
// Make div into a circle, change color and font size
div.style.borderRadius = '50%';
div.style.backgroundColor = 'lightgreen';
div.style.fontSize = '30px';