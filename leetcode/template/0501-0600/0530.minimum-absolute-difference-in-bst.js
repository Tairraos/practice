/**
 * https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/
 * 0530.二叉搜索树的最小绝对差
 * 难度：容易
 * 
 * 给定一个所有节点为非负值的二叉搜索树，求树中任意两节点的差的绝对值的最小值。
 * 
 * 示例：
 * 输入：
 * 
 *    1
 *     \
 *      3
 *     /
 *    2
 * 
 * 输出：
 * 1
 * 
 * 解释：
 * 最小绝对差为1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。
 * 
 * 注意: 树中至少有2个节点。
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
var getMinimumDifference = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(getMinimumDifference("param"), "expect", "caseName");
assert.deepEqual(getMinimumDifference("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
