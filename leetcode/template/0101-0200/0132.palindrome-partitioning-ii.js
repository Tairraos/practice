/**
 * https://leetcode-cn.com/problems/palindrome-partitioning-ii/
 * 0132.分割回文串 II
 * 难度：困难
 * 
 * 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
 * 返回符合要求的最少分割次数。
 * 
 * 示例：
 * 输入: "aab"
 * 输出: 1
 * 解释: 进行一次分割就可将 s 分割成 ["aa","b"] 这样两个回文子串。
 */

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(minCut("param"), "expect", "caseName");
assert.deepEqual(minCut("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
