/**
 * https://leetcode-cn.com/problems/two-sum/
 * 0001.两数之和
 * 难度：容易
 * 
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 
 * 示例：
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //暴力解，全组合 C(nums.length, 2)
    for (var i = 0; i <= nums.length; i++) {
        for (var j = i + 1; j <= nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]; //找到立刻结果，不用完全遍历
            }
        }
    }
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1], "Case 1");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
