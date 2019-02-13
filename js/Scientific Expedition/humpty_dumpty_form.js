#!/usr/bin/env checkio --domain=js run humpty-dumpty-form

// https://js.checkio.org/mission/humpty-dumpty-form/

// .story.shadow {        float: left;        /*padding: 10px;*/        margin: 10px;        border: black;    }
// END_DESC

"use strict";

function spheroid(height, width) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    // These "asserts" are used for self-checking and not for an auto-testing

    assert.deepEqual(spheroid(4, 2), [8.38, 21.48])
    assert.deepEqual(spheroid(2, 2), [4.19, 12.57])
    assert.deepEqual(spheroid(2, 4), [16.76, 34.69])
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}