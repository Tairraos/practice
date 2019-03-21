#!/usr/bin/env checkio --domain=js check cipher-map
// https://js.checkio.org/mission/cipher-map/

"use strict";

function recallPassword(grille, password) {
    //rotate 4 strings array -90deg
    let rot = a => a.map((r, i) => r.split("").map((c, j) => a[j][a.length - 1 - i]).join(""));
    
    return [1,2,3,4].map(i => {
        grille = rot(grille);
        //filter with rotated array
        return password.map((r, i) => r.split("").filter((c, j) => grille[i][j] === "X")).join("").replace(/,/g, "");
    }).reverse().join(""); //join array to string
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(recallPassword(['X...',
         '..X.',
         'X..X',
         '....'],
        ['itdf',
         'gdce',
         'aton',
         'qrdi']), 'icantforgetiddqd', "First Example");
    assert.equal(recallPassword(['....',
         'X..X',
         '.X..',
         '...X'],
        ['xhwc',
         'rsqx',
         'xqzz',
         'fyzr']), 'rxqrwsfzxqxzhczy', "Second Example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}