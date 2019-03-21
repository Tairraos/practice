#!/usr/bin/env checkio --domain=js check fast-train
// https://js.checkio.org/mission/fast-train/

"use strict";

function fastTrain(numbers) {
    return 0; 
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:');
    console.log(fastTrain([[4, 3]]));
    assert.equal(fastTrain([[4, 3]]), 3);
    assert.equal(fastTrain([[9, 10]]), 5);
    assert.equal(fastTrain([[5, 5], [4, 2]]), 6);
    console.log('"Run" is good. How is "Check"?');
}