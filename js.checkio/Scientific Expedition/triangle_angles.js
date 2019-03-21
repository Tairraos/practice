#!/usr/bin/env checkio --domain=js check triangle-angles
// https://js.checkio.org/mission/triangle-angles/

"use strict";

function triangleAngles(a, b, c){
    return [0, 0, 0]
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(triangleAngles(4, 4, 4), [60, 60, 60], "All sides are equal");
    assert.deepEqual(triangleAngles(3, 4, 5), [37, 53, 90], "Egyptian triangle");
    assert.deepEqual(triangleAngles(2, 2, 5), [0, 0, 0], "It's can not be a triangle");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}