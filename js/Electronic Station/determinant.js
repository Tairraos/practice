#!/usr/bin/env checkio --domain=js run determinant

// https://js.checkio.org/mission/determinant/

// In linear algebra, thedeterminantis a value associated with a square    matrix. It can be computed from the entries of the matrix by a specific    arithmetic expression (There are other ways to determine its value as    well.)
// 
// The determinant of a matrixAis denoteddet(A),det A, or|A|.    In the case where the matrix entries are written out in full, the determinant is    denoted by surrounding the matrix entries by vertical bars instead of the    brackets or parentheses of the matrix.
// 
// There are various ways to define the determinant of a square matrixA, i.e.    one with the same number of rows and columns. Perhaps the most natural way    is expressed in terms of the columns of the matrix. If we write anN×Nmatrix in terms of its column vectors:
// 
// A = [a1, a2, ..., an]
// 
// Where there are vectors of size n, then the determinant of A is defined so    that:
// 
// det[a1, ..., b*aj+c*v, ..., an] = b*det(A)+c*det[a1, ..., v, ..., an]
// det[a1, ..., aj, aj+1, ..., an] = -det[a1, ..., aj+1, aj, ..., an]
// det(I) = 1
// 
// Wherebandcare scalars,vis any vector of sizeNandIis the identity    matrix of sizeN. These properties state that the determinant is an    alternating multilinear function of the columns, and they suffice to    uniquely calculate the determinant of any square matrix. Provided the    underlying scalars form a field (more generally, a commutative ring with    unity).    Equivalently, the determinant can be expressed as a sum of products of    entries of the matrix where each product hasNterms and the coefficient of    each product is −1 or 1 or 0 according to a given rule: it’s a polynomial    expression of the matrix entries. This expression grows rapidly with the    size of the matrix (anNxNmatrix contributesN!terms), so it will first    be given explicitly for the case of 2×2 matrices and 3×3 matrices,    followed by the rule for arbitrary size matrices, which subsumes these two    cases.
// 
// For more information about the determinant visitWikipedia
// 
// Input:A square matrix as a list of lists with integers.
// 
// Output:The determinant of the matrix as an integer.
// 
// Precondition:
// 0 < len(matrix) ≤ 5
// all(len(row) == len(matrix) for row in matrix)
// all(all(0 ≤ x < 10 for x in row) for row in matrix)
// 
// 
// END_DESC

"use strict";

function determinant(data) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(determinant([[4, 3], [6, 3]]), -6)

    assert.equal(determinant([[1, 3, 2],
                              [1, 1, 4],
                              [2, 2, 1]]), 14)
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}