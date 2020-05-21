/**
 * https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/
 * 面试题56 - I.数组中数字出现的次数
 * 难度：中等
 * 
 * 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。
 * 
 * 示例 1：
 * 输入：nums = [4,1,4,6]
 * 输出：[1,6] 或 [6,1]
 * 
 * 示例 2：
 * 输入：nums = [1,2,10,4,1,4,3,3]
 * 输出：[2,10] 或 [10,2]
 * 
 * 限制：
 * 
 * 2 <= nums <= 10000
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(singleNumbers("param"), "expect", "Case 1");
assert.deepEqual(singleNumbers("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
