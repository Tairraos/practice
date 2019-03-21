#!/usr/bin/env checkio --domain=js check fractions-addition
// https://js.checkio.org/mission/fractions-addition/

"use strict";

function addFractions(fracts) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(addFractions([[2, 3], [2, 3]]))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(addFractions([[2, 3], [2, 3]]), "1 and 1/3")
    assert.equal(addFractions([[1, 3], [1, 3]]), "2/3")
    assert.equal(addFractions([[1, 3], [1, 3], [1, 3]]), 1)
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}