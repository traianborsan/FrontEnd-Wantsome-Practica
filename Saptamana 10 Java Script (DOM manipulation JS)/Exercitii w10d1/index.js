/* 
//1. Creati o pagina HTML care sa includa un buton; Intr-un fisier index.js separat 
//definiti o functie buttonEventHandler al carei cod sa porneasca o fereastra
//de tip alerta in care se va afisa textul "Ai apasat pe buton.". Specificati prin 
//intermediul onclick atasat elementului buton un event listener care sa declanseze
//functia buttonEventHandler atunci cand se apasa pe buton.
*/

function buttonEventHandler() {
    
}  
const button1 = document.getElementById("button")
button.addEventListener("click", buttonEventHandler);

/*
2. Adaugati un nou element de tip text input. Specificati o noua functie textInputEventHandler.
care afiseaza o alta alerta cu textul ("Textul din input a fost schimbat"). Specificati
un event listener care sa corespunda actiunii descrise in textul afisat de alerta.
*/
const evenHandlerBtn = () => {
const firstInput = document.getElementById("name").value; //name
const secondInput = document.getElementById("adjective").value; //adjective
const thirdInput = document.getElementById("random word").value; //random word

const story = document.getElementById("story");
// console.log(story);//node-ul cu story
//story.innerText = "text value"

story.innerHTML = `${firstInput}${secondInput}${thirdInput}`



}

// console.log(firstInput);
// console.log(secondInput);
// console.log(thirdInput);


/*
3. Adaugati un nou element de tip paragraf care sa contina textul "Sunt un cameleon.".
Definiti o noua functie cameleonEventHandler care schimba random culoarea paragrafului
atunci cand user-ul apasa orice tasta.
Hint: folositi addEventListener
*/