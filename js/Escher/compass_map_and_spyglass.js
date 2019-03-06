#!/usr/bin/env checkio --domain=js run compass-map-and-spyglass

// https://js.checkio.org/mission/compass-map-and-spyglass/

// 
// END_DESC

"use strict";

function navigation(seaside) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(navigation([['Y', 0, 0, 0, 'C'],
                            [ 0,  0, 0, 0,  0],
                            [ 0,  0, 0, 0,  0],
                            ['M', 0, 0, 0, 'S']]))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(navigation([['Y', 0, 0, 0, 'C'],
                             [ 0,  0, 0, 0,  0],
                             [ 0,  0, 0, 0,  0],
                             ['M', 0, 0, 0, 'S']]), 11)

    assert.equal(navigation([[ 0,  0, 'C'],
                             [ 0, 'S', 0],
                             ['M','Y', 0]]), 4)

    assert.equal(navigation([[ 0,  0, 0,  0,  0,  0,  0],
                             [ 0,  0, 0, 'M', 0, 'S', 0],
                             [ 0,  0, 0,  0,  0,  0,  0],
                             [ 0,  0, 0, 'C', 0,  0,  0],
                             [ 0, 'Y',0,  0,  0,  0,  0],
                             [ 0,  0, 0,  0,  0,  0,  0]]), 9)
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}