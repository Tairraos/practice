/**
 * https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
 * 0589.N叉树的前序遍历
 * 难度：容易
 * 
 * 给定一个 N 叉树，返回其节点值的前序遍历。
 * 
 * 例如，给定一个 3叉树：
 * 
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0589.png)
 * 
 * 返回其前序遍历: [1,3,5,6,2,4]。
 * 
 * 说明: 递归法很简单，你可以使用迭代法完成此题吗?
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
 * @return {number[]}
 */
var preorder = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(preorder("param"), "expect", "Case 1");
assert.deepEqual(preorder("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
