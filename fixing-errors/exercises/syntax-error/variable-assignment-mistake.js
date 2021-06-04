'use strict';

/*
  environment: Firefox

  name: Uncaught SyntaxError
  message: invalid assignment left-hand side

  callstack: <anonymous> about:blank line 56 > injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:33
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:462
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:289

  life cycle: creation

  the mistake: variable should be assigned to value, not the other way round

  the fix(es): change 3 = favoriteNumber to favoriteNumber = 3;
*/

let favoriteNumber = 4;
favoriteNumber = 3;

console.log(favoriteNumber)
