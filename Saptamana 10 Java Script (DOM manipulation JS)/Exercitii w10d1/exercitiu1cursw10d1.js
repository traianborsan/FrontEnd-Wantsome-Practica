/* (https://codesandbox.io/s/77o24kxz1)
//1. Creati o pagina HTML care sa includa un buton; Intr-un fisier index.js separat 
//definiti o functie buttonEventHandler al carei cod sa porneasca o fereastra
//de tip alerta in care se va afisa textul "Ai apasat pe buton.". Specificati prin 
//intermediul onclick atasat elementului buton un event listener care sa declanseze
//functia buttonEventHandler atunci cand se apasa pe buton.
*/

function buttonEventHandler() {
    alert("Ai apasat pe buton.");
}  
const button1 = document.getElementById("button")
button1.addEventListener("click", buttonEventHandler);


/*(https://codesandbox.io/s/77o24kxz1)
2. Adaugati un nou element de tip text input. Specificati o noua functie textInputEventHandler.
care afiseaza o alta alerta cu textul ("Textul din input a fost schimbat"). Specificati
un event listener care sa corespunda actiunii descrise in textul afisat de alerta.
*/
const bodyEx = document.querySelector("body");
const createForm = document.createElement("form");
bodyEx.appendChild(createForm);
console.log(createForm);

const createInput = document.createElement("input");
createInput.setAttribute("id", "inputtext");
createInput.setAttribute("type", "text");
createInput.setAttribute("value", "Enter your full name");
createForm.appendChild(createInput);
console.log(createInput);

function textInputEventHandler() {
    alert("Textul din input a fost schimbat.")
};
inputtext.addEventListener("change", textInputEventHandler);
//OBS.: Se poate utiliza si event-ul "oninput", diferenta dintre cele 2 se gaseste la URL-ul: https://www.w3schools.com/jsref/event_oninput.asp .


/*(https://codesandbox.io/s/77o24kxz1)
3. Adaugati un nou element de tip paragraf care sa contina textul "Sunt un cameleon.".
Definiti o noua functie cameleonEventHandler care schimba random culoarea paragrafului
atunci cand user-ul apasa orice tasta.
Hint: folositi addEventListener
*/

const paragraph = document.createElement("p");
paragraph.setAttribute("id", "paragraph");
bodyEx.appendChild(paragraph);
paragraph.textContent = "Sunt un cameleon.";
console.log(paragraph);

const p = document.getElementById("paragraph");
function cameleonEventHandler() {
    document.getElementById("paragraph").style.color = randomColors();
};
cameleonEventHandler();
function randomColors() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
};
window.addEventListener("keypress", cameleonEventHandler);