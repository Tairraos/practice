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
var findMaxConsecutiveOnes = function (nums) {
    //拼成字符串->以0分割成数组->求成员长度->取出最大值
    return Math.max(...nums.join("").split(/0+/).map(i => i.length));
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]), 3, "case 1");
assert.deepEqual(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]), 2, "case 2");
assert.deepEqual(findMaxConsecutiveOnes([]), 0, "case 3");
assert.deepEqual(findMaxConsecutiveOnes([0]), 0, "case 4");
assert.deepEqual(findMaxConsecutiveOnes([1]), 1, "case 5");
assert.deepEqual(findMaxConsecutiveOnes([1, 1, 1, 1, 1]), 5, "case 6");
assert.deepEqual(findMaxConsecutiveOnes([0, 0, 0, 0, 0]), 0, "case 7");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");