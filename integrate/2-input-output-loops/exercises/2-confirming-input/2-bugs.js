'use strict';

/* look out for:

  - look condition
  - conditional checks
  - which interaction functions are used

*/

let userInput = '';
let userConfirmed = false;
while (!userConfirmed) { // changed === to !==
  userInput = prompt('enter your name:');
  console.log('userInput:', typeof userInput, userInput);

  if (userInput === null || userInput === '') { // changed condition
    alert('nothing is not a name');
    continue;
  }

  const confirmMessage = confirm ('is this correct?\n"' + userInput + '"'); // added type confirm
  // userConfirmed = confirm(confirmMessage);

  if (confirmMessage === true) {
    userConfirmed === true;
    break; // added condition and break
  }
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
