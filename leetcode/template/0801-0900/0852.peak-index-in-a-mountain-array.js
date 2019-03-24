/**
 * https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/
 * 0852.山脉数组的峰顶索引
 * 难度：容易
 * 
 * 我们把符合下列属性的数组 A 称作山脉：
 *   - A.length >= 3
 *   - 存在 0 < i < A.length - 1 使得A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
 * 
 * 给定一个确定为山脉的数组，返回任何满足 A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1] 的 i 的值。
 * 
 * 示例 1：
 * 输入：[0,1,0]
 * 输出：1
 * 
 * 示例 2：
 * 输入：[0,2,1,0]
 * 输出：1
 * 
 * 提示：
 *   - 3 <= A.length <= 10000
 *   - 0 <= A[i] <= 10^6
 *   - A 是如上定义的山脉
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(peakIndexInMountainArray("参数"), "期望结果");
assert.deepEqual(peakIndexInMountainArray("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
