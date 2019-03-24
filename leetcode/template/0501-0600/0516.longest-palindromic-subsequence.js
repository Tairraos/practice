/**
 * https://leetcode-cn.com/problems/longest-palindromic-subsequence/
 * 0516.最长回文子序列
 * 难度：中等
 * 
 * 给定一个字符串s，找到其中最长的回文子序列。可以假设s的最大长度为1000。
 * 
 * 示例 1：
 * 输入：
 * "bbbab"
 * 输出：
 * 4
 * 
 * 一个可能的最长回文子序列为 "bbbb"。
 * 
 * 示例 2：
 * 输入：
 * "cbbd"
 * 输出：
 * 2
 * 
 * 一个可能的最长回文子序列为 "bb"。
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(longestPalindromeSubseq("参数"), "期望结果");
assert.deepEqual(longestPalindromeSubseq("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
