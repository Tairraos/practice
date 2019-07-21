/**
 * https://leetcode-cn.com/problems/valid-anagram/
 * 0242.有效的字母异位词
 * 难度：容易
 * 
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。
 * 
 * 示例 1：
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 
 * 示例 2：
 * 输入: s = "rat", t = "car"
 * 输出: false
 * 
 * 说明：
 * 你可以假设字符串只包含小写字母。
 * 
 * 进阶：
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(isAnagram("param"), "expect", "caseName");
assert.deepEqual(isAnagram("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
