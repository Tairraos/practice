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
var lengthOfLongestSubstring = function (s) {
    let lens = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + lens; j <= s.length; j++) { //加上目前找到的最长串长度开始
            //如果去重后长度未变说明不重复
            if ([...new Set(s.slice(i, j).split(""))].length === j - i) {
                lens = j - i;
            } else break; //长度有变化则中止本次子循环
        }
    }
    return lens;
};