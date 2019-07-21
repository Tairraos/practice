/**
 * https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/
 * 0637.二叉树的层平均值
 * 难度：容易
 * 
 * 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组.
 * 
 * 示例 1：
 * 输入：
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 输出: [3, 14.5, 11]
 * 解释：
 * 第0层的平均值是 3,  第1层是 14.5, 第2层是 11. 因此返回 [3, 14.5, 11].
 * 
 * 注意：
 *   - 节点值的范围在32位有符号整数范围内。
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
var averageOfLevels = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(averageOfLevels("param"), "expect", "caseName");
assert.deepEqual(averageOfLevels("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
