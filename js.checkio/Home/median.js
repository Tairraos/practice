#!/usr/bin/env checkio --domain=js check median
// https://js.checkio.org/mission/median/

"use strict";

function median(d) {
    // sort
    // -> fetch mid item both from left & right side
    // -> calculate avg
    let a = d.sort((a, b) => a - b);
    return (a[a.length / 2 | 0] + a[a.length - (a.length / 2 | 0) - 1]) / 2;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(median([1, 2, 3, 4, 5]), 3, "1st example");
    assert.equal(median([3, 1, 2, 5, 3]), 3, "2nd example");
    assert.equal(median([1, 300, 2, 200, 1]), 2, "3rd example");
    assert.equal(median([3, 6, 20, 99, 10, 15]), 12.5, "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}