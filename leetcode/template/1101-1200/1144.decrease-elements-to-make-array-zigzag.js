/**
 * https://leetcode-cn.com/problems/decrease-elements-to-make-array-zigzag/
 * 1144.递减元素使数组呈锯齿状
 * 难度：中等
 * 
 * 给你一个整数数组 nums，每次 操作 会从中选择一个元素并 将该元素的值减少 1。
 * 
 * 如果符合下列情况之一，则数组 A 就是 锯齿数组：
 * 
 * 每个偶数索引对应的元素都大于相邻的元素，即 A[0] > A[1] < A[2] > A[3] < A[4] > ...
 * 或者，每个奇数索引对应的元素都大于相邻的元素，即 A[0] < A[1] > A[2] < A[3] > A[4] < ...
 * 
 * 返回将数组 nums 转换为锯齿数组所需的最小操作次数。
 * 
 * 示例 1：
 * 输入：nums = [1,2,3]
 * 输出：2
 * 解释：我们可以把 2 递减到 0，或把 3 递减到 1。
 * 
 * 示例 2：
 * 输入：nums = [9,6,1,6,2]
 * 输出：4
 * 
 * 提示：
 * 1 <= nums.length <= 1000
 * 1 <= nums[i] <= 1000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function(nums) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(movesToMakeZigzag("param"), "expect", "Case 1");
assert.deepEqual(movesToMakeZigzag("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
