/**
 * https://leetcode-cn.com/problems/single-element-in-a-sorted-array/
 * 0540.有序数组中的单一元素
 * 难度：中等
 * 
 * 给定一个只包含整数的有序数组，每个元素都会出现两次，唯有一个数只会出现一次，找出这个数。
 * 
 * 示例 1：
 * 输入: [1,1,2,3,3,4,4,8,8]
 * 输出: 2
 * 
 * 示例 2：
 * 输入: [3,3,7,7,10,11,11]
 * 输出: 10
 * 
 * 注意: 您的方案应该在 O(log n)时间复杂度和 O(1)空间复杂度中运行。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(singleNonDuplicate("param"), "expect", "caseName");
assert.deepEqual(singleNonDuplicate("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
