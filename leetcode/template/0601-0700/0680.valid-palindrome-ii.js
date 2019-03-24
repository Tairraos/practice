/**
 * https://leetcode-cn.com/problems/valid-palindrome-ii/
 * 0680.验证回文字符串 Ⅱ
 * 难度：容易
 * 
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * 
 * 示例 1：
 * 输入: "aba"
 * 输出: True
 * 
 * 示例 2：
 * 输入: "abca"
 * 输出: True
 * 解释: 你可以删除c字符。
 * 
 * 注意：
 *   - 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(validPalindrome("参数"), "期望结果");
assert.deepEqual(validPalindrome("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
