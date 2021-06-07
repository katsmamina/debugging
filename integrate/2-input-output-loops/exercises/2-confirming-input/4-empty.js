'use strict';

let nameInput = '';
while (true) {
  nameInput = prompt ('what is your name?');
  if (nameInput === '' || nameInput === null) {
    alert ('this is not a name');
    continue;
  }

let nameConfirm = confirm ('is ' + nameInput + ' your name?')
if (nameConfirm === false) {
  continue
}
else {
  break
}
}
alert ('your name is ' + nameInput)