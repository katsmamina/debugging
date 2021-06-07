'use strict';

/* look out for

  - comparison vs. assignment
  - off-by-one character index
  - reversing boolean flag

*/

let validInput = '';
let isValid = false;
while (!isValid) {
  
  let userInput = prompt('enter anything with "e" or "E" as the 5th letter');

  if (userInput === null || userInput === '') { // removed extra scopes, changed = to === (comparison vs. assignment)
    alert('that is nothing');
  } 
  
  else if (userInput.length < 5) { // changed > to <
    alert('too short');
  } 
  
  else if (userInput[4] !== 'e' && userInput[4] !== 'E') { // changed 5 to 4, changed === to !==
    alert('input has no "e" or "E" as the 5th character');
    // changed to reversed boolean value
  
  } else {
    validInput = userInput; // WHY DO WE NEED TO DO THIS
    isValid = true
  }
}

alert('done: "' + validInput + '"'); // WHY CAN'T WE JUST USE USERINPUT, the console drops a mistake
