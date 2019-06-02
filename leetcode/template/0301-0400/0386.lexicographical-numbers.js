/**
 * https://leetcode-cn.com/problems/lexicographical-numbers/
 * 0386.字典序排数
 * 难度：中等
 * 
 * 给定一个整数 n, 返回从 1 到 n 的字典顺序。
 * 
 * 例如，
 * 给定 n =1 3，返回 [1,10,11,12,13,2,3,4,5,6,7,8,9] 。
 * 请尽可能的优化算法的时间复杂度和空间复杂度。 输入的数据 n 小于等于 5,000,000。
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(lexicalOrder("param"), "expect", "caseName");
assert.deepEqual(lexicalOrder("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
