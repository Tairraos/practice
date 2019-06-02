/**
 * https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
 * 0429.N叉树的层序遍历
 * 难度：容易
 * 
 * 给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。
 * 
 * 例如，给定一个 3叉树：
 * 
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0429.png)
 * 
 * 返回其层序遍历：
 * [
 *      [1],
 *      [3,2,4],
 *      [5,6]
 * ]
 * 
 * 说明：
 *   - 树的深度不会超过 1000。
 *   - 树的节点总数不会超过 5000。
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(levelOrder("param"), "expect", "caseName");
assert.deepEqual(levelOrder("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
