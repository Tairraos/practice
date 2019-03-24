/**
 * https://leetcode-cn.com/problems/degree-of-an-array/
 * 0697.数组的度
 * 难度：容易
 * 
 * 给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。
 * 你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
 * 
 * 示例 1：
 * 输入: [1, 2, 2, 3, 1]
 * 输出: 2
 * 解释：
 * 输入数组的度是2，因为元素1和2的出现频数最大，均为2.
 * 连续子数组里面拥有相同度的有如下所示：
 * [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 * 最短连续子数组[2, 2]的长度为2，所以返回2.
 * 
 * 示例 2：
 * 输入: [1,2,2,3,1,4,2]
 * 输出: 6
 * 
 * 注意：
 *   - nums.length 在1到50,000区间范围内。
 *   - nums[i] 是一个在0到49,999范围内的整数。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(findShortestSubArray("参数"), "期望结果");
assert.deepEqual(findShortestSubArray("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
