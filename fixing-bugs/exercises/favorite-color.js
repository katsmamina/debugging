'use strict';

/* favorite color

  a user must input something
  - given they cancel, the loop continues
  - given they input an empty string, the loop continues
  - all other input is allowed

  test cases:
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

<<<<<<< HEAD
  the bug: input shouldn't be neither empty nor null. The alert message should include the message part
=======
  --- experiments ---

  1. FAILING:
    TRY:
    PREDICT:
    IT DID:
    EXPLAIN:

  --- lessons learned ---

>>>>>>> c6ce0595ea3492d7c8575a87488949f447b1e139

  your fix: 
  - line 26: input !== null, input.length !== 0
  - line 28; message = message + input + '"'
*/

let message = 'you entered "';

while (true) {
  const input = prompt('enter something');

  if (input !== null && input.length !== 0) { //fix
    message = message + input + '"'; // fix
    break;
  }
}

alert(message);
