/**
 * https://leetcode-cn.com/problems/symmetric-tree/
 * 0101.对称二叉树
 * 难度：容易
 * 
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 *      1
 *    /   \
 *   2     2
 *  / \   / \
 * 3   4 4   3
 * 
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的：
 *     1
 *    / \
 *   2   2
 *    \   \
 *    3    3
 * 
 * 说明：
 * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(isSymmetric("参数"), "期望结果");
assert.deepEqual(isSymmetric("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
