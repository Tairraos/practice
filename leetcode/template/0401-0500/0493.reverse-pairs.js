/**
 * https://leetcode-cn.com/problems/reverse-pairs/
 * 0493.翻转对
 * 难度：困难
 * 
 * 给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。
 * 你需要返回给定数组中的重要翻转对的数量。
 * 
 * 示例 1：
 * 输入: [1,3,2,3,1]
 * 输出: 2
 * 
 * 示例 2：
 * 输入: [2,4,3,5,1]
 * 输出: 3
 * 
 * 注意：
 *   - 给定数组的长度不会超过50000。
 *   - 输入数组中的所有数字都在32位整数的表示范围内。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(reversePairs("参数"), "期望结果");
assert.deepEqual(reversePairs("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
