#!/usr/bin/env checkio --domain=js check the-ship-teams
// https://js.checkio.org/mission/the-ship-teams/

"use strict";

function twoTeams(sailors) {
    //get all sailor's name and sort them
    let members = Object.keys(sailors).sort();
    return [
        //filter the names by age
        members.filter(p => sailors[p] > 40 || sailors[p] < 20),
        members.filter(p => sailors[p] <= 40 && sailors[p] >= 20)
    ];
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(twoTeams({
        'Smith': 34,
        'Wesson': 22,
        'Coleman': 45,
        'Abrahams': 19
    }))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.deepEqual(twoTeams({
        'Smith': 34,
        'Wesson': 22,
        'Coleman': 45,
        'Abrahams': 19
    }), [
        ['Abrahams', 'Coleman'],
        ['Smith', 'Wesson']
    ])

    assert.deepEqual(twoTeams({
        'Fernandes': 18,
        'Johnson': 22,
        'Kale': 41,
        'McCortney': 54
    }), [
        ['Fernandes', 'Kale', 'McCortney'],
        ['Johnson']
    ])

    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
