#!/usr/bin/env checkio --domain=js check super-root
// https://js.checkio.org/mission/super-root/

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