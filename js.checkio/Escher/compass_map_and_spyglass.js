#!/usr/bin/env checkio --domain=js check compass-map-and-spyglass
// https://js.checkio.org/mission/compass-map-and-spyglass/

"use strict";

function navigation(m) {
    //calculate coordinate of letter
    let coord = s => {
            // try to find letter(s) in each line, if not found, the value is -1
            // so the biggest is the x coordinate of letter(s)
            let pos = m.map(x => x.indexOf(s));
            // y coordinate is the index place of pos
            return [Math.max(...pos), pos.indexOf(Math.max(...pos))];
        },
        // calculate distance
        dist = (a, b) => Math.max(Math.abs(a[0] - b[0]), Math.abs(a[1] - b[1]));
    // sum YC, YM and YS
    return dist(coord("Y"), coord("C")) + dist(coord("Y"), coord("M")) + dist(coord("Y"), coord("S"));
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(navigation([['Y', 0, 0, 0, 'C'],
                            [ 0,  0, 0, 0,  0],
                            [ 0,  0, 0, 0,  0],
                            ['M', 0, 0, 0, 'S']]))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(navigation([['Y', 0, 0, 0, 'C'],
                             [ 0,  0, 0, 0,  0],
                             [ 0,  0, 0, 0,  0],
                             ['M', 0, 0, 0, 'S']]), 11)

    assert.equal(navigation([[ 0,  0, 'C'],
                             [ 0, 'S', 0],
                             ['M','Y', 0]]), 4)

    assert.equal(navigation([[ 0,  0, 0,  0,  0,  0,  0],
                             [ 0,  0, 0, 'M', 0, 'S', 0],
                             [ 0,  0, 0,  0,  0,  0,  0],
                             [ 0,  0, 0, 'C', 0,  0,  0],
                             [ 0, 'Y',0,  0,  0,  0,  0],
                             [ 0,  0, 0,  0,  0,  0,  0]]), 9)
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}