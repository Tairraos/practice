/**
 * https://leetcode-cn.com/problems/best-sightseeing-pair/
 * 1014.最佳观光组合
 * 难度：中等
 * 
 * 给定正整数数组 A，A[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的距离为 j - i。
 * 
 * 一对景点（i < j）组成的观光组合的得分为（A[i] + A[j] + i - j）：景点的评分之和减去它们两者之间的距离。
 * 
 * 返回一对观光景点能取得的最高分。
 * 
 * 示例：
 * 输入：[8,1,5,2,6]
 * 输出：11
 * 解释：i = 0, j = 2, A[i] + A[j] + i - j = 8 + 5 + 0 - 2 = 11
 * 
 * 提示：
 * 2 <= A.length <= 50000
 * 1 <= A[i] <= 1000
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(maxScoreSightseeingPair("参数"), "期望结果");
assert.deepEqual(maxScoreSightseeingPair("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");