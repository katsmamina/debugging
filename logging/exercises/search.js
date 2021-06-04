let phrase = '';

let userConfirmedPhrase = false;
while (!userConfirmedPhrase) {
  phrase = prompt('enter a phrase to search');
  if (phrase === null) {
    continue;
  }
console.log(phrase);

  userConfirmedPhrase = confirm('is this correct: "' + phrase + '"');
}

const caseSensitive = confirm('do you want a case-sensitive search?');

let query = '';

let userConfirmedQuery = false;
while (!userConfirmedQuery) {
  query = prompt(
    'enter a search query, this program will check if it exists in your phrase'
  );
  if (query === null) {
    continue;
  }
  userConfirmedQuery = confirm('is this correct: "' + query + '"');
  console.log(userConfirmedQuery);
}

let phraseIncludesQuery = false;
if (caseSensitive) {
  phraseIncludesQuery = phrase.includes(query);
  console.log(phraseIncludesQuery);
} else {
  let lowerCasePhrase = phrase.toLowerCase();
  let lowerCaseQuery = query.toLowerCase();
  phraseIncludesQuery = lowerCasePhrase.includes(lowerCaseQuery);
  // console.log(phraseIncludesQuery);
}

let doesOrNot = '';
if (phraseIncludesQuery) {
  doesOrNot = 'does';
  console.log(doesOrNot);
} else {
  doesOrNot = 'does not';
  console.log(doesOrNot);
}

alert(
  '"' +
    phrase +
    '" ' +
    doesOrNot +
    ' include "' +
    query +
    '"\n\n' +
    'case sensitive: ' +
    caseSensitive
);
