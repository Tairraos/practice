/**
 * https://leetcode-cn.com/problems/number-of-segments-in-a-string/
 * 0434.字符串中的单词数
 * 难度：容易
 * 
 * 统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。
 * 请注意，你可以假定字符串里不包括任何不可打印的字符。
 * 
 * 示例：
 * 输入: "Hello, my name is John"
 * 输出: 5
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(countSegments("param"), "expect", "Case 1");
assert.deepEqual(countSegments("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
