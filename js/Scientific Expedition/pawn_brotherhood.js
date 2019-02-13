#!/usr/bin/env checkio --domain=js run pawn-brotherhood

// https://js.checkio.org/mission/pawn-brotherhood/

// 
// END_DESC

"use strict";

function safePawns(data) {
    return 0
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(safePawns(["b4", "d4", "f4", "c3", "e3", "g5", "d2"]), 6, "First");
    assert.equal(safePawns(["b4", "c4", "d4", "e4", "f4", "g4", "e5"]), 1, "Second");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}