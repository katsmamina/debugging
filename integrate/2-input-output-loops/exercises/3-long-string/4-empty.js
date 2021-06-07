'use strict';

let userInput = '';
let longEnough = false

while (!longEnough) {
userInput = prompt ('enter something longer than 5 characters'); // important!!!  to put it INSIDE the loop
if (userInput === null || userInput === '') {
alert ('this is nothing');
// continue;
}

else if (userInput.length <= 5) {
 alert ('too short!');
 // continue
}

else {
  longEnough = true;
}
}

alert ('your input is ' + userInput.length + ' characters long')
