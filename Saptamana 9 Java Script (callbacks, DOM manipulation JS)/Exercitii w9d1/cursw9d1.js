// 1
/*
Write a function that accepts 3 params(1 - array, 2 - function, 3 - function). 
- first param defines an array of items: ex: an array of rooms:  ['bedroom', 'bathroom', 'lounge']
- second param defines an action that has to be executed for each item - ex: I want to clean the house, I want to display in console 'I cleaned x', 'I cleaned y', 'I cleaned z', for each room
- third param defines an action that has to be executed at the end, when I finished doing the action for each item - ex: I want to print 'yey, now I can drink and play games!'
*/

//ES 5 syntax
const firstFn = value => console.log(value);
const secondFn = () => console.log("'yey, now I can drink and play games!'")
const threeParamsFN = (arrayToIterate, firstAction, secondAction) => {
    for (let i = 0; i < arrayToIterate.length; i++){
        const toDisplay = `I cleaned ${arrayToIterate[i]} `;
        firstAction(toDisplay)
    }
    secondAction();
};
threeParamsFN(["bedroom", "bathroom", "lounge"], firstFn, secondFn);

// Now translate the upper function to ES6 syntax

// 2

function customMap(array, callback) {
	var arr = [];
	for(var index in array){
		arr.push(callback(array[index]));
	}
	return arr;
}

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//REZOLVARE prima cerinta:
const increment = a => ++a;
const newArray = customMap(randomArray, increment);
console.log(newArray);
console.log(customMap(randomArray, increment));
// Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console

//REZOLVARE a doua cerinta:
const double = b => b*2;
const newArray1 = customMap(randomArray,double);
console.log(newArray1);
console.log(customMap(randomArray, double));
// Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]

//REZOLVARE a treia cerinta:
const square = c => Math.pow(c,2);

console.log(myMap(randomArray, square));
// Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

// Now translate the upper function to ES6 syntax


// 3

/*
// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.
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

Call the filter function in 5 different cases ( 5 different filtering functions - example: filters the odd items, filter the items which are divisible by 3, etc... )

Now translate the upper function to ES6 syntax
*/

// 4 

/*
Write a function named multipleCallbacks that accepts 3 arguments:
	- an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error

The function should be written directly into ES6 specific syntax
*/

// 5
/*
-- FAKE DATA FETCHER --

const simulateServerCall = (url, params) {
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
  });
};

const fetchDataFor = userId => {
  simulateServerCall('https://server.com/employee', { userId: userId });
};

Adjust the upper functions so that a callback that filters the employees if they have a developer role
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