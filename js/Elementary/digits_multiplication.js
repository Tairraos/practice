#!/usr/bin/env checkio --domain=js run digits-multiplication

// https://js.checkio.org/mission/digits-multiplication/

// You are given a positive integer.    Your function should calculate the product of the digits excluding any zeroes.
// 
// For example: The number given is 123405. The result will be 1*2*3*4*5=120 (don't forget to exclude zeroes).
// 
// Input:A positive integer.
// 
// Output:The product of the digits as an integer.
// 
// Precondition:0 < number < 106
// 
// 
// END_DESC

function digitsMultip(data) {
    // "1" concat number to transfer number to string
    // -> remove all 0
    // -> split to array with single digital
    // -> calculate product, the "*" will auto transfer string to number
    return ("1" + data).replace(/0/g, "").split("").reduce((a, b) => a * b);
}