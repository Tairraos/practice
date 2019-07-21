/**
 * https://leetcode-cn.com/problems/partition-array-for-maximum-sum/
 * 1043.分隔数组以得到最大和
 * 难度：中等
 * 
 * 给出整数数组 A，将该数组分隔为长度最多为 K 的几个（连续）子数组。分隔完成后，每个子数组的中的值都会变为该子数组中的最大值。
 * 
 * 返回给定数组完成分隔后的最大和。
 * 
 * 示例：
 * 输入：A = [1,15,7,9,2,5,10], K = 3
 * 输出：84
 * 解释：A 变为 [15,15,15,9,10,10,10]
 * 
 * 提示：
 * 1 <= K <= A.length <= 500
 * 0 <= A[i] <= 10^6
 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var maxSumAfterPartitioning = function(A, K) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(maxSumAfterPartitioning("param"), "expect", "caseName");
assert.deepEqual(maxSumAfterPartitioning("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
