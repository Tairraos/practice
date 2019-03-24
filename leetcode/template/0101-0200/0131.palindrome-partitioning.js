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
console.time("leetcode");

assert.deepEqual(partition("参数"), "期望结果");
assert.deepEqual(partition("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
