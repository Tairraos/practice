/**
 * https://leetcode-cn.com/problems/remove-invalid-parentheses/
 * 0301.删除无效的括号
 * 难度：困难
 * 
 * 删除最小数量的无效括号，使得输入的字符串有效，返回所有可能的结果。
 * 
 * 说明: 输入可能包含了除 ( 和 ) 以外的字符。
 * 
 * 示例 1：
 * 输入: "()())()"
 * 输出: ["()()()", "(())()"]
 * 
 * 示例 2：
 * 输入: "(a)())()"
 * 输出: ["(a)()()", "(a())()"]
 * 
 * 示例 3：
 * 输入: ")("
 * 输出: [""]
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(removeInvalidParentheses("参数"), "期望结果");
assert.deepEqual(removeInvalidParentheses("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
