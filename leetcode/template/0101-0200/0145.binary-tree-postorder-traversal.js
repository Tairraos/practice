/**
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 * 0145.二叉树的后序遍历
 * 难度：困难
 * 
 * 给定一个二叉树，返回它的 后序 遍历。
 * 
 * 示例：
 * 输入: [1,null,2,3]
 *    1
 *     \
 *      2
 *     /
 *    3
 * 
 * 输出: [3,2,1]
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
var postorderTraversal = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(postorderTraversal("param"), "expect", "caseName");
assert.deepEqual(postorderTraversal("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
