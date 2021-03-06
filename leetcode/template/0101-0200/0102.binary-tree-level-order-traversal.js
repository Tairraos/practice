/**
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * 0102.二叉树的层次遍历
 * 难度：中等
 * 
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
 * 
 * 例如：
 * 给定二叉树: [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 
 * 返回其层次遍历结果：
 * [
 *   [3],
 *   [9,20],
 *   [15,7]
 * ]
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(levelOrder("param"), "expect", "Case 1");
assert.deepEqual(levelOrder("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
