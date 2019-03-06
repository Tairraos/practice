#!/usr/bin/env checkio --domain=js check digit-stack

// https://js.checkio.org/mission/digit-stack/

// In computer science, a stack is a particular kind of data type or collection in which the principal operations in    the collection are the addition of an entity to the collection (also known as push) and the removal of an entity    (also known as pop). The relation between the push and pop operations is such that the stack is a Last-In-First-Out    (LIFO) data structure. In a LIFO data structure, the last element added to the structure must be the first one to be    removed. Often a peek, or top operation is also implemented, returning the value of the top element without removing    it.
// 
// We will emulate the stack process with Python. You are given a sequence of commands:
// - "PUSH X" -- addXin the stack, whereXis a digit.
// - "POP" -- look and remove the top position. If the stack is empty, then it returns 0 (zero) and does nothing.
// - "PEEK" -- look at the top position. If the stack is empty, then it returns 0 (zero).
// The stack can only contain digits.
// 
// You should process all commands and sum all digits which were taken from the stack ("PEEK" or "POP").    Initial value of the sum is 0 (zero).
// 
// Let's look at an example, hereâs the sequence of commands:
// ["PUSH 3", "POP", "POP", "PUSH 4", "PEEK", "PUSH 9", "PUSH 0", "PEEK", "POP", "PUSH 1", "PEEK"]
// 
// CommandStackSumPUSH 330POP0+3POP3+0PUSH 443PEEK43+4PUSH 94,97PUSH 04,9,07PEEK4,9,07+0POP4,97+0PUSH 14,9,17PEEK4,9,17+1=8Input:A sequence of commands as a list of strings.
// 
// Output:The sum of the taken digits as an integer.
// 
// Precondition:
// 0 ≤ len(commands) ≤ 20;
// all(re.match("\APUSH \d\Z", c) or Ń == "POP" or c == "PEEK" for c incommands)
// 
// 
// END_DESC

"use strict";

function digitStack(commands){
    return 0;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(digitStack(["PUSH 3", "POP", "POP", "PUSH 4", "PEEK",
                             "PUSH 9", "PUSH 0", "PEEK", "POP", "PUSH 1", "PEEK"]),
                             8, "Example");
    assert.equal(digitStack(["POP", "POP"]), 0, "pop, pop, zero");
    assert.equal(digitStack(["PUSH 9", "PUSH 9", "POP"]), 9, "Push the button");
    assert.equal(digitStack([]), 0, "Nothing");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}