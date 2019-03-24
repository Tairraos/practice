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
console.time("leetcode");

assert.deepEqual(longestValidParentheses("参数"), "期望结果");
assert.deepEqual(longestValidParentheses("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
