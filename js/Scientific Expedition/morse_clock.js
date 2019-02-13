#!/usr/bin/env checkio --domain=js run morse-clock

// https://js.checkio.org/mission/morse-clock/

// 
// END_DESC

"use strict";

function morseClock(data) {
    return ".- .... : .-- .--- : -.. -..-";
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(morseClock("10:37:49"), ".- .... : .-- .--- : -.. -..-", "1st");
    assert.equal(morseClock("21:34:56"), "-. ...- : .-- .-.. : -.- .--.", "2nd");
    assert.equal(morseClock("00:1:02"), ".. .... : ... ...- : ... ..-.", "3rd");
    assert.equal(morseClock("23:59:59"), "-. ..-- : -.- -..- : -.- -..-", "4th");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}