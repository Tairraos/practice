#!/usr/bin/env checkio --domain=js check repeating-decimals
// https://js.checkio.org/mission/repeating-decimals/

"use strict";

function convert(numerator, denominator) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    // These "asserts" are used for self-checking and not for an auto-testing

    assert.equal(convert(1, 3), "0.(3)")
    assert.equal(convert(5, 3), "1.(6)")
    assert.equal(convert(3, 8), "0.375")
    assert.equal(convert(7, 11), "0.(63)")
    assert.equal(convert(29, 12), "2.41(6)")
    assert.equal(convert(11, 7), "1.(571428)")
    assert.equal(convert(0, 117), "0.")
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}