'use strict';

/* longer than 4

  a user can exit the loop by canceling or entering something longer than 4 characters
  - given the user cancels, the program tells them they canceled
  - given the user input is shorter than or equal to  4 characters, the loop continues
  - given the user input is longer than 4 characters, the loop exits

  test cases:
    null -> 'you canceled'
    'abcde' -> 'abcde'
    'javascript' -> 'javascript'
    'you canceled' -> 'you canceled'

  --- experiments ---

  1. FAILING:
    TRY:
    PREDICT:
    IT DID:
    EXPLAIN:

  --- lessons learned ---


*/

let input = '';

let prompting = true;
while (prompting) {
  input = prompt( // removed let, no need to declare the same variable twice
    'enter something longer than 4 characters, or "cancel" to leave'
  );
  if (input === null) {
    prompting = false;
    input = 'you canceled';

  } else if (input.length > 4) { // added length
    prompting = false;
  }
}

alert(input);
