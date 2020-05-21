/**
 * https://leetcode-cn.com/problems/missing-number-lcci/
 * 面试题 17.04.消失的数字
 * 难度：容易
 * 
 * 数组nums包含从0到n的所有整数，但其中缺了一个。请编写代码找出那个缺失的整数。你有办法在O(n)时间内完成吗？
 * 
 * 注意：本题相对书上原题稍作改动
 * 
 * 示例 1：
 * 输入：[3,0,1]
 * 输出：2
 * 
 * 示例 2：
 * 输入：[9,6,4,2,3,5,7,0,1]
 * 输出：8
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(missingNumber("param"), "expect", "Case 1");
assert.deepEqual(missingNumber("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
