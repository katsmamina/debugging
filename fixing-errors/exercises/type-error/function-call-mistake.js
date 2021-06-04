'use strict';

/*
  environment: Firefox;

  name: Uncaught TypeError
  message: addedTowNumbers is not a function

  callstack: <anonymous> about:blank line 56 > injectedScript line 2 > eval:23
    <anonymous> about:blank line 56 > injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:33
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:462
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:289

  life cycle: execution phase

  the mistake: there should be a function in line 28

  the fix(es): line 28: addedTowNumbers => addTowNumbers
*/

const addedTowNumbers = 3 + 4;

const addTowNumbers = (x = 0, y = 0) => {
  return x + y;
};
const seven = addTowNumbers(3, 4);

console.assert(seven === addedTowNumbers);
