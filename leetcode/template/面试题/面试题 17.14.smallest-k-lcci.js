/**
 * https://leetcode-cn.com/problems/smallest-k-lcci/
 * 面试题 17.14.最小K个数
 * 难度：中等
 * 
 * 设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。
 * 
 * 示例：
 * 输入： arr = [1,3,5,7,2,4,6,8], k = 4
 * 输出： [1,2,3,4]
 * 
 * 提示：
 * 0 <= len(arr) <= 100000
 * 0 <= k <= min(100000, len(arr))
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function(arr, k) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(smallestK("param"), "expect", "Case 1");
assert.deepEqual(smallestK("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
