/**
 * https://leetcode-cn.com/problems/implement-strstr/
 * 0028.实现strStr()
 * 难度：容易
 * 
 * 实现 [strStr()](https://baike.baidu.com/item/strstr) 函数。
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
 * 
 * 示例 1：
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 * 
 * 示例 2：
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 * 
 * 说明：
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 [strstr()](https://baike.baidu.com/item/strstr) 以及 Java的 [indexOf()](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String)) 定义相符。
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let p = -1;
    while (++p <= haystack.length - needle.length)
        if (haystack.slice(p, p + needle.length) === needle) return p;
    return -1;
};

// Local test
let test, assert = require("assert");
console.time("leetcode");

test = ["hello", "ll"];
assert.deepEqual(strStr(test[0], test[1]), test[0].indexOf(test[1]), "case " + test[0]);
test = ["hello", "hello"];
assert.deepEqual(strStr(test[0], test[1]), test[0].indexOf(test[1]), "case " + test[0]);
test = ["hello", ""];
assert.deepEqual(strStr(test[0], test[1]), test[0].indexOf(test[1]), "case " + test[0]);
test = ["", ""];
assert.deepEqual(strStr(test[0], test[1]), test[0].indexOf(test[1]), "case " + test[0]);
test = ["hello", "ll"];
assert.deepEqual(strStr(test[0], test[1]), test[0].indexOf(test[1]), "case " + test[0]);
test = ["hello", "ll"];
assert.deepEqual(strStr(test[0], test[1]), test[0].indexOf(test[1]), "case " + test[0]);
test = ["hello", "ll"];
assert.deepEqual(strStr(test[0], test[1]), test[0].indexOf(test[1]), "case " + test[0]);

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");