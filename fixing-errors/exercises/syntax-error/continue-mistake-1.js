'use strict';

/*
  environment: Firefox

  name: Uncaught SyntaxError:
  message: continue must be inside loop

  callstack: trace http://localhost:4002/shared_static_resources/trace/index.js:66
    onload http://localhost:4002/shared_static_resources/trace/index.js:128
    trace http://localhost:4002/shared_static_resources/trace/index.js:15
    connectedCallback http://localhost:4002/shared_static_resources/trace/trace-init.js:91

  life cycle: creation

  the mistake: there is no loop 

  the fix(es): remove break;
*/

const userName = 'wingdoz';

if (userName.length > 3) {
  console.log(userName);
}
