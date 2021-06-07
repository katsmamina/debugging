'use strict';

let userInput = '';
let isValidName = false;

while (!isValidName) {
  /* -- BEGIN: validate input -- */
  userInput = prompt ('enter your name');
  if (userInput === null || userInput === '') { 
    alert ('this is not a name. try again');
    continue;
  }

  else { 
    let userConfirm;
    userConfirm = confirm ('is ' + userInput + ' your name?');
    if (userConfirm === false) {
      continue;
    }
    else {
      userConfirm === true;
      break
    }
  }
  /* -- END: validate input -- */
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
