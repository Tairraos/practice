/**
 * https://leetcode-cn.com/problems/max-consecutive-ones/
 * 0485.最大连续1的个数
 * 难度：容易
 * 
 * 给定一个二进制数组， 计算其中最大连续1的个数。
 * 
 * 示例 1：
 * 输入: [1,1,0,1,1,1]
 * 输出: 3
 * 解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
 * 
 * 注意：
 *   - 输入的数组只包含 0 和1。
 *   - 输入数组的长度是正整数，且不超过 10,000。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(findMaxConsecutiveOnes("param"), "expect", "caseName");
assert.deepEqual(findMaxConsecutiveOnes("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
