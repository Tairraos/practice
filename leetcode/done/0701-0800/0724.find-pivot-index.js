/**
 * https://leetcode-cn.com/problems/find-pivot-index/
 * 0724.寻找数组的中心索引
 * 难度：容易
 * 
 * 给定一个整数类型的数组 nums，请编写一个能够返回数组“中心索引”的方法。
 * 我们是这样定义数组中心索引的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。
 * 如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。
 * 
 * 示例 1：
 * 输入：
 * nums = [1, 7, 3, 6, 5, 6]
 * 输出: 3
 * 解释：
 * 索引3 (nums[3] = 6) 的左侧数之和(1 + 7 + 3 = 11)，与右侧数之和(5 + 6 = 11)相等。
 * 同时, 3 也是第一个符合要求的中心索引。
 * 
 * 示例 2：
 * 输入：
 * nums = [1, 2, 3]
 * 输出: -1
 * 解释：
 * 数组中不存在满足此条件的中心索引。
 * 
 * 说明：
 *   - nums 的长度范围为 [0, 10000]。
 *   - 任何一个 nums[i] 将会是一个范围在 [-1000, 1000]的整数。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    //sum是数组总和，counter存放扫描数组时从num[0]到当前位置的累计求和值
    var sum = nums.reduce(((x, y) => x + y), 0), counter = 0, answer = -1;
    //扫描数组，累计求和值 乘 2 如果等于 数组总和 + 当前位置值，当前位置就是答案
    nums.some((v, i) => ((counter += v) * 2 === sum + v ? answer = i : -1) !== -1);
    return answer;
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(pivotIndex([1, 7, 3, 6, 5, 6]), 3, "case 0");
assert.deepEqual(pivotIndex([1, 2, 3]), -1, "case 1");
assert.deepEqual(pivotIndex([-1, -1, -1, 0, 1, 1]), 0, "case 2");
assert.deepEqual(pivotIndex([]), -1, "case 3");
assert.deepEqual(pivotIndex([1]), 0, "case 4");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");