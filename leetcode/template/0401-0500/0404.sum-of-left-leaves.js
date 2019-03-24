/**
 * https://leetcode-cn.com/problems/sum-of-left-leaves/
 * 0404.左叶子之和
 * 难度：容易
 * 
 * 计算给定二叉树的所有左叶子之和。
 * 
 * 示例：
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 
 * 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
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
var sumOfLeftLeaves = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(sumOfLeftLeaves("参数"), "期望结果");
assert.deepEqual(sumOfLeftLeaves("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
