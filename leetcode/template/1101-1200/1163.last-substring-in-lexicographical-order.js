/**
 * https://leetcode-cn.com/problems/last-substring-in-lexicographical-order/
 * 1163.按字典序排在最后的子串
 * 难度：困难
 * 
 * 给你一个字符串 s，找出它的所有子串并按字典序排列，返回排在最后的那个子串。
 * 
 * 示例 1：
 * 输入："abab"
 * 输出："bab"
 * 解释：我们可以找出 7 个子串 ["a", "ab", "aba", "abab", "b", "ba", "bab"]。按字典序排在最后的子串是 "bab"。
 * 
 * 示例 2：
 * 输入："leetcode"
 * 输出："tcode"
 * 
 * 提示：
 * 1 <= s.length <= 10^5
 * s 仅含有小写英文字符。
 */

/**
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function(s) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(lastSubstring("param"), "expect", "Case 1");
assert.deepEqual(lastSubstring("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
