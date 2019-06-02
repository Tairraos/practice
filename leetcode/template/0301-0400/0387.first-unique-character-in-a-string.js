/**
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * 0387.字符串中的第一个唯一字符
 * 难度：容易
 * 
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 案例：
 * s = "leetcode"
 * 返回 0.
 * 
 * s = "loveleetcode",
 * 返回 2.
 * 
 * 注意事项：您可以假定该字符串只包含小写字母。
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(firstUniqChar("param"), "expect", "caseName");
assert.deepEqual(firstUniqChar("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
