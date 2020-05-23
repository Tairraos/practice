/**
 * https://leetcode-cn.com/problems/find-the-closest-palindrome/
 * 0564.寻找最近的回文数
 * 难度：困难
 * 
 * 给定一个整数 n ，你需要找到与它最近的回文数（不包括自身）。
 * “最近的”定义为两个整数差的绝对值最小。
 * 
 * 示例 1：
 * 输入: "123"
 * 输出: "121"
 * 
 * 注意：
 *   - n 是由字符串表示的正整数，其长度不超过18。
 *   - 如果有多个结果，返回最小的那个。
 */

/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(nearestPalindromic("param"), "expect", "Case 1");
assert.deepEqual(nearestPalindromic("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
