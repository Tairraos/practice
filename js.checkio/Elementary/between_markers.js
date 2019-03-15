#!/usr/bin/env checkio --domain=js check between-markers
// https://js.checkio.org/mission/between-markers/

"use strict";

function betweenMarkers(text, begin, end) {
    // test is end marker comes before the begin marker
    return text.match(RegExp((end + ".*" + begin).replace(/[\[\]\/]/g, "\\$&"))) ?
        // remove content before begin, and remove content after end, the the left string is what we want.
        "" : text.replace(RegExp(("^.*" + begin + "|" + end + ".*$").replace(/[\[\]\/]/g, "\\$&"), "g"), "");
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')

    assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
    assert.equal(betweenMarkers("<head><title>My new site</title></head>",
                                "<title>", "</title>"), 'My new site')
    assert.equal(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
    assert.equal(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi')
    assert.equal(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi')
    assert.equal(betweenMarkers('No <hi>', '>', '<'), '')
    assert.equal(betweenMarkers('No <hi> one', '>', '<'), '')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}