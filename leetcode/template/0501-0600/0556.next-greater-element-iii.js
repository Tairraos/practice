/**
 * https://leetcode-cn.com/problems/next-greater-element-iii/
 * 0556.下一个更大元素 III
 * 难度：中等
 * 
 * 给定一个32位正整数 n，你需要找到最小的32位整数，其与 n 中存在的位数完全相同，并且其值大于n。如果不存在这样的32位整数，则返回-1。
 * 
 * 示例 1：
 * 输入: 12
 * 输出: 21
 * 
 * 示例 2：
 * 输入: 21
 * 输出: -1
 */

/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(nextGreaterElement("param"), "expect", "caseName");
assert.deepEqual(nextGreaterElement("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
