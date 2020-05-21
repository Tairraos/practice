/**
 * https://leetcode-cn.com/problems/bracket-lcci/
 * 面试题 08.09.括号
 * 难度：中等
 * 
 * 括号。设计一种算法，打印n对括号的所有合法的（例如，开闭一一对应）组合。
 * 
 * 说明：解集不能包含重复的子集。
 * 
 * 例如，给出 n = 3，生成结果为：
 * 
 * [
 *   "((()))",
 * "(()())",
 * "(())()",
 * "()(())",
 * "()()()"
 * ]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(generateParenthesis("param"), "expect", "Case 1");
assert.deepEqual(generateParenthesis("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
