/**
 * https://leetcode-cn.com/problems/swap-numbers-lcci/
 * 面试题 16.01.交换数字
 * 难度：中等
 * 
 * 编写一个函数，不用临时变量，直接交换numbers = [a, b]中a与b的值。
 * 示例：
 * 输入: numbers = [1,2]
 * 输出: [2,1]
 * 
 * 提示：
 * numbers.length == 2
 */

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var swapNumbers = function(numbers) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(swapNumbers("param"), "expect", "Case 1");
assert.deepEqual(swapNumbers("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
