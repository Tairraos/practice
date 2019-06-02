/**
 * https://leetcode-cn.com/problems/convert-bst-to-greater-tree/
 * 0538.把二叉搜索树转换为累加树
 * 难度：容易
 * 
 * 给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。
 * 
 * 例如：
 * 输入: 二叉搜索树：
 *               5
 *             /   \
 *            2     13
 * 
 * 输出: 转换为累加树：
 *              18
 *             /   \
 *           20     13
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(convertBST("param"), "expect", "caseName");
assert.deepEqual(convertBST("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
