/**
 * https://leetcode-cn.com/problems/palindrome-partitioning/
 * 0131.分割回文串
 * 难度：中等
 * 
 * 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
 * 返回 s 所有可能的分割方案。
 * 
 * 示例：
 * 输入: "aab"
 * 输出：
 * [
 *   ["aa","b"],
 *   ["a","a","b"]
 * ]
 */

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(partition("param"), "expect", "caseName");
assert.deepEqual(partition("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
