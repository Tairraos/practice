/**
 * https://leetcode-cn.com/problems/second-minimum-node-in-a-binary-tree/
 * 0671.二叉树中第二小的节点
 * 难度：容易
 * 
 * 给定一个非空特殊的二叉树，每个节点都是正数，并且每个节点的子节点数量只能为 2 或 0。如果一个节点有两个子节点的话，那么这个节点的值不大于它的子节点的值。
 * 给出这样的一个二叉树，你需要输出所有节点中的第二小的值。如果第二小的值不存在的话，输出 -1 。
 * 
 * 示例 1：
 * 输入：
 *     2
 *    / \
 *   2   5
 *      / \
 *     5   7
 * 
 * 输出: 5
 * 
 * 说明: 最小的值是 2 ，第二小的值是 5 。
 * 
 * 示例 2：
 * 输入：
 *     2
 *    / \
 *   2   2
 * 
 * 输出: -1
 * 
 * 说明: 最小的值是 2, 但是不存在第二小的值。
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
var findSecondMinimumValue = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(findSecondMinimumValue("参数"), "期望结果");
assert.deepEqual(findSecondMinimumValue("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
