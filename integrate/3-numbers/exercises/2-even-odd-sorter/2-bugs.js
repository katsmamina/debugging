'use strict';

/* look out for:

  - variable declarations
  - conditional checks
  - break vs. continue +
  - incorrect casting to Number

*/

let userNumber = NaN; // const changed to let
while (Number.isNaN(userNumber)) {
  const userInput = prompt('enter a number');

  if (userInput === '' || userInput === null) { // 'and' changed to 'or'
    alert('enter something!');
    continue; // changed break to continue
  }

  userNumber = Number(userInput); // changed NaN to Number

  if (Number.isNaN(userNumber)) {
    alert('"', userInput, '" is not a number');
  }
}

if (userNumber % 2 === 0) {
  alert(userNumber + ' is even');
} else {
  alert(userNumber + ' is odd');
}
