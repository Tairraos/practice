/**
 * https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/
 * 面试题55 - I.二叉树的深度
 * 难度：容易
 * 
 * 输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
 * 
 * 例如：
 * 
 * 给定二叉树 [3,9,20,null,null,15,7]，
 * 
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 
 * 返回它的最大深度 3 。
 * 
 * 提示：
 * 节点总数 <= 10000
 * 
 * 注意：本题与主站 104 题相同：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
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
var maxDepth = function(root) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(maxDepth("param"), "expect", "Case 1");
assert.deepEqual(maxDepth("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
