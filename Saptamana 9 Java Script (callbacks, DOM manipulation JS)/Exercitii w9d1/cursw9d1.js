// acum se printeaza in consola '1' '2' '3' '4' '5' .
// Vrem sa fie ordinea '3' '5' '2' '1' '4'
//hint setTimeout

const func1 = () => {
  setTimeout(function () {
    console.log('1');
  }, 400);
}

const func2 = () => {
  setTimeout(function () {
    console.log('2');
  }, 300);
}

const func3 = () => {
  setTimeout(function () {
    console.log('3');
  }, 100);
}

const func4 = () => {
  setTimeout(function () {
    console.log('4');
  }, 500);
}

const func5 = () => {
  setTimeout(function () {
    console.log('5');
  }, 200);
}


func1();
func2();
func3();
func4();
func5();


// 1
/*
Write a function that accepts 3 params(1 - array, 2 - function, 3 - function). 
- first param defines an array of items: ex: an array of rooms:  ['bedroom', 'bathroom', 'lounge']
- second param defines an action that has to be executed for each item - ex: I want to clean the house, I want to display in console 'I cleaned x', 'I cleaned y', 'I cleaned z', for each room
- third param defines an action that has to be executed at the end, when I finished doing the action for each item - ex: I want to print 'yey, now I can drink and play games!'
*/

//ES 5 syntax
function firstFn(value) {
  console.log(value);
};
function secondFn() {
  console.log("'yey, now I can drink and play games!'");
};
function threeParamsFN(arrayToIterate, firstAction, secondAction) {
  for (var i = 0; i < arrayToIterate.length; i++) {
    var toDisplay = `I cleaned ${arrayToIterate[i]} `;
    firstAction(toDisplay)
  }
  secondAction();
};
threeParamsFN(["bedroom", "bathroom", "lounge"], firstFn, secondFn);

// ES6 syntax:
const firstFn = value => console.log(value);
const secondFn = () => console.log("'yey, now I can drink and play games!'")
const threeParamsFN = (arrayToIterate, firstAction, secondAction) => {
  for (let i = 0; i < arrayToIterate.length; i++) {
    const toDisplay = `I cleaned ${arrayToIterate[i]} `;
    firstAction(toDisplay)
  }
  secondAction();
};
threeParamsFN(["bedroom", "bathroom", "lounge"], firstFn, secondFn);

// 2

//ES 5 syntax
function customMap(array, callback) {
  var arr = [];
  for (var index in array) {
    arr.push(callback(array[index]));
  }
  return arr;
}

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//REZOLVARE prima cerinta:
// Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console
var increment = function (a) {
  ++a;
}
var newArray = customMap(randomArray, increment);
console.log(newArray);
console.log(customMap(randomArray, increment));

//REZOLVARE a doua cerinta:
// Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
var double = function (b) {
  b * 2;
}
var newArray1 = customMap(randomArray, double);
console.log(newArray1);
console.log(customMap(randomArray, double));

//REZOLVARE a treia cerinta:
// Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]
var square = function (c) {
  Math.pow(c, 2);
}
var newArray2 = customMap(randomArray, square);
console.log(newArray2);
console.log(customMap(randomArray, square));


// Now translate the upper function to ES6 syntax
const customMap = (array, callback) => {
  const arr = [];
  for (let index in array) {
    arr.push(callback(array[index]));
  }
  return arr;
}
const randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const increment = a => ++a;
// const newArray = customMap(randomArray, increment);
// console.log(newArray);
console.log(customMap(randomArray, increment));

const double = b => b * 2;
// const newArray1 = customMap(randomArray,double);
// console.log(newArray1);
console.log(customMap(randomArray, double));

const square = c => Math.pow(c, 2);
// const newArray2 = customMap(randomArray,square);
// console.log(newArray2);
console.log(customMap(randomArray, square));



// 3
// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.

/*model de functie:
var filter = function(____, ____) {
  var filteredArray = [];
  for (var ____ = ____; ____ < ____.____; ____++) {
    var ____ = ____[____];
    if (____(____)) {
      filteredArray.push(____);
    }
  }
  return filteredArray;
};
*/

//ES 5 syntax:
var filter = function (myArray, callback) {
  var filteredArray = [];
  for (var i = 0; i < myArray.length; i++) {
    var element = myArray[i];
    if (callback(element)) {
      filteredArray.push(callback(myArray[i]));
    }
  }
  return filteredArray;
};

// Call the filter function in 5 different cases ( 5 different filtering functions - example:
//filters the odd items, filter the items which are divisible by 3, etc... )

//a. return only positive odd numbers:
var oddFn = function (num) {
  if (num >= 0 && num % 2 !== 0) {
    return num;
  }
};
filter([-15, -110, -1, 2, 5, 8, 11, 17, 20, 21], oddFn);

//b. return only positive even numbers:
var evenFn = function (num1) {
  if (num1 >= 0 && num1 % 2 === 0) {
    return num1;
  }
};
filter([-15, -110, -1, 2, 5, 8, 11, 17, 20, 21], evenFn);

//c. return all numbers that divide by 3:
var divThreeFn = function (num2) {
  if (num2 % 3 === 0) {
    return num2;
  }
};
filter([-15, -110, -1, 2, 5, 8, 11, 17, 20, 21], divThreeFn);

//d. return all negative numbers that divide by 5:
var negativeFn = function (num3) {
  if (num3 < 0 && num3 % 5 === 0) {
    return num3;
  }
};
filter([-15, -110, -1, 2, 5, 8, 11, 17, 20, 21], negativeFn);

