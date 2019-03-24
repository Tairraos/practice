/**
 * https://leetcode-cn.com/problems/binary-tree-right-side-view/
 * 0199.二叉树的右视图
 * 难度：中等
 * 
 * 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * 
 * 示例：
 * 输入: [1,2,3,null,5,null,4]
 * 输出: [1, 3, 4]
 * 解释：
 * 
 *    1            <---
 *  /   \
 * 2     3         <---
 *  \    \
 *   5      4      <---
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
var rightSideView = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(rightSideView("参数"), "期望结果");
assert.deepEqual(rightSideView("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
