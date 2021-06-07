'use strict';

let userInput = '';
while (true) {
  userInput = prompt('tell me something about frogs');
  
  /* -- BEGIN: validate input -- */
  if (userInput === '' || userInput === null) {
    alert ('this is not something');
    continue;
  }

  if (/frog/i.test(userInput) === false) {
    alert ('this is not about frogs');
    continue;
  }

  break;
  /* -- END: validate input -- */
}

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);
