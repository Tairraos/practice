/**
 * https://leetcode-cn.com/problems/find-longest-awesome-substring/
 * 1542.找出最长的超赞子字符串
 * 难度：困难
 * 
 * 给你一个字符串 s 。请返回 s 中最长的 超赞子字符串 的长度。
 * 
 * 「超赞子字符串」需满足满足下述两个条件：
 * 
 * 该字符串是 s 的一个非空子字符串
 * 进行任意次数的字符交换后，该字符串可以变成一个回文字符串
 * 
 * 示例 1：
 * 输入：s = "3242415"
 * 输出：5
 * 解释："24241" 是最长的超赞子字符串，交换其中的字符后，可以得到回文 "24142"
 * 
 * 示例 2：
 * 输入：s = "12345678"
 * 输出：1
 * 
 * 示例 3：
 * 输入：s = "213123"
 * 输出：6
 * 解释："213123" 是最长的超赞子字符串，交换其中的字符后，可以得到回文 "231132"
 * 
 * 示例 4：
 * 输入：s = "00"
 * 输出：2
 * 
 * 提示：
 * 1 <= s.length <= 10^5
 * s 仅由数字组成
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestAwesome = function(s) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(longestAwesome("param"), "expect", "Case 1");
assert.deepEqual(longestAwesome("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
