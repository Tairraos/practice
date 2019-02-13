#!/usr/bin/env checkio --domain=js run repeating-decimals

// https://js.checkio.org/mission/repeating-decimals/

// .table-data {        border-collapse: collapse;    }    .table-data td,    .table-data th {        text-align: center;        font-size: 16px;        padding: 4px;        border: #294270 solid 1px;    }In mathematics, a repeating decimal is a way of representing a rational number.    A decimal representation of a number is called a repeating decimal if    at some point there is some finite sequence of digits that is repeated infinitely.    For example: the decimal representation of 1/3 = 0.3333333… or 0.(3)    becomes periodic just after the decimal point, repeating the single-digit sequence "3" infinitely.    Here is another example is 27/26 = 1.0384615384615385… or 1.0(384615), where    the decimal becomes periodic after the second digit past the decimal point, repeating the sequence "384615"    infinitely.    Rational numbers are numbers which can be expressed in the form a/b where a and b are integers and b is not zero.    This form is known as a common fraction.Read more about this at Wikipedia.
// 
// You should write a function for the converting a fraction into decimal representation.    If the decimal is repeating, you should represent it using the brackets format seen above.    You are given two integers, the first is the fractions numerator and the second is its denominator.    For this task, you will need to return the fraction in decimal representation as a string.    The integer results (as 0 or 2) must be ended with a dot.
// 
// FractionEllipsisBrackets1/30.333333...0.(3)5/31.666666...1.(6)3/80.3750.3757/110.636363...0.(63)29/122.41666666...2.41(6)11/71.571428571428...1.(571428)
// Input:Two arguments. A numerator and a denominator as integers.
// 
// Output:The decimal representation of the fraction in the bracket format as a string.
// 
// Precondition:
// 0 ≤ numerator ≤ 1000
// 1 ≤ denominator ≤ 1000
// 
// 
// 
// END_DESC

"use strict";

function convert(numerator, denominator) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    // These "asserts" are used for self-checking and not for an auto-testing

    assert.equal(convert(1, 3), "0.(3)")
    assert.equal(convert(5, 3), "1.(6)")
    assert.equal(convert(3, 8), "0.375")
    assert.equal(convert(7, 11), "0.(63)")
    assert.equal(convert(29, 12), "2.41(6)")
    assert.equal(convert(11, 7), "1.(571428)")
    assert.equal(convert(0, 117), "0.")
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}