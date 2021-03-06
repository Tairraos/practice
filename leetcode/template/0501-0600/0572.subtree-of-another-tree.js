/**
 * https://leetcode-cn.com/problems/subtree-of-another-tree/
 * 0572.另一个树的子树
 * 难度：容易
 * 
 * 给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树。
 * 
 * 示例 1：
 * 给定的树 s：
 *      3
 *     / \
 *    4   5
 *   / \
 * 1   2
 * 
 * 给定的树 t：
 *    4
 *   / \
 * 1   2
 * 
 * 返回 true，因为 t 与 s 的一个子树拥有相同的结构和节点值。
 * 
 * 示例 2：
 * 给定的树 s：
 *      3
 *     / \
 *    4   5
 *   / \
 * 1   2
 *     /
 *    0
 * 
 * 给定的树 t：
 *    4
 *   / \
 * 1   2
 * 
 * 返回 false。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(isSubtree("param"), "expect", "Case 1");
assert.deepEqual(isSubtree("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
