/**
 * https://leetcode-cn.com/problems/string-rotation-lcci/
 * 面试题 01.09.字符串轮转
 * 难度：容易
 * 
 * 字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。
 * 
 * 示例1:
 *  输入：s1 = "waterbottle", s2 = "erbottlewat"
 *  输出：True
 * 
 * 示例2:
 *  输入：s1 = "aa", "aba"
 *  输出：False
 * 
 * 提示：
 * 字符串长度在[0, 100000]范围内。
 * 
 * 说明:
 * 
 * 你能只调用一次检查子串的方法吗？
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function(s1, s2) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(isFlipedString("param"), "expect", "Case 1");
assert.deepEqual(isFlipedString("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
