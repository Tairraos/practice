/**
 * https://leetcode-cn.com/problems/bst-sequences-lcci/
 * 面试题 04.09.二叉搜索树序列
 * 难度：困难
 * 
 * 从左向右遍历一个数组，通过不断将其中的元素插入树中可以逐步地生成一棵二叉搜索树。给定一个由不同节点组成的二叉树，输出所有可能生成此树的数组。
 * 
 * 示例:
 * 给定如下二叉树
 * 
 *         2
 *        / \
 *       1   3
 * 
 * 返回:
 * 
 * [
 *    [2,1,3],
 *    [2,3,1]
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
 * @return {number[][]}
 */
var BSTSequences = function(root) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(BSTSequences("param"), "expect", "Case 1");
assert.deepEqual(BSTSequences("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
