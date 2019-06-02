/**
 * https://leetcode-cn.com/problems/range-sum-of-bst/
 * 0938.二叉搜索树的范围和
 * 难度：中等
 * 
 * 给定二叉搜索树的根结点 root，返回 L 和 R（含）之间的所有结点的值的和。
 * 二叉搜索树保证具有唯一的值。
 * 
 * 示例 1：
 * 输入：root = [10,5,15,3,7,null,18], L = 7, R = 15
 * 输出：32
 * 
 * 示例 2：
 * 输入：root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
 * 输出：23
 * 
 * 提示：
 *   - 树中的结点数量最多为 10000 个。
 *   - 最终的答案保证小于 2^31。
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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(rangeSumBST("param"), "expect", "caseName");
assert.deepEqual(rangeSumBST("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
