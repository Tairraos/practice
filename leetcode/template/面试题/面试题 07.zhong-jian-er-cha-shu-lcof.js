/**
 * https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
 * 面试题 07.重建二叉树
 * 难度：中等
 * 
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 
 * 例如，给出
 * 
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 * 
 * 返回如下的二叉树：
 * 
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 
 * 限制：
 * 
 * 0 <= 节点个数 <= 5000
 * 
 * 注意：本题与主站 105 题重复：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(buildTree("param"), "expect", "Case 1");
assert.deepEqual(buildTree("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
