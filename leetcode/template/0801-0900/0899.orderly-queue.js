/**
 * https://leetcode-cn.com/problems/orderly-queue/
 * 0899.有序队列
 * 难度：困难
 * 
 * 给出了一个由小写字母组成的字符串 S。然后，我们可以进行任意次数的移动。
 * 在每次移动中，我们选择前 K 个字母中的一个（从左侧开始），将其从原位置移除，并放置在字符串的末尾。
 * 返回我们在任意次数的移动之后可以拥有的按字典顺序排列的最小字符串。
 * 
 * 示例 1：
 * 输入：S = "cba", K = 1
 * 输出："acb"
 * 解释：
 * 在第一步中，我们将第一个字符（“c”）移动到最后，获得字符串 “bac”。
 * 在第二步中，我们将第一个字符（“b”）移动到最后，获得最终结果 “acb”。
 * 
 * 示例 2：
 * 输入：S = "baaca", K = 3
 * 输出："aaabc"
 * 解释：
 * 在第一步中，我们将第一个字符（“b”）移动到最后，获得字符串 “aacab”。
 * 在第二步中，我们将第三个字符（“c”）移动到最后，获得最终结果 “aaabc”。
 * 
 * 提示：
 *   - 1 <= K <= S.length <= 1000
 *   - S 只由小写字母组成。
 */

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var orderlyQueue = function(S, K) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(orderlyQueue("param"), "expect", "caseName");
assert.deepEqual(orderlyQueue("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
