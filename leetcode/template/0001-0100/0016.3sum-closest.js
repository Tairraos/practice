/**
 * https://leetcode-cn.com/problems/3sum-closest/
 * 0016.最接近的三数之和
 * 难度：中等
 * 
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(threeSumClosest("param"), "expect", "caseName");
assert.deepEqual(threeSumClosest("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
