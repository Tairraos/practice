/**
 * https://leetcode-cn.com/problems/sorted-merge-lcci/
 * 面试题 10.01.合并排序的数组
 * 难度：容易
 * 
 * 给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。
 * 
 * 初始化 A 和 B 的元素数量分别为 m 和 n。
 * 
 * 示例:
 * 输入:
 * A = [1,2,3,0,0,0], m = 3
 * B = [2,5,6],       n = 3
 * 
 * 输出: [1,2,2,3,5,6]
 * 
 * 说明:
 * 
 * A.length == n + m
 */

/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(merge("param"), "expect", "Case 1");
assert.deepEqual(merge("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
