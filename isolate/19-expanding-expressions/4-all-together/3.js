'use strict';

// refactor this function so there's one operation per step
//  re-run the tests every time you make a change (even a tiny change!)
//  practice using tests to pace your development

/**
 * the worlds greatest mystery, will anyone ever know ?!
 * @param {any} a
 * @returns {boolean}
 */
const mystery = (a) => {
  return !!+a == Boolean(Number(a));
};


const _1_expect = true;
const _1_actual = mystery('23');
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_expect = true;
const _2_actual = mystery('fdsa');
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_expect = true;
const _3_actual = mystery(23);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_expect = true;
const _4_actual = mystery(NaN);
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_expect = true;
const _5_actual = mystery(null);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_expect = true;
const _6_actual = mystery(undefined);
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');
