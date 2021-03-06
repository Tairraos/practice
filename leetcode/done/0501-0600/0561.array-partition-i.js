/**
 * https://leetcode-cn.com/problems/array-partition-i/
 * 0561.数组拆分 I
 * 难度：容易
 * 
 * 给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 n 的 min(ai, bi) 总和最大。
 * 
 * 示例 1：
 * 输入: [1,4,3,2]
 * 
 * 输出: 4
 * 解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
 * 
 * 提示：
 *   - n 是正整数,范围在 [1, 10000].
 *   - 数组中的元素范围在 [-10000, 10000].
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    //排序，留下第0,2,4...个元素，求和
    return nums.sort((a, b) => a - b).filter((v, i) => !(i % 2)).reduce((a, b) => a + b, 0);
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(arrayPairSum([1, 4, 3, 2]), 4, "case 1");
assert.deepEqual(arrayPairSum([]), 0, "case 1");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");