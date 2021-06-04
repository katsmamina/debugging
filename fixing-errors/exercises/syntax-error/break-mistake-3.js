'use strict';

/*
  environment: Firefox

  name: Uncaught SyntaxError
  message: return not in function

  callstack: <anonymous> about:blank line 56 > injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:33
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:462
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:289

  life cycle: creation

  the mistake: the execution must be stopped once the condition changed

  the fix(es): change return to break
*/

let iterations = 0;

while (true) {
  iterations += 1;

if (iterations > 8) {
    break;
  }
}
console.log(iterations);
