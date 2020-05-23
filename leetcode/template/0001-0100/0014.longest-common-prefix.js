/**
 * https://leetcode-cn.com/problems/longest-common-prefix/
 * 0014.最长公共前缀
 * 难度：容易
 * 
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1：
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 示例 2：
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 说明：
 * 所有输入只包含小写字母 a-z 。
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(longestCommonPrefix("param"), "expect", "Case 1");
assert.deepEqual(longestCommonPrefix("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
