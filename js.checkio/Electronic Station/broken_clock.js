#!/usr/bin/env checkio --domain=js check broken-clock
// https://js.checkio.org/mission/broken-clock/

"use strict";

function brokenClock(startingTime, wrongTime, errorDescription){
    return "00:59:59"
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(brokenClock('00:00:00', '00:00:15', '+5 seconds at 10 seconds'), '00:00:10', "First example");
    assert.equal(brokenClock('06:10:00', '06:10:15', '-5 seconds at 10 seconds'), '06:10:30', "Second example");
    assert.equal(brokenClock('13:00:00', '14:01:00', '+1 second at 1 minute'), '14:00:00', "Third example");
    assert.equal(brokenClock('01:05:05', '04:05:05', '-1 hour at 2 hours'), '07:05:05', "Fourth example");
    assert.equal(brokenClock('00:00:00', '00:00:30', '+2 seconds at 6 seconds'), '00:00:22', "Fifth example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}