/*
 * https://leetcode-cn.com/problems/longest-palindromic-substring
 * 0005.最长回文子串
 * 
 * 题目描述
 * 评论 (400)
 * 题解
 * 提交记录
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 示例 2：
 * 输入: "cbbd"
 * 输出: "bb"
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let p = s.length ? s[0] : "", r = 1;
    //如果一个字串正反一样则暂存为结果
    let check = u => u.split("").reverse().join("") === u ? p = u : null;
    for (let i = 1; i <= s.length - r; i++) {
        r = Math.ceil(p.length / 2); //回文半径
        check(s.slice(i - r, i + r)); //检查偶数长度的回文
        check(s.slice(i - r, i + r + 1)); //检查奇数长度的回文
    }
    return p;
};

var assert = require('assert');
assert.equal(longestPalindrome("a"), "a");
assert.equal(longestPalindrome(""), "");
assert.equal(longestPalindrome("bb"), "bb");
assert.equal(longestPalindrome("bbbbb"), "bbbbb");
assert.equal(longestPalindrome("babad"), "bab");
assert.equal(longestPalindrome("cbbd"), "bb");
assert.equal(longestPalindrome("abcba"), "abcba");
assert.equal(longestPalindrome("abcbaabcba"), "abcbaabcba");
assert.equal(longestPalindrome("abcbababcba"), "abcbababcba");

console.log("All case passed")