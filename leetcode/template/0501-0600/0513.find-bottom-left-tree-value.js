/**
 * https://leetcode-cn.com/problems/find-bottom-left-tree-value/
 * 0513.找树左下角的值
 * 难度：中等
 * 
 * 给定一个二叉树，在树的最后一行找到最左边的值。
 * 
 * 示例 1：
 * 输入：
 * 
 *     2
 *    / \
 *   1   3
 * 
 * 输出：
 * 1
 * 
 * 示例 2：
 * 输入：
 * 
 *         1
 *        / \
 *       2   3
 *      /   / \
 *     4   5   6
 *        /
 *       7
 * 
 * 输出：
 * 7
 * 
 * 注意: 您可以假设树（即给定的根节点）不为 NULL。
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
var findBottomLeftValue = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(findBottomLeftValue("param"), "expect", "caseName");
assert.deepEqual(findBottomLeftValue("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
