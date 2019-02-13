#!/usr/bin/env checkio --domain=js run three-words

// https://js.checkio.org/mission/three-words/

// Let's teach the Robots to distinguish words and numbers.
// 
// You are given a string with words and numbers separated by whitespaces (one space).    The words contains only letters.    You should check if the string contains three words insuccession.    For example, the string "start 5one two three7 end" contains three words in succession.
// 
// Input:A string with words.
// 
// Output:The answer as a boolean.
// 
// Precondition:The input contains words and/or numbers. There are no mixed words (letters and digits combined).
// 0 < len(words) < 100
// 
// 
// END_DESC

"use strict";

function threeWords(data) {
    return true || false;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(threeWords("Hello World hello"), true, "1st example");
    assert.equal(threeWords("He is 123 man"), false, "2nd example");
    assert.equal(threeWords("1 2 3 4"), false, "3rd example");
    assert.equal(threeWords("bla bla bla bla"), true, "4th example");
    assert.equal(threeWords("Hi"), false, "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}