let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');
}

const dontRemoveLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character'
);

let newPhrase = '';
if (!dontRemoveLetters) {
  let index = 0;
  while (index < phrase.length) {
    const char = phrase[index];
    newPhrase = newPrase + char + char;
    index = index + 1;
  }
} else {
  const theAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let index = 0;
  while (index < phrase.length) {
    const letter = phrase[index];
    if (theAlphabet.includes(letter.toLowerCase())) {
      newPhrase = newPhrase + letter;
    }
    index = index + 1;
  }
}

alert(newPhrase);
