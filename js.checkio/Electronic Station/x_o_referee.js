#!/usr/bin/env checkio --domain=js check x-o-referee
// https://js.checkio.org/mission/x-o-referee/

"use strict";

function xoReferee(data) {
    return "D" || "X" || "O";
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(xoReferee([
        "X.O",
        "XX.",
        "XOO"]), "X", "Xs wins");

    assert.equal(xoReferee([
        "OO.",
        "XOX",
        "XOX"]), "O", "Os wins");

    assert.equal(xoReferee([
        "OOX",
        "XXO",
        "OXX"]), "D", "Draw");

    assert.equal(xoReferee([
        "O.X",
        "XX.",
        "XOO"]), "X", "Xs wins again");

    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}