/**
 * https://leetcode-cn.com/problems/legal-binary-search-tree-lcci/
 * 面试题 04.05.合法二叉搜索树
 * 难度：中等
 * 
 * 实现一个函数，检查一棵二叉树是否为二叉搜索树。示例 1:输入:    2   / &#92  1   3输出: true示例 2:输入:    5   / &#92  1   4     / &#92    3   6输出: false解释: 输入为: [5,1,4,null,null,3,6]。     根节点的值为 5 ，但是其右子节点值为 4 。
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
var isValidBST = function(root) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(isValidBST("param"), "expect", "Case 1");
assert.deepEqual(isValidBST("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
