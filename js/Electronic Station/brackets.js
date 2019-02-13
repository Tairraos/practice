#!/usr/bin/env checkio --domain=js run brackets

// https://js.checkio.org/mission/brackets/

// “Great!” Exclaimed Sofia. “Now we have the password.”
// 
// “To what exactly?” Quipped Nikola.
// 
// “Untold treasures, vast riches beyond belief! Gold! Silver! Silicon! Hydraulic Fluid! Anything your heart        desires!”
// 
// “And you’re going to do what with a password to absolutely nothing?” Nikola smirked.
// 
// “Oh... Right...”
// 
// Stephen spoke up. “Well, this door back here has a keypad. Only thing is the brackets look pretty busted up. We        could try fixing it and then punching in the password?”
// 
// “YES! That!” Sofia exclaimed.
// 
// You are given an expression with numbers, brackets and operators.    For this task only the brackets matter. Brackets come in three flavors: "{}" "()" or "[]".    Brackets are used to determine scope or to restrict some expression.     If a bracket is open, then it must be closed with a closing bracket of the same type.     The scope of a bracket must not intersected by another bracket.     In this task you should make a decision, whether to correct an expression or not based on the brackets.     Do not worry about operators and operands.
// 
// Input:An expression with different of types brackets as a string (unicode).
// 
// Output:A verdict on the correctness of the expression in boolean (True or False).
// 
// Precondition:
// There are only brackets ("{}" "()" or "[]"), digits or operators ("+" "-" "*" "/").
// 0 < len(expression) < 103
// 
// 
// END_DESC

"use strict";

function brackets(expression){
    return true || false;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(brackets("((5+3)*2+1)"), true, "Simple");
    assert.equal(brackets("{[(3+1)+2]+}"), true, "Different types");
    assert.equal(brackets("(3+{1-1)}"), false, ") is alone inside {}");
    assert.equal(brackets("[1+1]+(2*2)-{3/3}"), true, "Different operators");
    assert.equal(brackets("(({[(((1)-2)+3)-3]/3}-3)"), false, "One is redundant");
    assert.equal(brackets("2+3"), true, "No brackets, no problem");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}