#!/usr/bin/env checkio --domain=js check hamming-distance
// https://js.checkio.org/mission/hamming-distance/

"use strict";

function hammingDistance(n, m){
    return 0
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(hammingDistance(117, 17), 3, "First example");
    assert.equal(hammingDistance(1, 2), 2, "Second example");
    assert.equal(hammingDistance(16, 15), 5, "Third example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}