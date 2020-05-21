/**
 * https://leetcode-cn.com/problems/sum-swap-lcci/
 * 面试题 16.21.交换和
 * 难度：中等
 * 
 * 给定两个整数数组，请交换一对数值（每个数组中取一个数值），使得两个数组所有元素的和相等。
 * 
 * 返回一个数组，第一个元素是第一个数组中要交换的元素，第二个元素是第二个数组中要交换的元素。若有多个答案，返回任意一个均可。若无满足条件的数值，返回空数组。
 * 
 * 示例:
 * 输入: array1 = [4, 1, 2, 1, 1, 2], array2 = [3, 6, 3, 3]
 * 输出: [1, 3]
 * 
 * 示例:
 * 输入: array1 = [1, 2, 3], array2 = [4, 5, 6]
 * 输出: []
 * 
 * 提示：
 * 1 <= array1.length, array2.length <= 100000
 */

/**
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {number[]}
 */
var findSwapValues = function(array1, array2) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(findSwapValues("param"), "expect", "Case 1");
assert.deepEqual(findSwapValues("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
