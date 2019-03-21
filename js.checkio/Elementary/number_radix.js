#!/usr/bin/env checkio --domain=js check number-radix
// https://js.checkio.org/mission/number-radix/

"use strict";

function numberRadix(n, r) {
    // use parseInt to decode radix number
    // use a regexp to test legal letter
    return parseInt(RegExp(`[${"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(r)}]`).test(n) ? -1 : n, r);
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(numberRadix("AF", 16), 175, "Hex");
    assert.equal(numberRadix("101", 2), 5, "Bin");
    assert.equal(numberRadix("101", 5), 26, "5 base");
    assert.equal(numberRadix("Z", 36), 35, "Z base");
    assert.equal(numberRadix("AB", 10), -1, "B > A > 10");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
