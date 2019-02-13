#!/usr/bin/env checkio --domain=js run find-sequence

// https://js.checkio.org/mission/find-sequence/

// “There’s nothing here...” sighed Nikola.
// 
// “You’re kidding right? All treasure is buried treasure! It wouldn’t be treasure otherwise!”, saidSofia. “Here, take these.” She pulled out three shovels from a backpack that seemed to appear out of thin air.
// 
// “Where did you get-”
// 
// “Don’t ask questions. Just dig!” She hopped on the shovel and began digging furiously.
// 
// CLUNK
// 
// “Hey, we hit something!” Stephen exclaimed in surprise.
// 
// “It’s the treasure!” Sofia was jumping up and down in excitement.
// 
// The trio dug around the treasure chest and pulled it out from the hole, They wiped the dirt off and Sofia tried grabbing        the lid, but it was locked. Nikola studied the locking mechanism.
// 
// “I’ve seen this type of lock before. It’s pretty simple. We just need to check whether there is a sequence of 4        or more matching numbers and output a bool.”
// 
// “Easy enough. Let’s open this sucker up!” Sofia was shaking in excitement.
// 
// You are given a matrix of NxN (4≤N≤10).    You should check if there is a sequence of 4 or more matching digits.    The sequence may be positioned horizontally, vertically or diagonally (NW-SE or NE-SW diagonals).
// 
// Input:A matrix as a list of lists with integers.
// 
// Output:Whether or not a sequence exists as a boolean.
// 
// Precondition:
// 0 ≤ len(matrix) ≤ 10
// all(all(0 < x < 10 for x in row) for row in matrix)
// 
// 
// END_DESC

"use strict";

function sequence(matrix) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    // These "asserts" are used for self-checking and not for an auto-testing

    assert.equal(sequence([
        [1, 2, 1, 1],
        [1, 1, 4, 1],
        [1, 3, 1, 6],
        [1, 7, 2, 5]
    ]), true)
    assert.equal(sequence([
        [7, 1, 4, 1],
        [1, 2, 5, 2],
        [3, 4, 1, 3],
        [1, 1, 8, 1]
    ]), false)
    assert.equal(sequence([
        [2, 1, 1, 6, 1],
        [1, 3, 2, 1, 1],
        [4, 1, 1, 3, 1],
        [5, 5, 5, 5, 5],
        [1, 1, 3, 1, 1]
    ]), true)
    assert.equal(sequence([
        [7, 1, 1, 8, 1, 1],
        [1, 1, 7, 3, 1, 5],
        [2, 3, 1, 2, 5, 1],
        [1, 1, 1, 5, 1, 4],
        [4, 6, 5, 1, 3, 1],
        [1, 1, 9, 1, 2, 1]
    ]), true)

    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}