/**
 * https://leetcode-cn.com/problems/basic-calculator/
 * 0224.基本计算器
 * 难度：困难
 * 
 * 实现一个基本的计算器来计算一个简单的字符串表达式的值。
 * 字符串表达式可以包含左括号 ( ，右括号 )，加号 + ，减号 -，非负整数和空格  。
 * 
 * 示例 1：
 * 输入: "1 + 1"
 * 输出: 2
 * 
 * 示例 2：
 * 输入: " 2-1 + 2 "
 * 输出: 3
 * 
 * 示例 3：
 * 输入: "(1+(4+5+2)-3)+(6+8)"
 * 输出: 23
 * 
 * 说明：
 *   - 你可以假设所给定的表达式都是有效的。
 *   - 请不要使用内置的库函数 eval。
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(calculate("param"), "expect", "caseName");
assert.deepEqual(calculate("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
