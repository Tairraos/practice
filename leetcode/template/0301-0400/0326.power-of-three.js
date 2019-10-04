/**
 * https://leetcode-cn.com/problems/power-of-three/
 * 0326.3的幂
 * 难度：容易
 * 
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。
 * 
 * 示例 1：
 * 输入: 27
 * 输出: true
 * 
 * 示例 2：
 * 输入: 0
 * 输出: false
 * 
 * 示例 3：
 * 输入: 9
 * 输出: true
 * 
 * 示例 4：
 * 输入: 45
 * 输出: false
 * 
 * 进阶：
 * 你能不使用循环或者递归来完成本题吗？
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(isPowerOfThree("param"), "expect", "Case 1");
assert.deepEqual(isPowerOfThree("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
