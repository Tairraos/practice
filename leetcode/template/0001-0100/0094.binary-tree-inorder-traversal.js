/**
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * 0094.二叉树的中序遍历
 * 难度：中等
 * 
 * 给定一个二叉树，返回它的中序 遍历。
 * 
 * 示例：
 * 输入: [1,null,2,3]
 *    1
 *     \
 *      2
 *     /
 *    3
 * 
 * 输出: [1,3,2]
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(inorderTraversal("param"), "expect", "caseName");
assert.deepEqual(inorderTraversal("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
