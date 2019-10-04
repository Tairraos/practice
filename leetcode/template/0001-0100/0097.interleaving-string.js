/**
 * https://leetcode-cn.com/problems/interleaving-string/
 * 0097.交错字符串
 * 难度：困难
 * 
 * 给定三个字符串 s1, s2, s3, 验证 s3 是否是由 s1 和 s2 交错组成的。
 * 
 * 示例 1：
 * 输入: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
 * 输出: true
 * 
 * 示例 2：
 * 输入: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
 * 输出: false
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(isInterleave("param"), "expect", "Case 1");
assert.deepEqual(isInterleave("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
