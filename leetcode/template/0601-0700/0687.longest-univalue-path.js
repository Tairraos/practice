/**
 * https://leetcode-cn.com/problems/longest-univalue-path/
 * 0687.最长同值路径
 * 难度：容易
 * 
 * 给定一个二叉树，找到最长的路径，这个路径中的每个节点具有相同值。 这条路径可以经过也可以不经过根节点。
 * 
 * 注意：两个节点之间的路径长度由它们之间的边数表示。
 * 
 * 示例 1：
 * 输入：
 *               5
 *              / \
 *             4   5
 *            / \   \
 *           1   1   5
 * 
 * 输出：
 * 2
 * 
 * 示例 2：
 * 输入：
 *               1
 *              / \
 *             4   5
 *            / \   \
 *           4   4   5
 * 
 * 输出：
 * 2
 * 
 * 注意: 给定的二叉树不超过10000个结点。 树的高度不超过1000。
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
var longestUnivaluePath = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(longestUnivaluePath("param"), "expect", "Case 1");
assert.deepEqual(longestUnivaluePath("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
