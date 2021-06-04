'use strict';

/*
  environment: Firefox

  name: 
  message: can't access property "length", userInput is null

  callstack: <anonymous> about:blank line 56 > injectedScript line 2 > eval:20
    <anonymous> about:blank line 56 > injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56

  life cycle: execution;

  the mistake: to access the userInput length, the variable shouldn't be boolean

  the fix(es): put null in ''
*/

const userInput = 'null';

console.log(userInput.length);
