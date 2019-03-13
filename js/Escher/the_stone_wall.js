#!/usr/bin/env checkio --domain=js check the-stone-wall
// https://js.checkio.org/mission/the-stone-wall/

"use strict";

function stoneWall(wall) {
    // calculate values of wall
    // trim \n 
    // -> replace # to 1
    // -> split to array
    // -> and calculate values of every column
    let values = wall.trim().replace(/#/g, "1").split("\n").map(s => s.split("")).reduce((a, b) => a.map((i, j) => +i + +b[j]));
    //find the weak value and find its position
    return values.indexOf(Math.min(...values));
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(stoneWall(`
##########
####0##0##
00##0###00
`))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(stoneWall(`
##########
####0##0##
00##0###00
`), 4)


    assert.equal(stoneWall(`
#00#######
#######0##
00######00
`), 1)

    assert.equal(stoneWall(`
#####
#####
#####
`), 0)

    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}