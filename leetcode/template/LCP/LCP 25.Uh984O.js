/**
 * https://leetcode-cn.com/problems/Uh984O/
 * LCP 25.古董键盘
 * 难度：困难
 * 
 * 小扣在秋日市集购买了一个古董键盘。由于古董键盘年久失修，键盘上只有 26 个字母 **a~z** 可以按下，且每个字母最多仅能被按 `k` 次。
 * 
 * 小扣随机按了 `n` 次按键，请返回小扣总共有可能按出多少种内容。由于数字较大，最终答案需要对 1000000007 (1e9 + 7) 取模。
 * 
 * **示例 1：**
 * >输入：`k = 1, n = 1`
 * > 
 * >输出：`26`
 * > 
 * >解释：由于只能按一次按键，所有可能的字符串为 "a", "b", ... "z" 
 * 
 * **示例 2：**
 * >输入：`k = 1, n = 2`
 * > 
 * >输出：`650`
 * > 
 * >解释：由于只能按两次按键，且每个键最多只能按一次，所有可能的字符串（按字典序排序）为 "ab", "ac", ... "zy" 
 * 
 * **提示：**
 * - `1 <= k <= 5`
 * - `1 <= n <= 26*k`
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var keyboard = function(k, n) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(keyboard("param"), "expect", "Case 1");
assert.deepEqual(keyboard("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
