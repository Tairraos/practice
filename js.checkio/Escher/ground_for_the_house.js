#!/usr/bin/env checkio --domain=js check ground-for-the-house
// https://js.checkio.org/mission/ground-for-the-house/

"use strict";

function house(plan) {
    // calculate width:
    // -> replace # as 1 
    // -> split by \n 
    // -> parse to bineary and project them 
    // -> trim 0 
    // -> width is the length of string
    // calculate height
    // -> trim 0 and \n 
    // -> split by \n 
    // -> height is the height of array
    return plan.replace(/#/g, "1").split("\n").reduce((a, b) => (parseInt(0 + a, 2) | parseInt(b, 2)).toString(2)).replace(/^0+|0+$/g, "").length *
           plan.replace(/^[\n0]+|[\n0]+$/g, "").split("\n").length;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(house(`
0000000
##00##0
######0
##00##0
#0000#0
`))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(house(`
0000000
##00##0
######0
##00##0
#0000#0
`), 24)

    assert.equal(house(`0000000000
#000##000#
##########
##000000##
0000000000
`), 30)

    assert.equal(house(`0000
0000
#000
`), 1)

    assert.equal(house(`0000
0000
`), 0)

    assert.equal(house(`0##0
0000
#00#
`), 12)

    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}