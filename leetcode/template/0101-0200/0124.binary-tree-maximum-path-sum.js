/**
 * https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
 * 0124.二叉树中的最大路径和
 * 难度：困难
 * 
 * 给定一个非空二叉树，返回其最大路径和。
 * 本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。
 * 
 * 示例 1：
 * 输入: [1,2,3]
 * 
 *        1
 *       / \
 *      2   3
 * 
 * 输出: 6
 * 
 * 示例 2：
 * 输入: [-10,9,20,null,null,15,7]
 * 
 *    -10
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 
 * 输出: 42
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
 * @return {number}
 */
var maxPathSum = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(maxPathSum("param"), "expect", "caseName");
assert.deepEqual(maxPathSum("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
