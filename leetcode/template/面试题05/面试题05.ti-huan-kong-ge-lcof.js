/**
 * https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 * 面试题05.替换空格
 * 难度：容易
 * 
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 
 * 示例 1：
 * 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 * 
 * 限制：
 * 
 * 0 <= s 的长度 <= 10000
 */

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(replaceSpace("param"), "expect", "Case 1");
assert.deepEqual(replaceSpace("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
