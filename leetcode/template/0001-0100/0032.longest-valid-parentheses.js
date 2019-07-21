/**
 * https://leetcode-cn.com/problems/longest-valid-parentheses/
 * 0032.最长有效括号
 * 难度：困难
 * 
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 * 
 * 示例 1：
 * 输入: "(()"
 * 输出: 2
 * 解释: 最长有效括号子串为 "()"
 * 
 * 示例 2：
 * 输入: ")()())"
 * 输出: 4
 * 解释: 最长有效括号子串为 "()()"
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(longestValidParentheses("param"), "expect", "caseName");
assert.deepEqual(longestValidParentheses("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
