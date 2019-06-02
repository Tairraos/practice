/**
 * https://leetcode-cn.com/problems/monotonic-array/
 * 0896.单调数列
 * 难度：容易
 * 
 * 如果数组是单调递增或单调递减的，那么它是单调的。
 * 如果对于所有 i <= j，A[i] <= A[j]，那么数组 A 是单调递增的。 如果对于所有 i <= j，A[i]> = A[j]，那么数组 A 是单调递减的。
 * 当给定的数组 A 是单调数组时返回 true，否则返回 false。
 * 
 * 示例 1：
 * 输入：[1,2,2,3]
 * 输出：true
 * 
 * 示例 2：
 * 输入：[6,5,4,4]
 * 输出：true
 * 
 * 示例 3：
 * 输入：[1,3,2]
 * 输出：false
 * 
 * 示例 4：
 * 输入：[1,2,4,5]
 * 输出：true
 * 
 * 示例 5：
 * 输入：[1,1,1]
 * 输出：true
 * 
 * 提示：
 *   - 1 <= A.length <= 50000
 *   - -100000 <= A[i] <= 100000
 */

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(isMonotonic("param"), "expect", "caseName");
assert.deepEqual(isMonotonic("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
