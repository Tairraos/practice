/**
 * https://leetcode-cn.com/problems/element-appearing-more-than-25-in-sorted-array/
 * 1287.有序数组中出现次数超过25%的元素
 * 难度：容易
 * 
 * 给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25%。
 * 
 * 请你找到并返回这个整数
 * 
 * 示例：
 * 输入：arr = [1,2,2,6,6,6,6,7,10]
 * 输出：6
 * 
 * 提示：
 * 1 <= arr.length <= 10^4
 * 0 <= arr[i] <= 10^5
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(findSpecialInteger("param"), "expect", "Case 1");
assert.deepEqual(findSpecialInteger("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
