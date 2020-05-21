/**
 * https://leetcode-cn.com/problems/check-balance-lcci/
 * 面试题 04.04.检查平衡性
 * 难度：容易
 * 
 * 实现一个函数，检查二叉树是否平衡。在这个问题中，平衡树的定义如下：任意一个节点，其两棵子树的高度差不超过 1。示例 1:给定二叉树 [3,9,20,null,null,15,7]    3   / &#92  9  20    /  &#92   15   7返回 true 。示例 2:给定二叉树 [1,2,2,3,3,null,null,4,4]      1     / &#92    2   2   / &#92  3   3 / &#924   4返回 false 。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(isBalanced("param"), "expect", "Case 1");
assert.deepEqual(isBalanced("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
