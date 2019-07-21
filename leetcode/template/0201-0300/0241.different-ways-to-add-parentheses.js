/**
 * https://leetcode-cn.com/problems/different-ways-to-add-parentheses/
 * 0241.为运算表达式设计优先级
 * 难度：中等
 * 
 * 给定一个含有数字和运算符的字符串，为表达式添加括号，改变其运算优先级以求出不同的结果。你需要给出所有可能的组合的结果。有效的运算符号包含 +, - 以及 * 。
 * 
 * 示例 1：
 * 输入: "2-1-1"
 * 输出: [0, 2]
 * 解释：
 * ((2-1)-1) = 0
 * (2-(1-1)) = 2
 * 
 * 示例 2：
 * 输入: "2*3-4*5"
 * 输出: [-34, -14, -10, -10, 10]
 * 解释：
 * (2*(3-(4*5))) = -34
 * ((2*3)-(4*5)) = -14
 * ((2*(3-4))*5) = -10
 * (2*((3-4)*5)) = -10
 * (((2*3)-4)*5) = 10
 */

/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(diffWaysToCompute("param"), "expect", "caseName");
assert.deepEqual(diffWaysToCompute("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
