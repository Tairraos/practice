/**
 * https://leetcode-cn.com/problems/count-numbers-with-unique-digits/
 * 0357.计算各个位数不同的数字个数
 * 难度：中等
 * 
 * 给定一个非负整数 n，计算各位数字都不同的数字 x 的个数，其中 0 ≤ x < 10^n 。
 * 
 * 示例：
 * 输入: 2
 * 输出: 91
 * 解释: 答案应为除去 11,22,33,44,55,66,77,88,99 外，在 [0,100) 区间内的所有数字。
 */

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(countNumbersWithUniqueDigits("参数"), "期望结果");
assert.deepEqual(countNumbersWithUniqueDigits("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
