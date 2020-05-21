/**
 * https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/
 * 面试题65.不用加减乘除做加法
 * 难度：容易
 * 
 * 写一个函数，求两个整数之和，要求在函数体内不得使用 &ldquo;+&rdquo;、&ldquo;-&rdquo;、&ldquo;*&rdquo;、&ldquo;/&rdquo; 四则运算符号。
 * 
 * 示例:
 * 输入: a = 1, b = 1
 * 输出: 2
 * 
 * 提示：
 * a, b 均可能是负数或 0
 * 结果不会溢出 32 位整数
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(add("param"), "expect", "Case 1");
assert.deepEqual(add("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
