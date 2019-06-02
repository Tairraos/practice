/**
 * https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 * 0167.两数之和 II - 输入有序数组
 * 难度：容易
 * 
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * 
 * 说明：
 *   - 返回的下标值（index1 和 index2）不是从零开始的。
 *   - 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
 * 
 * 示例：
 * 输入: numbers = [2, 7, 11, 15], target = 9
 * 输出: [1,2]
 * 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let [start, end] = [0, numbers.length - 1]; //首尾指针
    while (start < end) { //两端逼近法
        if (numbers[start] + numbers[end] > target) end--; //两数之和大了尾指针左移
        else if (numbers[start] + numbers[end] < target) start++; //两数之和小了首指针右移
        else return [start + 1, end + 1]; //不大不小就是结果
    }
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(twoSum([2, 7, 11, 15], 9), [1, 2], "case 1");
assert.deepEqual(twoSum([1, 2, 7, 11, 15], 9), [2, 3], "case 2");
assert.deepEqual(twoSum([1, 2, 3, 4, 7, 11, 15], 9), [2, 5], "case 3");
assert.deepEqual(twoSum([1, 2, 3, 4, 5, 6, 7], 9), [2, 7], "case 4");
assert.deepEqual(twoSum([1, 2, 3, 4, 5, 6, 7], 13), [6, 7], "case 5");
assert.deepEqual(twoSum([1, 2, 3, 5, 6, 7], 11), [4, 5], "case 6");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");