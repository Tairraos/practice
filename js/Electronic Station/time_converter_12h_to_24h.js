#!/usr/bin/env checkio --domain=js check time-converter-12h-to-24h
// https://js.checkio.org/mission/time-converter-12h-to-24h/

"use strict";

function timeConverter(dayTime) {
    // split Hour/Miniute/PM to array
    // -> if there is "p", add 12 to Hour
    // -> format data to time
    var t = dayTime.replace(/^(\d+):(\d+)\s*(p?).*$/,"$1,$2,$3").split(",");
    return ("0"+(+t[0]%12 +(t[2]?12:0)) + ":0" + t[1]).replace(/^0*(\d\d):0*(\d\d)$/,"$1:$2");
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(timeConverter('12:30 p.m.'))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(timeConverter('12:30 p.m.'), '12:30')
    assert.equal(timeConverter('9:00 a.m.'), '09:00')
    assert.equal(timeConverter('11:15 p.m.'), '23:15')
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}