/**
 * https://leetcode-cn.com/problems/diameter-of-binary-tree/
 * 0543.二叉树的直径
 * 难度：容易
 * 
 * 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过根结点。
 * 
 * 示例：
 * 给定二叉树
 *           1
 *          / \
 *         2   3
 *        / \
 *       4   5
 * 
 * 返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
 * 
 * 注意：两结点之间的路径长度是以它们之间边的数目表示。
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
var diameterOfBinaryTree = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(diameterOfBinaryTree("param"), "expect", "Case 1");
assert.deepEqual(diameterOfBinaryTree("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
