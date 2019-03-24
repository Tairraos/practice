/**
 * https://leetcode-cn.com/problems/score-of-parentheses/
 * 0856.括号的分数
 * 难度：中等
 * 
 * 给定一个平衡括号字符串 S，按下述规则计算该字符串的分数：
 *   - () 得 1 分。
 *   - AB 得 A + B 分，其中 A 和 B 是平衡括号字符串。
 *   - (A) 得 2 * A 分，其中 A 是平衡括号字符串。
 * 
 * 示例 1：
 * 输入： "()"
 * 输出： 1
 * 
 * 示例 2：
 * 输入： "(())"
 * 输出： 2
 * 
 * 示例 3：
 * 输入： "()()"
 * 输出： 2
 * 
 * 示例 4：
 * 输入： "(()(()))"
 * 输出： 6
 * 
 * 提示：
 *   - S 是平衡括号字符串，且只含有 ( 和 ) 。
 *   - 2 <= S.length <= 50
 */

/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(scoreOfParentheses("参数"), "期望结果");
assert.deepEqual(scoreOfParentheses("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
