/**
 * https://leetcode-cn.com/problems/sequential-digits/
 * 1291.顺次数
 * 难度：中等
 * 
 * 我们定义「顺次数」为：每一位上的数字都比前一位上的数字大 1 的整数。
 * 
 * 请你返回由 [low, high] 范围内所有顺次数组成的 有序 列表（从小到大排序）。
 * 
 * 示例 1：
 * 输出：low = 100, high = 300
 * 输出：[123,234]
 * 
 * 示例 2：
 * 输出：low = 1000, high = 13000
 * 输出：[1234,2345,3456,4567,5678,6789,12345]
 * 
 * 提示：
 * 10 <= low <= high <= 10^9
 */

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(sequentialDigits("param"), "expect", "Case 1");
assert.deepEqual(sequentialDigits("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
