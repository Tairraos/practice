/**
 * https://leetcode-cn.com/problems/deepest-leaves-sum/
 * 1302.层数最深叶子节点的和
 * 难度：中等
 * 
 * 给你一棵二叉树，请你返回层数最深的叶子节点的和。
 * 
 * 示例：
 * 输入：root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
 * 输出：15
 * 
 * 提示：
 * 树中节点数目在 1 到 10^4 之间。
 * 每个节点的值在 1 到 100 之间。
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
var deepestLeavesSum = function(root) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(deepestLeavesSum("param"), "expect", "Case 1");
assert.deepEqual(deepestLeavesSum("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
