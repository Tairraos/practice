/**
 * https://leetcode-cn.com/problems/path-sum-ii/
 * 0113.路径总和 II
 * 难度：中等
 * 
 * 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定如下二叉树，以及目标和 sum = 22，
 *               5
 *              / \
 *             4   8
 *            /   / \
 *           11  13  4
 *          /  \    / \
 *         7    2  5   1
 * 
 * 返回：
 * [
 *    [5,4,11,2],
 *    [5,8,4,5]
 * ]
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(pathSum("param"), "expect", "caseName");
assert.deepEqual(pathSum("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
