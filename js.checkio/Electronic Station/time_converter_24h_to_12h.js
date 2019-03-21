#!/usr/bin/env checkio --domain=js check time-converter-24h-to-12h
// https://js.checkio.org/mission/time-converter-24h-to-12h/

"use strict";

function timeConverter(dayTime) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(timeConverter('12:30'))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(timeConverter('12:30'), '12:30 p.m.')
    assert.equal(timeConverter('09:00'), '9:00 a.m.')
    assert.equal(timeConverter('23:15'), '11:15 p.m.')
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}