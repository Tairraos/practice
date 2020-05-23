/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 * 0020.有效的括号
 * 难度：容易
 * 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 *   - 左括号必须用相同类型的右括号闭合。
 *   - 左括号必须以正确的顺序闭合。
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1：
 * 输入: "()"
 * 输出: true
 * 
 * 示例 2：
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 示例 3：
 * 输入: "(]"
 * 输出: false
 * 
 * 示例 4：
 * 输入: "([)]"
 * 输出: false
 * 
 * 示例 5：
 * 输入: "{[]}"
 * 输出: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(isValid("param"), "expect", "Case 1");
assert.deepEqual(isValid("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
