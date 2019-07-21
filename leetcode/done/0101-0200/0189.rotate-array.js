/**
 * https://leetcode-cn.com/problems/rotate-array/
 * 0189.旋转数组
 * 难度：容易
 * 
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 
 * 示例 1：
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释：
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 * 
 * 示例 2：
 * 输入: [-1,-100,3,99] 和 k = 2
 * 输出: [3,99,-1,-100]
 * 解释：
 * 向右旋转 1 步: [99,-1,-100,3]
 * 向右旋转 2 步: [3,99,-1,-100]
 * 
 * 说明：
 *   - 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 *   - 要求使用空间复杂度为 O(1) 的原地算法。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) { //题目要求三种解法
    nums.unshift(...nums.splice(-k % nums.length)); //解法 1
    // nums.push(...nums.splice(0, nums.length - k % nums.length)); //解法 2
    // while (k--) nums.unshift(nums.pop()); //解法 3
};

// Local test
let testArr, assert = require("assert");
console.time("Time cost");
testArr = [1, 2, 3, 4, 5, 6, 7];
rotate(testArr, 3);
assert.deepEqual(testArr, [5, 6, 7, 1, 2, 3, 4], "case 1");
testArr = [-1, -100, 3, 99];
rotate(testArr, 2);
assert.deepEqual(testArr, [3, 99, -1, -100], "case 2");
testArr = [];
rotate(testArr, 3);
assert.deepEqual(testArr, [], "case 3");
testArr = [1];
rotate(testArr, 3);
assert.deepEqual(testArr, [1], "case 4");
testArr = [1, 2];
rotate(testArr, 3);
assert.deepEqual(testArr, [2, 1], "case 5");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");