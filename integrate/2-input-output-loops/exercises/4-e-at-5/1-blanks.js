'use strict';

let validInput = '';
while (true) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');
  console.log('userInput:', typeof userInput, userInput);

  // make sure the user entered something
  if (userInput === null || userInput === '') {
    alert ('that is nothing');
     continue; // IMPORTANT!!! should be INSIDE the result... 
  }

  // make sure it is long enough to have an "e" in the 5th letter
  if (userInput.length <5) {
    alert ('too short');
    continue; // INSIDE THE RESULT like a break
  }

  // check if the 5th character is an "e" or "E"
  if (userInput[4] ==='e' || userInput[4] === 'E') {
    validInput = userInput;
    break;
  }

  alert('input has no "e" or "E" as the 5th character');
}

alert('done: "' + validInput + '"');
