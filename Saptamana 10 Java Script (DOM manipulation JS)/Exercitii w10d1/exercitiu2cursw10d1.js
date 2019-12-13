//(https://codesandbox.io/s/jvvz6vrpo9)

//1 Adaugati un tag script pentru a face legatura
// intre fisierul js si html - rezolvat

//2
//adaugati un event listener pentru buton care apeleaza
// o functie postTheGossip cand este apasat

//3
// In aceasta functie luati toate valorile fieldurilor
// si faceti un story din ele
// ex "Xulescu este innebunit dupa bere neagra"


const firstInput = document.getElementById('name');
const secondInput = document.getElementById('adjective');
const thirdInput = document.getElementById('random-word');

console.log(firstInput);
console.log(secondInput);
console.log(thirdInput);

const eventHandlerBtn = () => {
    const firstInputValue = firstInput.value; // name input's value
    const secondInputValue = secondInput.value; // adjective's input value
    const thirdInputValue = thirdInput.value; // random-word's input value
    const story = document.getElementById('story');
    // story.innerText = "text value"
    story.innerHTML = `${firstInputValue} este ${secondInputValue} si ii place ${thirdInputValue}`;
};

firstInput.addEventListener('keydown', () => {
    console.log('Afisez');
});

const eventHandlerPrintInput = () => {
    const valueFromInput = firstInput.value;

    alert(valueFromInput);
};

const buttonToBeHandled = document.getElementById('exButton');
buttonToBeHandled.addEventListener('click', eventHandlerBtn); // nu onclick - cele prefixate cu on sunt atribute

const buttonThatPrintsInput = document.getElementsByClassName('input-btn')[0];
console.log(buttonThatPrintsInput);
buttonThatPrintsInput.addEventListener('click', eventHandlerPrintInput);

const validate = event => {
    console.log(event);
    const firstInputValue = firstInput.value;

    if (firstInputValue === 'Ovidiu') {
        event.preventDefault();
        alert('Corect');
    } else {
        event.preventDefault();
        firstInput.style.border = '1px solid red';
    }
};

const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', validate);


