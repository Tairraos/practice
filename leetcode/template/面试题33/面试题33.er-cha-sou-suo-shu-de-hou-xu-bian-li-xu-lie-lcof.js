/**
 * https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/
 * 面试题33.二叉搜索树的后序遍历序列
 * 难度：中等
 * 
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。
 * 
 * 参考以下这颗二叉搜索树：
 * 
 *      5
 *     / \
 *    2   6
 *   / \
 *  1   3
 * 
 * 示例 1：
 * 输入: [1,6,3,2,5]
 * 输出: false
 * 
 * 示例 2：
 * 输入: [1,3,2,6,5]
 * 输出: true
 * 
 * 提示：
 * 数组长度 <= 1000
 */

/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(verifyPostorder("param"), "expect", "Case 1");
assert.deepEqual(verifyPostorder("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
