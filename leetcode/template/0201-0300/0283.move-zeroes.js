/**
 * https://leetcode-cn.com/problems/move-zeroes/
 * 0283.移动零
 * 难度：容易
 * 
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 
 * 示例：
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 
 * 说明：
 *   - 必须在原数组上操作，不能拷贝额外的数组。
 *   - 尽量减少操作次数。
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(moveZeroes("参数"), "期望结果");
assert.deepEqual(moveZeroes("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
