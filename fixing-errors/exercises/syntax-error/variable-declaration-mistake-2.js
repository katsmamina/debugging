'use strict';

/*
  environment: Firefox

  name: Uncaught SyntaxError:
  message: missing = in const declaration

  callstack: <anonymous> about:blank line 56 > injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:33
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:462
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:289


  life cycle: creation

  the mistake: const can be only assigned to one value and cannot be changed

  the fix(es): change const to var
*/

const userName = 'qopiznu';

let path;

if (userName.length > 4) {
  path = 'if';
} else {
  path = 'else';
}

console.log(path);
