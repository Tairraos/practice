/**
 * https://leetcode-cn.com/problems/boolean-evaluation-lcci/
 * 面试题 08.14.布尔运算
 * 难度：中等
 * 
 * 给定一个布尔表达式和一个期望的布尔结果 result，布尔表达式由 0 (false)、1 (true)、&amp; (AND)、 | (OR) 和 ^ (XOR) 符号组成。实现一个函数，算出有几种可使该表达式得出 result 值的括号方法。
 * 
 * 示例 1:
 * 输入: s = "1^0|0|1", result = 0
 * 
 * 输出: 2
 * 解释: 两种可能的括号方法是
 * 1^(0|(0|1))
 * 1^((0|0)|1)
 * 
 * 示例 2:
 * 输入: s = "0&amp;0&amp;0&amp;1^1|0", result = 1
 * 
 * 输出: 10
 * 
 * 提示：
 * 运算符的数量不超过 19 个
 */

/**
 * @param {string} s
 * @param {number} result
 * @return {number}
 */
var countEval = function(s, result) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(countEval("param"), "expect", "Case 1");
assert.deepEqual(countEval("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
