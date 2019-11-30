let a = document.querySelector("ul");
let b = a.children;
let len = b.length;
console.log(len);
console.log(b[0]);
console.log(b[1]);
console.log(b[2]);

b[1].nextElementSibling.style.color = "yellow";
b[1].previousElementSibling.style.color = "magenta";