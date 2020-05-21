/**
 * https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/
 * 面试题32 - I.从上到下打印二叉树
 * 难度：中等
 * 
 * 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
 * 
 * 例如:
 * 给定二叉树: [3,9,20,null,null,15,7],
 * 
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 
 * 返回：
 * 
 * [3,9,20,15,7]
 * 
 * 提示：
 * 节点总数 <= 1000
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
var levelOrder = function(root) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(levelOrder("param"), "expect", "Case 1");
assert.deepEqual(levelOrder("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
