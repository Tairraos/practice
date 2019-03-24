/**
 * https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/
 * 0590.N叉树的后序遍历
 * 难度：容易
 * 
 * 给定一个 N 叉树，返回其节点值的后序遍历。
 * 
 * 例如，给定一个 3叉树：
 * 
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0589.png)
 * 
 * 返回其后序遍历: [5,6,3,2,4,1].
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
var postorder = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(postorder("参数"), "期望结果");
assert.deepEqual(postorder("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
