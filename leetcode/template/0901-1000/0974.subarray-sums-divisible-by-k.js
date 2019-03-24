/**
 * https://leetcode-cn.com/problems/subarray-sums-divisible-by-k/
 * 0974.和可被 K 整除的子数组
 * 难度：中等
 * 
 * 给定一个整数数组 A，返回其中元素之和可被 K 整除的（连续、非空）子数组的数目。
 * 
 * 示例：
 * 输入：A = [4,5,0,-2,-3,1], K = 5
 * 输出：7
 * 解释：
 * 有 7 个子数组满足其元素之和可被 K = 5 整除：
 * [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
 * 
 * 提示：
 *   - 1 <= A.length <= 30000
 *   - -10000 <= A[i] <= 10000
 *   - 2 <= K <= 10000
 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(subarraysDivByK("参数"), "期望结果");
assert.deepEqual(subarraysDivByK("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
