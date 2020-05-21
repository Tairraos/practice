/**
 * https://leetcode-cn.com/problems/one-away-lcci/
 * 面试题 01.05.一次编辑
 * 难度：中等
 * 
 * 字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。
 * 
 * 示例 1:
 * 输入: 
 * first = "pale"
 * second = "ple"
 * 输出: True
 * 
 * 示例 2:
 * 输入: 
 * first = "pales"
 * second = "pal"
 * 输出: False
 */

/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(oneEditAway("param"), "expect", "Case 1");
assert.deepEqual(oneEditAway("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
