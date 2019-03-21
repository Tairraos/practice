#!/usr/bin/env checkio --domain=js check box-probability
// https://js.checkio.org/mission/box-probability/

"use strict";
function boxProbability(marbles, step) {
    return 0.5
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(boxProbability('bbw', 3), 0.48, "First");
    assert.equal(boxProbability('wwb', 3), 0.52, "Second");
    assert.equal(boxProbability('www', 3), 0.56, "Third");
    assert.equal(boxProbability('bbbb', 1), 0, "Fifth");
    assert.equal(boxProbability('wwbb', 4), 0.5, "Sixth");
    assert.equal(boxProbability('bwbwbwb', 5), 0.48, "Seventh");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}