/**
 * https://leetcode-cn.com/problems/single-number-ii/
 * 0137.只出现一次的数字 II
 * 难度：中等
 * 
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。
 * 
 * 说明：
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 
 * 示例 1：
 * 输入: [2,2,3,2]
 * 输出: 3
 * 
 * 示例 2：
 * 输入: [0,1,0,1,0,1,99]
 * 输出: 99
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(singleNumber("param"), "expect", "Case 1");
assert.deepEqual(singleNumber("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
