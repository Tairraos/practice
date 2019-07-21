/**
 * https://leetcode-cn.com/problems/first-missing-positive/
 * 0041.缺失的第一个正数
 * 难度：困难
 * 
 * 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
 * 
 * 示例 1：
 * 输入: [1,2,0]
 * 输出: 3
 * 
 * 示例 2：
 * 输入: [3,4,-1,1]
 * 输出: 2
 * 
 * 示例 3：
 * 输入: [7,8,9,11,12]
 * 输出: 1
 * 
 * 说明：
 * 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(firstMissingPositive("param"), "expect", "caseName");
assert.deepEqual(firstMissingPositive("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
