/**
 * https://leetcode-cn.com/problems/reverse-vowels-of-a-string/
 * 0345.反转字符串中的元音字母
 * 难度：容易
 * 
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 * 
 * 示例 1：
 * 输入: "hello"
 * 输出: "holle"
 * 
 * 示例 2：
 * 输入: "leetcode"
 * 输出: "leotcede"
 * 
 * 说明：
 * 元音字母不包含字母"y"。
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(reverseVowels("param"), "expect", "Case 1");
assert.deepEqual(reverseVowels("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
