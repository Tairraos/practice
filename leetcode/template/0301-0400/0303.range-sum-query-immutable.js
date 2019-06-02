/**
 * https://leetcode-cn.com/problems/range-sum-query-immutable/
 * 0303.区域和检索 - 数组不可变
 * 难度：容易
 * 
 * 给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。
 * 
 * 示例：
 * 给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()
 * 
 * sumRange(0, 2) -> 1
 * sumRange(2, 5) -> -1
 * sumRange(0, 5) -> -3
 * 
 * 说明：
 *   - 你可以假设数组不可变。
 *   - 会多次调用 sumRange 方法。
 */

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(NumArray("param"), "expect", "caseName");
assert.deepEqual(NumArray("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
