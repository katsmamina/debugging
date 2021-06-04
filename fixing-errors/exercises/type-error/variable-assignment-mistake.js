'use strict';

/*
  environment: Firefox

  name: Uncaught SyntaxError
  message: invalid assignment left-hand side

  callstack: <anonymous> about:blank line 56 > injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56

  life cycle: creation

  the mistake: a variable should be assigned to a (boolean) value, but a boolean value cannot be assigned to a variable

  the fix(es): change places for isHappy and true
*/

let isHappy = false;
isHappy = true;
