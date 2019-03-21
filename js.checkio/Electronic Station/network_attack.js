#!/usr/bin/env checkio --domain=js check network-attack
// https://js.checkio.org/mission/network-attack/

"use strict";

function capture(data) {
    return 0;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(capture([[0, 1, 0, 1, 0, 1],
	                      [1, 8, 1, 0, 0, 0],
	                      [0, 1, 2, 0, 0, 1],
	                      [1, 0, 0, 1, 1, 0],
	                      [0, 0, 0, 1, 3, 1],
	                      [1, 0, 1, 0, 1, 2]]), 8, "Base example");
    assert.equal(capture([[0, 1, 0, 1, 0, 1],
	                      [1, 1, 1, 0, 0, 0],
	                      [0, 1, 2, 0, 0, 1],
	                      [1, 0, 0, 1, 1, 0],
	                      [0, 0, 0, 1, 3, 1],
	                      [1, 0, 1, 0, 1, 2]]), 4, "Low security");
    assert.equal(capture([[0, 1, 1],
                          [1, 9, 1],
                          [1, 1, 9]]), 9, "Small");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}