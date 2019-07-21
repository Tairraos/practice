/**
 * https://leetcode-cn.com/problems/perfect-number/
 * 0507.完美数
 * 难度：容易
 * 
 * 对于一个 正整数，如果它和除了它自身以外的所有正因子之和相等，我们称它为“完美数”。
 * 给定一个 正整数 n， 如果他是完美数，返回 True，否则返回 False
 * 
 * 示例：
 * 输入: 28
 * 输出: True
 * 解释: 28 = 1 + 2 + 4 + 7 + 14
 * 
 * 注意：
 * 输入的数字 n 不会超过 100,000,000. (1e8)
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(checkPerfectNumber("param"), "expect", "caseName");
assert.deepEqual(checkPerfectNumber("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
