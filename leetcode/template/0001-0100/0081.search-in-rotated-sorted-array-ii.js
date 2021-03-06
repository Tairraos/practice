/**
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/
 * 0081.搜索旋转排序数组 II
 * 难度：中等
 * 
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * ( 例如，数组 [0,0,1,2,2,5,6] 可能变为 [2,5,6,0,0,1,2] )。
 * 编写一个函数来判断给定的目标值是否存在于数组中。若存在返回 true，否则返回 false。
 * 
 * 示例 1：
 * 输入: nums = [2,5,6,0,0,1,2], target = 0
 * 输出: true
 * 
 * 示例 2：
 * 输入: nums = [2,5,6,0,0,1,2], target = 3
 * 输出: false
 * 
 * 进阶：
 *   - 这是 [搜索旋转排序数组](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/description/) 的延伸题目，本题中的 nums  可能包含重复元素。
 *   - 这会影响到程序的时间复杂度吗？会有怎样的影响，为什么？
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(search("param"), "expect", "Case 1");
assert.deepEqual(search("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
