'use strict';

/* for character of String

  iterating through each character in a string is so common
  that there's special syntax to make it easier

*/

let userInput = '';
let userConfirmed = false;
while (!userConfirmed) {
  userInput = prompt('enter a word to filter:');

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    // continue;
  }

  const whiteSpaceRegex = new RegExp('\\s', 'g'); //   https://javascript.ru/REGexp . \s – whitespace. DO NOT FULLY UNDERSTAND! WHY 'g'??
  if (whiteSpaceRegex.test(userInput)) { // need to remember TEST 
    alert("words can't have white space");
    continue;
  }

  const confirmMessage =
    'do you want to filter this word?\n\n' + '- "' + userInput + '"';
   userConfirmed = confirm(confirmMessage);
}

const removeVowels = confirm(`what would you like to remove from "${userInput}"?
- ok: vowels
- cancel: consonants
`);

const toRemove = removeVowels ? 'aeiou' : 'bcdfghjklmnpqrstvwxyz'; // ternary operator, another way of writing condition

let filteredInput = '';
for (const character of userInput) {
  const lowerCaseCharacter = character.toLowerCase();
  if (toRemove.includes(lowerCaseCharacter)) {
    filteredInput = userInput;
  }
}

const finalMessage = `"${userInput}" -> "${filteredInput}"`; // ${} – for 
alert(finalMessage);
