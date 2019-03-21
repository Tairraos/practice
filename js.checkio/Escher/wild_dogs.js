#!/usr/bin/env checkio --domain=js run wild-dogs
// https://js.checkio.org/mission/wild-dogs/

"use strict";

function wildDogs(coords) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(wildDogs([[7, 122], [8, 139], [9, 156], 
                          [10, 173], [11, 190], [-100, 1]]))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(wildDogs([[7, 122], [8, 139], [9, 156], 
                           [10, 173], [11, 190], [-100, 1]]), 0.18)

    assert.equal(wildDogs([[6, -0.5], [3, -5], [1, -20]]), 3.63)

    assert.equal(wildDogs([[10, 10], [13, 13], [21, 18]]), 0)

    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}