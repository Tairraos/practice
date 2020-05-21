/**
 * https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
 * 面试题 50.第一个只出现一次的字符
 * 难度：容易
 * 
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。
 * 
 * 示例:
 * s = "abaccdeff"
 * 返回 "b"
 * 
 * s = "" 
 * 返回 " "
 * 
 * 限制：
 * 
 * 0 <= s 的长度 <= 50000
 */

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(firstUniqChar("param"), "expect", "Case 1");
assert.deepEqual(firstUniqChar("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
