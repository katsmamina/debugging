'use strict';

'use strict';

alert ('Remembery, the game of remembering.\n\n' +
  'You will be prompted to enter 3 phrases.\n' +
  'next you will be prompted to remember one of them\n\n' +
  'if you enter it exactly, you win!')

// input secret phrases 

let input1 = prompt;
let input2 = prompt;
let input3 = prompt;

if (input1 !== null && input1 !== '') {
  input1 = prompt('enter the first secret phrase')
}
if (input2 !== null && input2 !== '') {
  input2 = prompt('enter the second secret phrase')
}
if (input3 !== null && input3 !== '') {
  input3 = prompt('enter the third secret phrase')
}

alert('all saved! get ready to remember');

// generate a random number: 1, 2 or 3 and coordinate the random number with the options
const random1to3 = Math.ceil(Math.random() * 3);

let phraseGuess = '';
if (random1to3 === 1) {
  phraseGuess = input1;
}
else if (random1to3 === 2) {
  phraseGuess = input2;
}
else if (random1to3 === 3) {
  phraseGuess = input3;
}

const userGuess = prompt ('Input the phrase ' + random1to3);

// prompt('Enter the secret phrase number ' + random1to3);
let result
const userCorrect = userGuess == phraseGuess

? result = 'Correct! the phrase was ' + userGuess
: result = 'Nope'

alert (result)
