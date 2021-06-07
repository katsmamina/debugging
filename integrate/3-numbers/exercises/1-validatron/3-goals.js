'use strict';

const userString = prompt('enter a number:');

/* -- BEGIN: check if input is a number -- */
const userNumber = Number(userString) // need to create a separate const
const inputIsANumber = !Number.isNaN(userNumber); // special const Number.isNaN, check that it's not true
/* -- END -- */

/* -- BEGIN: ask the user if they think their input is a number -- */
// const confirmMessage = '';
const userThinksItsANumber = confirm('is this a number \n' + 'yes -> ok \n' + 'no -> close');
// const inputIsANumber = userThinksItsANumber === isaNumber;
/* -- END -- */

const userIsCorrect = userThinksItsANumber === inputIsANumber;

if (userIsCorrect) {
  alert('correct!');
} else {
  alert('nope :(');
}
