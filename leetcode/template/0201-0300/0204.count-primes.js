/**
 * https://leetcode-cn.com/problems/count-primes/
 * 0204.计数质数
 * 难度：容易
 * 
 * 统计所有小于非负整数 n 的质数的数量。
 * 
 * 示例：
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(countPrimes("param"), "expect", "Case 1");
assert.deepEqual(countPrimes("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
