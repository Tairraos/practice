/**
 * https://leetcode-cn.com/problems/shortest-palindrome/
 * 0214.最短回文串
 * 难度：困难
 * 
 * 给定一个字符串 s，你可以通过在字符串前面添加字符将其转换为回文串。找到并返回可以用这种方式转换的最短回文串。
 * 
 * 示例 1：
 * 输入: "aacecaaa"
 * 输出: "aaacecaaa"
 * 
 * 示例 2：
 * 输入: "abcd"
 * 输出: "dcbabcd"
 */

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(shortestPalindrome("param"), "expect", "Case 1");
assert.deepEqual(shortestPalindrome("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
