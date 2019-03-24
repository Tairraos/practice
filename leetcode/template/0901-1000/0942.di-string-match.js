/**
 * https://leetcode-cn.com/problems/di-string-match/
 * 0942.增减字符串匹配
 * 难度：容易
 * 
 * 给定只含 "I"（增大）或 "D"（减小）的字符串 S ，令 N = S.length。
 * 返回 [0, 1, ..., N] 的任意排列 A 使得对于所有 i = 0, ..., N-1，都有：
 *   - 如果 S[i] == "I"，那么 A[i] < A[i+1]
 *   - 如果 S[i] == "D"，那么 A[i] > A[i+1]
 * 
 * 示例 1：
 * 输出："IDID"
 * 输出：[0,4,1,3,2]
 * 
 * 示例 2：
 * 输出："III"
 * 输出：[0,1,2,3]
 * 
 * 示例 3：
 * 输出："DDI"
 * 输出：[3,2,0,1]
 * 
 * 提示：
 *   - 1 <= S.length <= 1000
 *   - S 只包含字符 "I" 或 "D"。
 */

/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(diStringMatch("参数"), "期望结果");
assert.deepEqual(diStringMatch("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
