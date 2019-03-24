/**
 * https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
 * 0114.二叉树展开为链表
 * 难度：中等
 * 
 * 给定一个二叉树，[原地](https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95/8010757)将它展开为链表。
 * 
 * 例如，给定二叉树
 *     1
 *    / \
 *   2   5
 * / \   \
 * 3   4   6
 * 将其展开为：
 * 1
 * \
 *   2
 *    \
 *     3
 *      \
 *       4
 *        \
 *         5
 *          \
 *           6
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(flatten("参数"), "期望结果");
assert.deepEqual(flatten("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
