/**
 * https://leetcode-cn.com/problems/partition-array-into-disjoint-intervals/
 * 0915.分割数组
 * 难度：中等
 * 
 * 给定一个数组 A，将其划分为两个不相交（没有公共元素）的连续子数组 left 和 right， 使得：
 *   - left 中的每个元素都小于或等于 right 中的每个元素。
 *   - left 和 right 都是非空的。
 *   - left 要尽可能小。
 * 
 * 在完成这样的分组后返回 left 的长度。可以保证存在这样的划分方法。
 * 
 * 示例 1：
 * 输入：[5,0,3,8,6]
 * 输出：3
 * 解释：left = [5,0,3]，right = [8,6]
 * 
 * 示例 2：
 * 输入：[1,1,1,0,6,12]
 * 输出：4
 * 解释：left = [1,1,1,0]，right = [6,12]
 * 
 * 提示：
 *   - 2 <= A.length <= 30000
 *   - 0 <= A[i] <= 10^6
 *   - 可以保证至少有一种方法能够按题目所描述的那样对 A 进行划分。
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function(A) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(partitionDisjoint("param"), "expect", "caseName");
assert.deepEqual(partitionDisjoint("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
