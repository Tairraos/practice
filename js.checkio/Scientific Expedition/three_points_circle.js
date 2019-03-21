#!/usr/bin/env checkio --domain=js check three-points-circle
// https://js.checkio.org/mission/three-points-circle/

"use strict";

function circle(data) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(circle("(2,2),(6,2),(2,6)"), "(x-4)^2+(y-4)^2=2.83^2")
    assert.equal(circle("(3,7),(6,9),(9,7)"), "(x-6)^2+(y-5.75)^2=3.25^2")
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}