/**
 * https://leetcode-cn.com/problems/all-elements-in-two-binary-search-trees/
 * 1305.两棵二叉搜索树中的所有元素
 * 难度：中等
 * 
 * 给你 root1 和 root2 这两棵二叉搜索树。
 * 
 * 请你返回一个列表，其中包含 两棵树 中的所有整数并按 升序 排序。.
 * 
 * 示例 1：
 * 输入：root1 = [2,1,4], root2 = [1,0,3]
 * 输出：[0,1,1,2,3,4]
 * 
 * 示例 2：
 * 输入：root1 = [0,-10,10], root2 = [5,1,7,0,2]
 * 输出：[-10,0,0,1,2,5,7,10]
 * 
 * 示例 3：
 * 输入：root1 = [], root2 = [5,1,7,0,2]
 * 输出：[0,1,2,5,7]
 * 
 * 示例 4：
 * 输入：root1 = [0,-10,10], root2 = []
 * 输出：[-10,0,10]
 * 
 * 示例 5：
 * 输入：root1 = [1,null,8], root2 = [8,1]
 * 输出：[1,1,8,8]
 * 
 * 提示：
 * 每棵树最多有 5000 个节点。
 * 每个节点的值在 [-10^5, 10^5] 之间。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(getAllElements("param"), "expect", "Case 1");
assert.deepEqual(getAllElements("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
