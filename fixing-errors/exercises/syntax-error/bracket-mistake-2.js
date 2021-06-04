'use strict';


/*
  environment: Firefox

  name: Uncaught SyntaxError
  message: expected expression, got '}'

  callstack: <anonymous> about:blank line 56 > injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56

  life cycle: creation;

  the mistake: extra curly bracket

  the fix(es): remove closing curly bracket from the line 20
*/


for (let i = 0; i < 5; i++) {
console.log(i);
}
