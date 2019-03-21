#!/usr/bin/env checkio --domain=js check determinant
// https://js.checkio.org/mission/determinant/

"use strict";

function determinant(data) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(determinant([[4, 3], [6, 3]]), -6)

    assert.equal(determinant([[1, 3, 2],
                              [1, 1, 4],
                              [2, 2, 1]]), 14)
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}