'use strict';

/*
  environment: Firefox

  name: Uncaught SyntaxError
  message: unexpected token: string literal

  callstack: <anonymous> about:blank line 56 > injectedScript:2
    onload http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:56
    studyWithEval http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/static/study-with.js:33
    studyWith http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:462
    initJsUi http://localhost:4002/own_static_resources_lenses/study/static/types/javascript/javascript-class.js:289

  life cycle: creation;

  the mistake: problem with quotation marks

  the fix(es): change two quotation marks to double quotation 
*/

const quotesInQuotes = 'remind yourself "i can do this!" at least once a day';
