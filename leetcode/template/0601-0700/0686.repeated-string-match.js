/**
 * https://leetcode-cn.com/problems/repeated-string-match/
 * 0686.重复叠加字符串匹配
 * 难度：容易
 * 
 * 给定两个字符串 A 和 B, 寻找重复叠加字符串A的最小次数，使得字符串B成为叠加后的字符串A的子串，如果不存在则返回 -1。
 * 举个例子，A = "abcd"，B = "cdabcdab"。
 * 答案为 3， 因为 A 重复叠加三遍后为 “abcdabcdabcd”，此时 B 是其子串；A 重复叠加两遍后为"abcdabcd"，B 并不是其子串。
 * 
 * 注意：
 * A 与 B 字符串的长度在1和10000区间范围内。
 */

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(repeatedStringMatch("参数"), "期望结果");
assert.deepEqual(repeatedStringMatch("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
