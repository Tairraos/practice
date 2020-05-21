/**
 * https://leetcode-cn.com/problems/palindrome-permutation-lcci/
 * 面试题 01.04.回文排列
 * 难度：容易
 * 
 * 给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。
 * 
 * 回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。
 * 
 * 回文串不一定是字典当中的单词。
 * 
 * 示例1：
 * 输入："tactcoa"
 * 输出：true（排列有"tacocat"、"atcocta"，等等）
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(canPermutePalindrome("param"), "expect", "Case 1");
assert.deepEqual(canPermutePalindrome("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
