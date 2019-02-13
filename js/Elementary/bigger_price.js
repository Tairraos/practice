#!/usr/bin/env checkio --domain=js run bigger-price

// https://js.checkio.org/mission/bigger-price/

// You have a table with all available goods in the store. The data is represented as a list of objects
// 
// Your mission here is to find the TOP most expensive goods. The amount we are looking for will be given as a first argument and the whole data as the second one
// 
// Input:Integer and array of objects. Each objects has two attributes "name" and "price"
// 
// Output:the same as the second Input argument.
// 
// 
// END_DESC

"use strict";

function biggerPrice(limit, data) {
    // TOP most expensive goods

    // your code here
    return 0;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(biggerPrice(2, [
        {"name": "bread", "price": 100},
        {"name": "wine", "price": 138},
        {"name": "meat", "price": 15},
        {"name": "water", "price": 1}
    ]))

    assert.deepEqual(biggerPrice(2, [
        {"name": "bread", "price": 100},
        {"name": "wine", "price": 138},
        {"name": "meat", "price": 15},
        {"name": "water", "price": 1}
    ]), [
        {"name": "wine", "price": 138},
        {"name": "bread", "price": 100}
    ])
    assert.deepEqual(biggerPrice(1, [
        {"name": "pen", "price": 5},
        {"name": "whiteboard", "price": 170}
    ]), [{"name": "whiteboard", "price": 170}])
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}