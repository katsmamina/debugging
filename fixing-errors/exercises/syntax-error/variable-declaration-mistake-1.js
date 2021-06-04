'use strict';

/*
  environment: Firefox

  name: Uncaught SyntaxError
  message: redeclaration of let tree

  callstack: <anonymous> about:blank line 56 >   injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:33
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:462
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:289 blank line 56 > injectedScript:20:4

  life cycle: creation

  the mistake: variable 'tree' is declared twice

  the fix(es): remove 'let' thus assigning the variable 'tree' to a new value
*/

let tree = 'oak';
tree = 'birch'; // error was here
