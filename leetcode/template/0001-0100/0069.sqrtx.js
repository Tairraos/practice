/**
 * https://leetcode-cn.com/problems/sqrtx/
 * 0069.x 的平方根
 * 难度：容易
 * 
 * 实现 int sqrt(int x) 函数。
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 
 * 示例 1：
 * 输入: 4
 * 输出: 2
 * 
 * 示例 2：
 * 输入: 8
 * 输出: 2
 * 
 * 说明: 8 的平方根是 2.82842...,
 *      由于返回类型是整数，小数部分将被舍去。
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(mySqrt("param"), "expect", "Case 1");
assert.deepEqual(mySqrt("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
