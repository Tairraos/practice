/**
 * https://leetcode-cn.com/problems/length-of-last-word/
 * 0058.最后一个单词的长度
 * 难度：容易
 * 
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 * 如果不存在最后一个单词，请返回 0 。
 * 
 * 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 * 
 * 示例：
 * 输入: "Hello World"
 * 输出: 5
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(lengthOfLastWord("param"), "expect", "Case 1");
assert.deepEqual(lengthOfLastWord("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