//e. return all numbers at a certain power of 2:
var powerOfTwoFn = function (num4) {
  if (Math.log(num4) / Math.log(2) % 1 === 0) {
    return num4
  }
}
filter([-15, -110, -1, 2, 5, 8, 11, 17, 20, 21], powerOfTwoFn);


// Now translate the upper function to ES6 syntax:
const filter = (myArray, callback) => {
  const filteredArray = [];
  for (var i = 0; i < myArray.length; i++) {
    let element = myArray[i];
    let result = (callback(element)) ? filteredArray.push(callback(myArray[i])) : "";
    return result;
  }
  return filteredArray;
};

//a. return odd numbers (only positive):
const oddFn = num => {
  let result = (num >= 0 && num % 2 !== 0) ? num : 0;
  return result;
};
filter([-15, -110, -1, 2, 5, 8, 11, 17, 20, 21], oddFn);

//b. return even numbers (only positive):
const evenFn = num1 => {
  let result = (num1 >= 0 && num1 % 2 === 0) ? num1 : 0;
  return result;
};
filter([-15, -110, -1, 2, 5, 8, 11, 17, 20, 21], evenFn);

//c. return all numbers that divide by 3:
const divThreeFn = num2 => {
  let result = (num2 % 3 === 0) ? num2 : 0;
  return result;
};
filter([-15, -110, -1, 2, 5, 8, 11, 17, 20, 21], divThreeFn);

//d. return all negative numbers that divide by 5:
const negativeFn = num3 => {
  let result = (num3 < 0 && num3 % 5 === 0) ? num3 : 0;
  return result;
};
filter([-15, -110, -1, 2, 5, 8, 11, 17, 20, 21], negativeFn);

//e. return all numbers at a certain power of 2:
const powerOfTwoFn = num4 => {
  let result = (Math.log(num4) / Math.log(2) % 1 === 0) ? num4 : 0;
  return result;
}
filter([-15, -110, -1, 2, 5, 8, 11, 17, 20, 21], powerOfTwoFn);


// 4 
/*
Write a function named multipleCallbacks that accepts 3 arguments:
	- an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error
*/
//The function should be written directly into ES6 specific syntax
const firstFn = () => {
  console.log("'We need to open the champaign.'");
};
const secondFn = () => {
  console.log("'Not a big deal, you have to try again later. Take it easy bro.'");
};

const multipleCallbacks = (myObject, successAction, errorAction) => {
  let actionStatusText = "The status for the user action is: " + myObject.status + ".";
  console.log(actionStatusText);
  let result = (myObject.status === "success") ? successAction(myObject.status) : errorAction(myObject.status);
  return result;
}
multipleCallbacks({ name: "Mihai", age: 22, military_status: "done", status: "success" }, firstFn, secondFn);


// 5
// -- FAKE DATA FETCHER --
const filter = (myArray, callback) => {
  const filteredArray = [];
  for (var i = 0; i < myArray.length; i++) {
    let element = myArray[i];
    let result = (callback(element)) ? filteredArray.push(callback(myArray[i])) : "";
    return result;
  }
  return filteredArray;
};

const simulateServerCall = (url, params) => {
  console.log(`Fetching data for ${params.userId} from: `, url);
  setTimeout(() => {
    console.log('Server responded with success');
    const fakeData = {
      numberOfEmployees: 4,
      employees: [
        {
          name: 'Employee1',
          age: 33,
          title: 'Developer',
        },
        {
          name: 'Employee2',
          age: 28,
          title: 'Manager',
        },
        {
          name: 'Employee3',
          age: 32,
          title: 'Tester',
        },
        {
          name: 'Employe4',
          age: 31,
          title: 'Developer',
        },
      ]
    };
    // now what ?
    const isDeveloper = () => {
      const filteredArray = [];
      let len = fakeData.employees.length;
      for (var i = 0; i < len; i++) {
        let element = fakeData.employees[i];
        if (element.title === "Developer") {
          filteredArray.push(element)
        }
      };
      console.log(filteredArray);
    };
    filter(fakeData.employees, isDeveloper);
  });
};

const fetchDataFor = userId => {
  simulateServerCall('https://server.com/employee', { userId: userId });
};
fetchDataFor();
// console.log(fetchDataFor());
// simulateServerCall('https://server.com/employee', fetchDataFor, isDeveloper);

/*Adjust the upper functions so that a callback that filters the employees if they have a developer role
is executed within the setTimeout that simulates a request to the server; The callback should be implemented by you
and should print on the browser's console only the employees that are developers;
Requirement: reuse the filtering function that you have already implemented
*/


// 6
/*
Read about setInterval here: https://www.w3schools.com/jsref/met_win_setinterval.asp
Using setInterval, implement a function called theFinalCountdown that accepts as a parameter a numeric value and counts down until 0 every 1s.
The countdown will be displayed in the console.
Ex:
theFinalCountdown(10); call will display:

10
(...after 1s)
9
(...after 1s)
8
(...after 1s)
7
...
...
0

and then stops
*/

const theFinalCountdown = seconds => {
  if (seconds > 0) {
    let counterTicTac = setInterval(function () {
      if (seconds === 0) {
        clearInterval(counterTicTac);
        seconds = 0;
      };
      console.log(seconds)
      seconds--;
    }, 1000);
  }
};
theFinalCountdown(10);
