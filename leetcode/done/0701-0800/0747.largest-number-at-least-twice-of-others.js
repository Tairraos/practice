/**
 * https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/
 * 0747.至少是其他数字两倍的最大数
 * 难度：容易
 * 
 * 在一个给定的数组nums中，总是存在一个最大元素 。
 * 查找数组中的最大元素是否至少是数组中每个其他数字的两倍。
 * 如果是，则返回最大元素的索引，否则返回-1。
 * 
 * 示例 1：
 * 输入: nums = [3, 6, 1, 0]
 * 输出: 1
 * 解释: 6是最大的整数, 对于数组中的其他整数,
 * 6大于数组中其他元素的两倍。6的索引是1, 所以我们返回1.
 * 
 * 示例 2：
 * 输入: nums = [1, 2, 3, 4]
 * 输出: -1
 * 解释: 4没有超过3的两倍大, 所以我们返回 -1.
 * 
 * 提示：
 *   - nums 的长度范围在[1, 50].
 *   - 每个 nums[i] 的整数范围在 [0, 99].
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let i = nums.indexOf(Math.max(...nums)), //最大数字的位置
        v = nums.splice(i, 1)[0]; //把最大数从数组里拿出来，赋值给v
    return nums.map(t => t * 2).some(t => t > v) ? -1 : i; //检查数组成员x2后是否有某个成员比v大
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(dominantIndex([3, 6, 1, 0]), 1, "case 1");
assert.deepEqual(dominantIndex([1, 2, 3, 4]), -1, "case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");