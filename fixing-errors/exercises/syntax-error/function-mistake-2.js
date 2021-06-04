'use strict';

/*
  environment: Firefox

  name: Uncaught SyntaxError
  message: invalid arrow-function arguments (parentheses around the arrow-function may help)

  callstack: <anonymous> about:blank line 56 > injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:33
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:462
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:289

  life cycle: creation

  the mistake: no brackets added for the const determination

  the fix(es): add brackets
*/

const add = (x = 0, y = 0) => {
  return x + y;
};

const seven = add(3, 4);

console.log(seven)
