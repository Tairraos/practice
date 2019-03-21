#!/usr/bin/env checkio --domain=js check counting-tiles
// https://js.checkio.org/mission/counting-tiles/

"use strict";

function countingTiles(radius){
    return [0, 0]
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(countingTiles(2), [4, 12], "N=2");
    assert.deepEqual(countingTiles(3), [16, 20], "N=3");
    assert.deepEqual(countingTiles(2.1), [4, 20], "N=2.1");
    assert.deepEqual(countingTiles(2.5), [12, 20], "N=2.5");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}