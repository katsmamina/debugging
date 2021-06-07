'use strict';

/* is excited

  a user can enter any input and learn if it is excited or not
  - given the user cancels, the i/o loop continues
  - given the user inputs something with an "!", their input is excited
  - given their input does not have "!", it is not excited

  test cases:
    '' -> '"" is not excited'
    'hello' -> '"hello" is not excited'
    '!' -> '"!" is excited'
    '!yo' -> '"!yo"" is excited'
    '!yo!' -> '"!yo!" is excited'

  --- experiments ---

  1. FAILING: is NOT excited with ! and is excited when there's no !
    TRY: boolean problem? no. changed 
    PREDICT: the program will work properly
    IT DID: work properly
    EXPLAIN:

  --- lessons learned ---


*/

let input = null;
while (input === null) {
  input = prompt(
    'enter some text, the program will check if it has any spaces'
  );
}

let isExcited = false;
for (const char of input) {
  if (char === '!') { // changed !== to === . as ! needs to be included 
    isExcited = true;
    break;
  }
}

if (isExcited) {
  alert('"' + input + '" is excited');
} else {
  alert('"' + input + '" is not excited');
}
