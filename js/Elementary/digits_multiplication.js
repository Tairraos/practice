#!/usr/bin/env checkio --domain=js check digits-multiplication
// https://js.checkio.org/mission/digits-multiplication/

"use strict";

function digitsMultip(data) {
    // "1" concat number to transfer number to string
    // -> remove all 0
    // -> split to array with single digital
    // -> calculate product, the "*" will auto transfer string to number
    return ("1" + data).replace(/0/g, "").split("").reduce((a, b) => a * b);
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(digitsMultip(123405), 120, "1st");
    assert.equal(digitsMultip(999), 729, "2nd");
    assert.equal(digitsMultip(1000), 1, "3rd");
    assert.equal(digitsMultip(1111), 1, "4th");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}