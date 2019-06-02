/**
 * https://leetcode-cn.com/problems/longest-palindromic-substring/
 * 0005.最长回文子串
 * 难度：中等
 * 
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 输入: "babad"
 * 输出: "bab"
 * 
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
    let re = ro = 1, p = s.length ? s[0] : "";
    let check = u => u.split("").reverse().join("") === u ? p = u : null; //检查是否回文串
    for (let i = 1; i <= s.length - re;) {
        re = (p.length / 2 | 0) + 1; //待检测偶数字母回文半径
        ro = Math.ceil(p.length / 2); //待检测奇数字母回文半径
        check(s.slice(i - re, i + re)) || check(s.slice(i - ro, i + ro + 1)) ? re >= i ? i++ : null : i++; //没有匹配的话指针向后移
    }
    return p;
};



