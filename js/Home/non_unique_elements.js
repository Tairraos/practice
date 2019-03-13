#!/usr/bin/env checkio --domain=js check non-unique-elements
// https://js.checkio.org/mission/non-unique-elements/

"use strict";

function nonUniqueElements(data) {
    // locate same value from left to right and right to left
    // -> if they are at different place, means the value is more than once
    return data.filter((d) => data.indexOf(d) !== data.lastIndexOf(d));
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
