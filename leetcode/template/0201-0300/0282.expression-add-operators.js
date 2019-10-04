/**
 * https://leetcode-cn.com/problems/expression-add-operators/
 * 0282.给表达式添加运算符
 * 难度：困难
 * 
 * 给定一个仅包含数字 0-9 的字符串和一个目标值，在数字之间添加二元运算符（不是一元）+、- 或 * ，返回所有能够得到目标值的表达式。
 * 
 * 示例 1：
 * 输入: num = "123", target = 6
 * 输出: ["1+2+3", "1*2*3"]
 * 
 * 示例 2：
 * 输入: num = "232", target = 8
 * 输出: ["2*3+2", "2+3*2"]
 * 
 * 示例 3：
 * 输入: num = "105", target = 5
 * 输出: ["1*0+5","10-5"]
 * 
 * 示例 4：
 * 输入: num = "00", target = 0
 * 输出: ["0+0", "0-0", "0*0"]
 * 
 * 示例 5：
 * 输入: num = "3456237490", target = 9191
 * 输出: []
 */

/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(addOperators("param"), "expect", "Case 1");
assert.deepEqual(addOperators("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
