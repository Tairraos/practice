/**
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * 0144.二叉树的前序遍历
 * 难度：中等
 * 
 * 给定一个二叉树，返回它的 前序 遍历。
 * 示例：
 * 输入: [1,null,2,3]
 *    1
 *     \
 *      2
 *     /
 *    3
 * 
 * 输出: [1,2,3]
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
var preorderTraversal = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(preorderTraversal("param"), "expect", "caseName");
assert.deepEqual(preorderTraversal("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
