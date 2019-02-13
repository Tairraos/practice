#!/usr/bin/env checkio --domain=js run skew-symmetric-matrix

// https://js.checkio.org/mission/skew-symmetric-matrix/

// In mathematics, particularly in linear algebra,    a skew-symmetric matrix (also known as an antisymmetric or antimetric) is a square matrixAwhich is transposed    and negative.    This means that it satisfies the equationA = −AT.If the entry in the i-th row and j-th column is aij, i.e.A = (aij)then the symmetric condition becomesaij= −aji.
// 
// You should determine whether the specified square matrix is skew-symmetric    or not.
// 
// You can find more details on Skew-symmetric matrices on itsWikipedia page.
// 
// Input:A square matrix as a list of lists with integers.
// 
// Output:If the matrix is skew-symmetric or not as a boolean.
// 
// Precondition:0<N<5
// 
// 
// 
// END_DESC

"use strict";

function symmetric(matrix) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(symmetric([
        [0, 1, 2],
        [-1, 0, 1],
        [-2, -1, 0]]))

    // These "asserts" using only for self-checking and not necessary for auto-testing

    assert.equal(symmetric([
        [0, 1, 2],
        [-1, 0, 1],
        [-2, -1, 0]]), true);
    assert.equal(symmetric([
        [0, 1, 2],
        [-1, 1, 1],
        [-2, -1, 0]]), false);
    assert.equal(symmetric([
        [0, 1, 2],
        [-1, 0, 1],
        [-3, -1, 0]]), false);
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}