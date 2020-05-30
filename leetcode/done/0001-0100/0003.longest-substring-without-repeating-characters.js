/**
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * 0003.无重复字符的最长子串
 * 难度：中等
 * 
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 示例 1：
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 示例 2：
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 示例 3：
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 *      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let lens = s.length % 1, ns = s.split("");
    for (let i = 0; i < ns.length; i++) {
        for (let j = i + lens; j <= ns.length; j++) { //加上目前找到的最长串长度开始
            if (new Set(ns.slice(i, j)).size === j - i) {
                lens = j - i; //用Set去重后，如果尺寸没有变化说明不重复
            } else break; //尺寸变化则中止本次子循环
        }
    }
    return lens;
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(lengthOfLongestSubstring("abcabcbb"), 3, "Case 1");
assert.deepEqual(lengthOfLongestSubstring("bbbbb"), 1, "Case 2");
assert.deepEqual(lengthOfLongestSubstring("pwwkew"), 3, "Case 3");
assert.deepEqual(lengthOfLongestSubstring(""), 0, "Case 4");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
