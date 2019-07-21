/**
 * https://leetcode-cn.com/problems/valid-palindrome/
 * 0125.验证回文串
 * 难度：容易
 * 
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1：
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 示例 2：
 * 输入: "race a car"
 * 输出: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, ""); //忽略大小写和非字母
    let [start, end] = [0, s.length - 1]; //首尾指针
    while (end > start) //两端逼近
        if (s[start++] !== s[end--]) return false; //有不相等返回false
    return true;
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(isPalindrome("A man, a plan, a canal: Panama"), true, "case 1");
assert.deepEqual(isPalindrome("race a car"), false, "case 2");
assert.deepEqual(isPalindrome("abcdefgfedcba"), true, "case 3");
assert.deepEqual(isPalindrome("abcdeffedcba"), true, "case 4");
assert.deepEqual(isPalindrome(""), true, "case 5");
assert.deepEqual(isPalindrome("abcdefgedcba"), false, "case 6");
assert.deepEqual(isPalindrome("abcdeffgdcba"), false, "case 7");
assert.deepEqual(isPalindrome("abcbbffddcba"), false, "case 8");
assert.deepEqual(isPalindrome("0P"), false, "case 8");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");