/**
 * https://leetcode-cn.com/problems/subarrays-with-k-different-integers/
 * 0992.K 个不同整数的子数组
 * 难度：困难
 * 
 * 给定一个正整数数组 A，如果 A 的某个子数组中不同整数的个数恰好为 K，则称 A 的这个连续、不一定独立的子数组为好子数组。
 * （例如，[1,2,3,1,2] 中有 3 个不同的整数：1，2，以及 3。）
 * 返回 A 中好子数组的数目。
 * 
 * 示例 1：
 * 输出：A = [1,2,1,2,3], K = 2
 * 输入：7
 * 解释：恰好由 2 个不同整数组成的子数组：[1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].
 * 
 * 示例 2：
 * 输入：A = [1,2,1,3,4], K = 3
 * 输出：3
 * 解释：恰好由 3 个不同整数组成的子数组：[1,2,1,3], [2,1,3], [1,3,4].
 * 
 * 提示：
 *   - 1 <= A.length <= 20000
 *   - 1 <= A[i] <= A.length
 *   - 1 <= K <= A.length
 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function(A, K) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(subarraysWithKDistinct("param"), "expect", "Case 1");
assert.deepEqual(subarraysWithKDistinct("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
