'use strict';

/* look out for:

  - loop checks
  - conditional checks
  - variable declarations
  - assignment vs. comparison

*/

let userInput = ''; // const => let
let isLongEnough = false; // const => let
while (!isLongEnough) { //  added ! 
  userInput = prompt('enter anything longer than 5 characters');

  if (userInput === null || userInput === '') { // !== to ===
    alert('that is nothing');
  } else if (userInput.length <= 5) { // shorter or equal to 5
    alert('too short');
  } else {
    isLongEnough = true; // not === but = !!! isLongenough should not be FULLY equal to true
  }
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);
