/**
 * https://leetcode-cn.com/problems/three-equal-parts/
 * 0927.三等分
 * 难度：困难
 * 
 * 给定一个由 0 和 1 组成的数组 A，将数组分成 3 个非空的部分，使得所有这些部分表示相同的二进制值。
 * 如果可以做到，请返回任何 [i, j]，其中 i+1 < j，这样一来：
 *   - A[0], A[1], ..., A[i] 组成第一部分；
 *   - A[i+1], A[i+2], ..., A[j-1] 作为第二部分；
 *   - A[j], A[j+1], ..., A[A.length - 1] 是第三部分。
 *   - 这三个部分所表示的二进制值相等。
 * 
 * 如果无法做到，就返回 [-1, -1]。
 * 
 * 注意，在考虑每个部分所表示的二进制时，应当将其看作一个整体。例如，[1,1,0] 表示十进制中的 6，而不会是 3。此外，前导零也是被允许的，所以 [0,1,1] 和 [1,1] 表示相同的值。
 * 
 * 示例 1：
 * 输入：[1,0,1,0,1]
 * 输出：[0,3]
 * 
 * 示例 2：
 * 输出：[1,1,0,1,1]
 * 输出：[-1,-1]
 * 
 * 提示：
 *   - 3 <= A.length <= 30000
 *   - A[i] == 0 或 A[i] == 1
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var threeEqualParts = function(A) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(threeEqualParts("param"), "expect", "caseName");
assert.deepEqual(threeEqualParts("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
