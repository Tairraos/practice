/**
 * https://leetcode-cn.com/problems/longest-palindrome/
 * 0409.最长回文串
 * 难度：容易
 * 
 * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
 * 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
 * 
 * 注意：
 * 假设字符串的长度不会超过 1010。
 * 
 * 示例 1：
 * 输入：
 * "abccccdd"
 * 输出：
 * 7
 * 
 * 解释：
 * 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(longestPalindrome("param"), "expect", "caseName");
assert.deepEqual(longestPalindrome("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
