/**
 * https://leetcode-cn.com/problems/split-array-largest-sum/
 * 0410.分割数组的最大值
 * 难度：困难
 * 
 * 给定一个非负整数数组和一个整数 m，你需要将这个数组分成 m 个非空的连续子数组。设计一个算法使得这 m 个子数组各自和的最大值最小。
 * 
 * 注意：
 * 数组长度 n 满足以下条件：
 *   - 1 ≤ n ≤ 1000
 *   - 1 ≤ m ≤ min(50, n)
 * 
 * 示例：
 * 输入：
 * nums = [7,2,5,10,8]
 * m = 2
 * 
 * 输出：
 * 18
 * 
 * 解释：
 * 一共有四种方法将nums分割为2个子数组。
 * 其中最好的方式是将其分为[7,2,5] 和 [10,8]，
 * 因为此时这两个子数组各自的和的最大值为18，在所有情况中最小。
 */

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(splitArray("param"), "expect", "caseName");
assert.deepEqual(splitArray("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
