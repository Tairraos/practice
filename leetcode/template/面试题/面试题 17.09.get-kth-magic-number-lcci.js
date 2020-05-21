/**
 * https://leetcode-cn.com/problems/get-kth-magic-number-lcci/
 * 面试题 17.09.第 k 个数
 * 难度：中等
 * 
 * 有些数的素因子只有 3，5，7，请设计一个算法找出第 k 个数。注意，不是必须有这些素因子，而是必须不包含其他的素因子。例如，前几个数按顺序应该是 1，3，5，7，9，15，21。
 * 
 * 示例 1:
 * 输入: k = 5
 * 
 * 输出: 9
 */

/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function(k) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(getKthMagicNumber("param"), "expect", "Case 1");
assert.deepEqual(getKthMagicNumber("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
