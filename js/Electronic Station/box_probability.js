#!/usr/bin/env checkio --domain=js run box-probability

// https://js.checkio.org/mission/box-probability/

// To start the game they put several black and white pearls in one of the boxes.    Each robot hasNmoves, after which the initial set is being restored for the next game.    Each turn, the robot takes a pearl out of the box and puts one of the opposite color back.    The winner is the one who takes the white pearl on theNthmove.
// 
// Our robots don't like uncertainty, that's why they want to know the probability of drawing a white pearl on the Nth move.    The probability is a value between 0 (0% chance or will not happen) and 1 (100% chance or will happen).    The result is a float from 0 to 1 with two decimal digits of precision (±0.01).
// 
// You are given a start set of pearls as a string that contains "b" (black) and "w" (white) and the number of the move    (N).    The order of the pearls does not matter.
// 
// 
// 
// Input:The start sequence of the pearls as a string and the move number as an integer.
// 
// Output:The probability for a white pearl as a float.
// 
// Precondition:0<N ≤ 20
// 0<|pearls| ≤ 20
// 
// 
// 
// END_DESC

"use strict";
function boxProbability(marbles, step) {
    return 0.5
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(boxProbability('bbw', 3), 0.48, "First");
    assert.equal(boxProbability('wwb', 3), 0.52, "Second");
    assert.equal(boxProbability('www', 3), 0.56, "Third");
    assert.equal(boxProbability('bbbb', 1), 0, "Fifth");
    assert.equal(boxProbability('wwbb', 4), 0.5, "Sixth");
    assert.equal(boxProbability('bwbwbwb', 5), 0.48, "Seventh");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}