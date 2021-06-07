'use strict';

let aboutFrogs = false;
let userInput = ''

while (!aboutFrogs) {
userInput = prompt('tell me something about frogs');
if (userInput === null || userInput === '') {
  alert ('this is not something');
  continue;
}

 if (/frog/i.test(userInput) === false) {
 alert ('nope! not about frogs. try again');
 continue;
 }
 
 else (aboutFrogs = true);
}

// if userInput
alert ('i just learned something about frogs!\n\n- ' + userInput);
