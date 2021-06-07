'use strict';

// let userInput = ''
let validInput = '';
let isInput = false;

while (!isInput) { // shouldn't be false !!! 
let userInput = prompt('enter anything with "e" or "E" as the 5th letter');

 if (userInput === null || userInput === '') {
   alert('this is nothing');
 }

 else if (userInput.length<5) {
   alert ('too short');
 }

 else if (userInput[4] !== 'e' && userInput[4] !== 'E') {
   alert ('input has no "e" or "E" as the 5th character')
 }

 else {
   validInput = userInput;
   isInput = true;
 }
}

alert ('done: "' + validInput + '"')