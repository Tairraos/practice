/**
 * https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/
 * 剑指 Offer 54.二叉搜索树的第k大节点
 * 难度：容易
 * 
 * 给定一棵二叉搜索树，请找出其中第k大的节点。
 * 
 * 示例 1:
 * 输入: root = [3,1,4,null,2], k = 1
 *    3
 *   / \
 *  1   4
 *   \
 *    2
 * 输出: 4
 * 
 * 示例 2:
 * 输入: root = [5,3,6,2,4,null,null,1], k = 3
 *        5
 *       / \
 *      3   6
 *     / \
 *    2   4
 *   /
 *  1
 * 输出: 4
 * 
 * 限制：
 * 
 * 1 &le; k &le; 二叉搜索树元素个数
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
var kthLargest = function(root, k) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(kthLargest("param"), "expect", "Case 1");
assert.deepEqual(kthLargest("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
