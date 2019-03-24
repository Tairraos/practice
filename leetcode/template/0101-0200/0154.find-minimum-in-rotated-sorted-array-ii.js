/**
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/
 * 0154.寻找旋转排序数组中的最小值 II
 * 难度：困难
 * 
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * ( 例如，数组 [0,1,2,4,5,6,7]  可能变为 [4,5,6,7,0,1,2] )。
 * 请找出其中最小的元素。
 * 
 * 注意数组中可能存在重复的元素。
 * 
 * 示例 1：
 * 输入: [1,3,5]
 * 输出: 1
 * 
 * 示例 2：
 * 输入: [2,2,2,0,1]
 * 输出: 0
 * 
 * 说明：
 *   - 这道题是 [寻找旋转排序数组中的最小值](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/description/) 的延伸题目。
 *   - 允许重复会影响算法的时间复杂度吗？会如何影响，为什么？
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(findMin("参数"), "期望结果");
assert.deepEqual(findMin("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
