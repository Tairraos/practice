#!/usr/bin/env checkio --domain=js run super-root

// https://js.checkio.org/mission/super-root/

// Square roots, cube roots, 4th roots... each one of them is too boring for Nicola.    He needs to find the super root! With your help he'll almost certainly achieve this goal.
// 
// The super root of a numberNis the numberx,    such thatxx=N.
// 
// The result should be accurate, so thatxx≈ N±0.001,    orN - 0.001 < xx< N + 0.001.
// 
// Input:A number (N) as an integer.
// 
// Output:The super root (x) as a float or an integer.
// 
// Precondition:
// 1 ≤ number ≤ 10 ** 10
// 
// 
// END_DESC

"use strict";

function superRoot(number) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(superRoot(4))

    // These "asserts" using only for self-checking and not necessary for auto-testing
    function checkResult(func, number) {
        var result = func(number);
        var p = result ** result;
        if (number - 0.001 < p && p < number + 0.001) {
            return true
        } else {
            return false
               }
        };

    var firstTest = checkResult(superRoot, 4);
    var secondTest = checkResult(superRoot, 9);
    var thirdTest = checkResult(superRoot, 81);

    assert.equal(firstTest, true);
    assert.equal(secondTest, true);
    assert.equal(thirdTest, true);
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}