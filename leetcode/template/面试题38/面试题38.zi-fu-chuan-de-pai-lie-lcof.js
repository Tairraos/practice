/**
 * https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/
 * 面试题38.字符串的排列
 * 难度：中等
 * 
 * 输入一个字符串，打印出该字符串中字符的所有排列。
 * 
 * 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
 * 
 * 示例:
 * 输入：s = "abc"
 * 输出：["abc","acb","bac","bca","cab","cba"]
 * 
 * 限制：
 * 
 * 1 <= s 的长度 <= 8
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(permutation("param"), "expect", "Case 1");
assert.deepEqual(permutation("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
