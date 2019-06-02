/**
 * https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/
 * 0315.计算右侧小于当前元素的个数
 * 难度：困难
 * 
 * 给定一个整数数组 nums，按要求返回一个新数组 counts。数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。
 * 
 * 示例：
 * 输入: [5,2,6,1]
 * 输出: [2,1,1,0]
 * 解释：
 * 5 的右侧有 2 个更小的元素 (2 和 1).
 * 2 的右侧仅有 1 个更小的元素 (1).
 * 6 的右侧有 1 个更小的元素 (1).
 * 1 的右侧有 0 个更小的元素.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(countSmaller("param"), "expect", "caseName");
assert.deepEqual(countSmaller("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
