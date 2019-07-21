/**
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * 0105.从前序与中序遍历序列构造二叉树
 * 难度：中等
 * 
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 * 
 * 注意：
 * 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 * 返回如下的二叉树：
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
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

assert.deepEqual(buildTree("param"), "expect", "caseName");
assert.deepEqual(buildTree("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
