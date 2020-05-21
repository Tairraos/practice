/**
 * https://leetcode-cn.com/problems/successor-lcci/
 * 面试题 04.06.后继者
 * 难度：中等
 * 
 * 设计一个算法，找出二叉搜索树中指定节点的&ldquo;下一个&rdquo;节点（也即中序后继）。
 * 
 * 如果指定节点没有对应的&ldquo;下一个&rdquo;节点，则返回null。
 * 
 * 示例 1:
 * 输入: root = [2,1,3], p = 1
 * 
 *   2
 *  / \
 * 1   3
 * 
 * 输出: 2
 * 
 * 示例 2:
 * 输入: root = [5,3,6,2,4,null,null,1], p = 6
 * 
 *       5
 *      / \
 *     3   6
 *    / \
 *   2   4
 *  /   
 * 1
 * 
 * 输出: null
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
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(inorderSuccessor("param"), "expect", "Case 1");
assert.deepEqual(inorderSuccessor("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
