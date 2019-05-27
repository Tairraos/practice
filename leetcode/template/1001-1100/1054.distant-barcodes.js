/**
 * https://leetcode-cn.com/problems/distant-barcodes/
 * 1054.距离相等的条形码
 * 难度：中等
 * 
 * 在一个仓库里，有一排条形码，其中第 i 个条形码为 barcodes[i]。
 * 
 * 请你重新排列这些条形码，使其中两个相邻的条形码 不能 相等。 你可以返回任何满足该要求的答案，此题保证存在答案。
 * 
 * 示例 1：
 * 输入：[1,1,1,2,2,2]
 * 输出：[2,1,2,1,2,1]
 * 
 * 示例 2：
 * 输入：[1,1,1,1,2,2,3,3]
 * 输出：[1,3,1,3,2,1,2,1]
 * 
 * 提示：
 * 1 <= barcodes.length <= 10000
 * 1 <= barcodes[i] <= 10000
 */

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(rearrangeBarcodes("参数"), "期望结果");
assert.deepEqual(rearrangeBarcodes("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
