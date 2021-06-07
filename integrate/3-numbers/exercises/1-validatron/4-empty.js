'use strict';

const enterANumber = prompt ('enter a number');
const aNumber = Number(enterANumber);

const isANumber = !Number.isNaN(aNumber);
const thinksIsANumber = confirm ('did you enter a number?\n ' + 'yes -> ok\n ' + 'no -> close');

const isReallyANumber = thinksIsANumber === isANumber;

isReallyANumber ? alert ('correct') : alert('nope')
