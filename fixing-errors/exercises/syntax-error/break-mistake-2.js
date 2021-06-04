'use strict';


/*
  environment: Firefox

  name: Uncaught SyntaxError
  message: label not found

  callstack: <anonymous> about:blank line 56 > injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:33
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:462
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:289

  life cycle: creation

  the mistake: there is neither a condition nor a loop for a break 

  the fix(es): 'break' should be deleted
*/


const add = (x = 0, y = 0) => {
x + y;
};

const seven = add(3, 4);
