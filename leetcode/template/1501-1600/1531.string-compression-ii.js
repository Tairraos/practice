/**
 * https://leetcode-cn.com/problems/string-compression-ii/
 * 1531.压缩字符串 II
 * 难度：困难
 * 
 * 行程长度编码 是一种常用的字符串压缩方法，它将连续的相同字符（重复 2 次或更多次）替换为字符和表示字符计数的数字（行程长度）。例如，用此方法压缩字符串 "aabccc" ，将 "aa" 替换为 "a2" ，"ccc" 替换为` "c3" 。因此压缩后的字符串变为 "a2bc3" 。
 * 
 * 注意，本问题中，压缩时没有在单个字符后附加计数 &#39;1&#39; 。
 * 
 * 给你一个字符串 s 和一个整数 k 。你需要从字符串 s 中删除最多 k 个字符，以使 s 的行程长度编码长度最小。
 * 
 * 请你返回删除最多 k 个字符后，s 行程长度编码的最小长度 。
 * 
 * 示例 1：
 * 输入：s = "aaabcccd", k = 2
 * 输出：4
 * 解释：在不删除任何内容的情况下，压缩后的字符串是 "a3bc3d" ，长度为 6 。最优的方案是删除 &#39;b&#39; 和 &#39;d&#39;，这样一来，压缩后的字符串为 "a3c3" ，长度是 4 。
 * 
 * 示例 2：
 * 输入：s = "aabbaa", k = 2
 * 输出：2
 * 解释：如果删去两个 &#39;b&#39; 字符，那么压缩后的字符串是长度为 2 的 "a4" 。
 * 
 * 示例 3：
 * 输入：s = "aaaaaaaaaaa", k = 0
 * 输出：3
 * 解释：由于 k 等于 0 ，不能删去任何字符。压缩后的字符串是 "a11" ，长度为 3 。
 * 
 * 提示：
 * 1 <= s.length <= 100
 * 0 <= k <= s.length
 * s 仅包含小写英文字母
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function(s, k) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(getLengthOfOptimalCompression("param"), "expect", "Case 1");
assert.deepEqual(getLengthOfOptimalCompression("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
