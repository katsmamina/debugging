'use strict';

/*
  environment: Firefox;

  name: Uncaught TypeError
  message: max is not iterable

  callstack: <anonymous> about:blank line 56 > injectedScript line 2 > eval:20
    <anonymous> about:blank line 56 > injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:33
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:462
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:289
blank line 56 > injectedScript line 2 > eval:20:20


  life cycle: execution;

  the mistake: a number is not iterable

  the fix(es): changed number to string : '12'
*/

const max = '12';

for (const step of max) {
  console.log(step);
}
