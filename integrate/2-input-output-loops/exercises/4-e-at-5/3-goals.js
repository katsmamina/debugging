'use strict';

let validInput = '';
let isNotValid = true;
while (isNotValid) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');
  /* -- BEGIN: validate input -- */
  if (userInput === null || userInput === '') {
    alert ('this is nothing');
  }

  else if (userInput.length < 5) {
    alert ('too short!')
  }

  else if (userInput[4] !== 'e' && userInput[4] !== 'E') {
    alert ('input has no "e" or "E" as the 5th character')
  }

  else {
  validInput = userInput;
  isNotValid = false;
  /* -- END: validate input -- */
}
}

alert('done: "' + validInput + '"');
