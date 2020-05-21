/**
 * https://leetcode-cn.com/problems/smallest-difference-lcci/
 * 面试题 16.06.最小差
 * 难度：中等
 * 
 * 给定两个整数数组a和b，计算具有最小差绝对值的一对数值（每个数组中取一个值），并返回该对数值的差
 * 示例：
 * 输入：{1, 3, 15, 11, 2}, {23, 127, 235, 19, 8}
 * 输出： 3，即数值对(11, 8)
 * 
 * 提示：
 * 1 
 * -2147483648 
 * 正确结果在区间[-2147483648, 2147483647]内
 */

/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var smallestDifference = function(a, b) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(smallestDifference("param"), "expect", "Case 1");
assert.deepEqual(smallestDifference("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
