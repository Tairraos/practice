/**
 * https://leetcode-cn.com/problems/largest-number/
 * 0179.最大数
 * 难度：中等
 * 
 * 给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。
 * 
 * 示例 1：
 * 输入: [10,2]
 * 输出: 210
 * 
 * 示例 2：
 * 输入: [3,30,34,5,9]
 * 输出: 9534330
 * 
 * 说明: 输出结果可能非常大，所以你需要返回一个字符串而不是整数。
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(largestNumber("param"), "expect", "Case 1");
assert.deepEqual(largestNumber("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
