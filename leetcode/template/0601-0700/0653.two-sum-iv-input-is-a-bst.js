/**
 * https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/
 * 0653.两数之和 IV - 输入 BST
 * 难度：容易
 * 
 * 给定一个二叉搜索树和一个目标结果，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。
 * 案例 1：
 * 输入：
 *     5
 *    / \
 *   3   6
 * / \   \
 * 2   4   7
 * 
 * Target = 9
 * 
 * 输出: True
 * 
 * 案例 2：
 * 输入：
 *     5
 *    / \
 *   3   6
 * / \   \
 * 2   4   7
 * 
 * Target = 28
 * 
 * 输出: False
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(findTarget("参数"), "期望结果");
assert.deepEqual(findTarget("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
