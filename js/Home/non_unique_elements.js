#!/usr/bin/env checkio --domain=js run non-unique-elements
// https://js.checkio.org/mission/non-unique-elements/

"use strict";

function nonUniqueElements(data) {
    //分别从两端查找同一个值，找到的位置不同说明该值不只有一个
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
