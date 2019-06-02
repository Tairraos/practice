/**
 * https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/
 * 0515.在每个树行中找最大值
 * 难度：中等
 * 
 * 您需要在二叉树的每一行中找到最大的值。
 * 
 * 示例：
 * 输入：
 * 
 *           1
 *          / \
 *         3   2
 *        / \   \
 *       5   3   9
 * 
 * 输出: [1, 3, 9]
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
 * @return {number[]}
 */
var largestValues = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(largestValues("param"), "expect", "caseName");
assert.deepEqual(largestValues("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
