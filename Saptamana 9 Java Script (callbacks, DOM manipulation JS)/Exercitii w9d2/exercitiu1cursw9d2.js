//Selectati fiecare element cu metodele ajutatoare ( https://bit.do/domEx)
// La fiecare selectie vom schimba background color-ul cu o culoare diferita pentru fiecare metoda
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
const c = document.getElementsByTagName("section");
console.log(c[0]);
console.log(c[1]);
c[0].style.backgroundColor = "yellow"
c[1].style.backgroundColor = "magenta"
//etc

const f = document.querySelectorAll('.test-query-all');
console.log(f);
const g = Array.from(f);
console.log(g);
g[0].style.backgroundColor = "grey"
g[1].style.backgroundColor = "red"

const m = document.querySelector('#test-query');
console.log(m);
m.style.backgroundColor = "green"
