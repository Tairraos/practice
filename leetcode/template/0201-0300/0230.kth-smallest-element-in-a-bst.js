/**
 * https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
 * 0230.二叉搜索树中第K小的元素
 * 难度：中等
 * 
 * 给定一个二叉搜索树，编写一个函数 kthSmallest 来查找其中第 k 个最小的元素。
 * 
 * 说明：
 * 你可以假设 k 总是有效的，1 ≤ k ≤ 二叉搜索树元素个数。
 * 
 * 示例 1：
 * 输入: root = [3,1,4,null,2], k = 1
 *    3
 *   / \
 * 1   4
 *   \
 *    2
 * 输出: 1
 * 
 * 示例 2：
 * 输入: root = [5,3,6,2,4,null,null,1], k = 3
 *        5
 *       / \
 *      3   6
 *     / \
 *    2   4
 *   /
 * 1
 * 输出: 3
 * 
 * 进阶：
 * 如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化 kthSmallest 函数？
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
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(kthSmallest("参数"), "期望结果");
assert.deepEqual(kthSmallest("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
