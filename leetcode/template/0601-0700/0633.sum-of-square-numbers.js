/**
 * https://leetcode-cn.com/problems/sum-of-square-numbers/
 * 0633.平方数之和
 * 难度：容易
 * 
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a^2 + b^2 = c。
 * 
 * 示例1：
 * 输入: 5
 * 输出: True
 * 解释: 1 * 1 + 2 * 2 = 5
 * 
 * 示例2：
 * 输入: 3
 * 输出: False
 */

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(judgeSquareSum("param"), "expect", "caseName");
assert.deepEqual(judgeSquareSum("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
