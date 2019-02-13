#!/usr/bin/env checkio --domain=js run time-converter-12h-to-24h

// https://js.checkio.org/mission/time-converter-12h-to-24h/

// You are the modern man who prefers the 24-hour time format. But the 12-hour format is used in some places. Your task is to convert the time from the 12-h format into 24-h by following the next rules:
// - the output format should be 'hh:mm'
// - if the output hour is less than 10 - write '0' before it. For example: '09:05'
// Here you can find some useful information about the12-hour format.
// 
// 
// 
// Input:Time in a 12-hour format (as a string).
// 
// Output:Time in a 24-hour format (as a string).
// 
// Precondition:
// '00:00'<= time<= '23:59'
// 
// 
// END_DESC

"use strict";

function timeConverter(dayTime) {
    var params = dayTime.replace(/^[^\d]*(\d+):(\d+)[^p]*(p?).*$/,"$1,$2,$3").split(",");
    return ("0"+(+params[0]%12 +(params[2]?12:0)) + ":0" + params[1]).replace(/^\d*(\d\d):\d*(\d\d)$/,"$1:$2");
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