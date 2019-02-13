#!/usr/bin/env checkio --domain=js run matrix-pattern

// https://js.checkio.org/mission/matrix-pattern/

// To explore new islands and areas Sophia uses the automated drones. But she gets tired looking at the monitors all the time.    Sophia wants to teach the drones to recognize some basic patterns and mark them for review.
// 
// The drones have a simple optical monochromatic image capturing system.    Thanks to this an image can be represented as a binary matrix.    You should write a program to search a binary matrix (a pattern) within another binary matrix (an image).    The recognition process consists of scanning the image matrix row by row (horizontal scanning) and    when a pattern is located on the image, the program must mark this pattern. To mark a located pattern change 1 to 3 and 0 to 2.    The result will be the image matrix where the located patterns are marked.
// 
// The patterns in the image matrix are not crossed, because you should immediately mark the pattern.
// 
// 
// 
// Input:Two arguments. A pattern as a list of lists and an image as a list of lists.
// 
// Output:The marked image as a matrix represented by a list of lists.
// 
// Precondition:
// 1<image_width ≤ 10
// 1<image_height ≤ 10
// 1<pattern_width ≤ 10
// 1<pattern_height ≤ 10
// |pattern|<|image|
// ∀ x ∈ data : x == 0 or x == 1
// 
// 
// 
// END_DESC

"use strict";

function matrix(pattern, image) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    // These "asserts" are used for self-checking and not for an auto-testing
    assert.deepEqual(matrix([[1, 0], [1, 1]],
                   [[0, 1, 0, 1, 0],
                    [0, 1, 1, 0, 0],
                    [1, 0, 1, 1, 0],
                    [1, 1, 0, 1, 1],
                    [0, 1, 1, 0, 0]]),   [[0, 3, 2, 1, 0],
                                          [0, 3, 3, 0, 0],
                                          [3, 2, 1, 3, 2],
                                          [3, 3, 0, 3, 3],
                                          [0, 1, 1, 0, 0]])
    assert.deepEqual(matrix([[1, 1], [1, 1]],
                   [[1, 1, 1],
                    [1, 1, 1],
                    [1, 1, 1]]),   [[3, 3, 1],
                                    [3, 3, 1],
                                    [1, 1, 1]])
    assert.deepEqual(matrix([[0, 1, 0], [1, 1, 1]],
                   [[0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 1, 1, 0, 0, 0, 1, 1, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                    [0, 1, 0, 0, 1, 1, 1, 0, 1, 0],
                    [1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
                    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
                    [0, 1, 1, 0, 0, 0, 1, 1, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]),   [[0, 2, 3, 2, 0, 0, 0, 2, 3, 2],
                                                         [0, 3, 3, 3, 0, 0, 0, 3, 3, 3],
                                                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                                                         [0, 0, 0, 0, 2, 3, 2, 0, 0, 0],
                                                         [2, 3, 2, 0, 3, 3, 3, 0, 1, 0],
                                                         [3, 3, 3, 0, 0, 0, 0, 0, 1, 1],
                                                         [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
                                                         [0, 0, 1, 0, 0, 0, 2, 3, 2, 0],
                                                         [0, 1, 1, 0, 0, 0, 3, 3, 3, 0],
                                                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]])
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}