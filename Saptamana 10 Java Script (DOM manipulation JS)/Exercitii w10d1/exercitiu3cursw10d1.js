//(https://codesandbox.io/s/yw12xkp01j)

//1
//adaugati un tag script si adaugati urmatoarele functii
// sqrNum, halfNum, percentNum si areaCircle

const sqrNum = function (num) {
    return Math.sqrt(num)
};

const halfNum = function (num) {
    return num / 2
};

const percentNum = function (num1, num2) {
    num1 = num1 / 100
    return num1 * num2
};

const areaCircle = function (radius) {
    return Math.PI * Math.pow(radius, 2);
};

//2 pentru fiecare button aveeti de adaugat un event listner
// care atunci cand este clickuit sa gaseasca valoarea inputului
// si sa afiseze rezultatul solutiei

const sqrNumInput = document.getElementById('squareNum');
const halfNumInput = document.getElementById('halfNum');
const percentNum1Input = document.getElementById('percentNum1');
const num2Input = document.getElementById('num2');
const areaCircleInput = document.getElementById('areaCircle');

console.log(sqrNumInput);
console.log(halfNumInput);
console.log(percentNum1Input);
console.log(num2Input);
console.log(areaCircleInput);

//functionalitate buton sqrNumBtn:
const sqrNumBtn = () => {
    const sqrNumInput = document.getElementById("squareNum");
    const sqrNumInputValue = sqrNumInput.value;
    console.log(sqrNumInputValue);
    /*const displaySqr = document.getElementById("displaySqr");  //se poate afisa rezultatul fie in div-ul special creat sau cum am ales prin alerta 
    console.log(displaySqr);
    displaySqr.innerHTML = `${sqrNum(sqrNumInputValue)}`*/
    alert(sqrNum(sqrNumInputValue));
};
//sqrNumBtn();
const buttonSqrNum = document.getElementById("sqrNumButton");
buttonSqrNum.addEventListener("click", sqrNumBtn);


//functionalitate buton halfNumBtn:
const halfNumBtn = () => {
    const halfNumInput = document.getElementById("halfNum");
    const halfNumInputValue = halfNumInput.value;
    console.log(halfNumInputValue);
    /*const displayHalf = document.getElementById("displayHalf");  //se poate afisa rezultatul fie in div-ul special creat sau cum am ales prin alerta 
    console.log(displayHalf);
    displayHalf.innerHTML = `${halfNum(halfNumInputValue)}`*/
    alert(halfNum(halfNumInputValue));
};
//halfNumBtn();
const buttonHalfNum = document.getElementById("halfNumButton");
buttonHalfNum.addEventListener('click', halfNumBtn);


//functionalitate buton percentNumButton:
const percentNumBtn = () => {
    const percentNum1Input = document.getElementById("percentNum1");
    const num2Input = document.getElementById("num2");
    const percentNum1InputValue = percentNum1Input.value;
    const num2InputValue = num2Input.value;
    console.log(percentNum1InputValue);
    console.log(num2InputValue);
    /*const displayPercNum = document.getElementById("displayPercNum");  //se poate afisa rezultatul fie in div-ul special creat sau cum am ales prin alerta 
    console.log(displayPercNum);
    displayPercNum.innerHTML = `${percentNum(percentNum1InputValue, num2InputValue)}`*/
    alert(percentNum(percentNum1InputValue, num2InputValue));
};
//percentNumBtn();
const buttonPercentNum = document.getElementById("percentNumButton");
buttonPercentNum.addEventListener('click', percentNumBtn);


//functionalitate buton areaCircleButton:
const areaCircleBtn = () => {
    const areaCircleInput = document.getElementById("areaCircle");
    const areaCircleInputValue = areaCircleInput.value;
    console.log(areaCircleInputValue);
    /*const displayAreaCircle = document.getElementById("displayAreaCircle");  //se poate afisa rezultatul fie in div-ul special creat sau cum am ales prin alerta 
    console.log(displayAreaCircle);
    displayAreaCircle.innerHTML = `${areaCircle(areaCircleInputValue)}`*/
    alert(areaCircle(areaCircleInputValue));
};
//areaCircleBtn();
const buttonAreaCircle = document.getElementById("areaCircleButton");
buttonAreaCircle.addEventListener('click', areaCircleBtn);


//3
// Bonus: faceti sa functioneze si la key press pe langa click

//functionalitate buton sqrNumBtn:
function addMultipleEventsSqrNum(eventsArray, targetElem, handler) {
    eventsArray.map(function (event) {
        targetElem.addEventListener(event, handler, false);
    }
    );
}
addMultipleEventsSqrNum(["click", "keypress"], buttonSqrNum, sqrNumBtn);


//functionalitate buton halfNumBtn:
function addMultipleEventsHalfNum(eventsArray, targetElem, handler) {
    eventsArray.map(function (event) {
        targetElem.addEventListener(event, handler, false);
    }
    );
}
addMultipleEventsHalfNum(["click", "keypress"], buttonHalfNum, halfNumBtn);


//functionalitate buton percentNumButton:
function addMultipleEventsPercNum(eventsArray, targetElem, handler) {
    eventsArray.map(function (event) {
        targetElem.addEventListener(event, handler, false);
    }
    );
}
addMultipleEventsPercNum(["click", "keypress"], buttonPercentNum, percentNumBtn);


//functionalitate buton areaCircleButton:
function addMultipleEventsAreaCircle(eventsArray, targetElem, handler) {
    eventsArray.map(function (event) {
        targetElem.addEventListener(event, handler, false);
    }
    );
}
addMultipleEventsAreaCircle(["click", "keypress"], buttonAreaCircle, areaCircleBtn);