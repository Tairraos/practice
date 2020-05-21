/**
 * https://leetcode-cn.com/problems/closest-divisors/
 * 1362.最接近的因数
 * 难度：中等
 * 
 * 给你一个整数 num，请你找出同时满足下面全部要求的两个整数：
 * 
 * 两数乘积等于  num + 1 或 num + 2
 * 以绝对差进行度量，两数大小最接近
 * 
 * 你可以按任意顺序返回这两个整数。
 * 
 * 示例 1：
 * 输入：num = 8
 * 输出：[3,3]
 * 解释：对于 num + 1 = 9，最接近的两个因数是 3 &amp; 3；对于 num + 2 = 10, 最接近的两个因数是 2 &amp; 5，因此返回 3 &amp; 3 。
 * 
 * 示例 2：
 * 输入：num = 123
 * 输出：[5,25]
 * 
 * 示例 3：
 * 输入：num = 999
 * 输出：[40,25]
 * 
 * 提示：
 * 1 <= num <= 10^9
 */

/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function(num) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(closestDivisors("param"), "expect", "Case 1");
assert.deepEqual(closestDivisors("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
