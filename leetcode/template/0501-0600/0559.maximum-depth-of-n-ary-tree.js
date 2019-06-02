/**
 * https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/
 * 0559.N叉树的最大深度
 * 难度：容易
 * 
 * 给定一个 N 叉树，找到其最大深度。
 * 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
 * 
 * 例如，给定一个 3叉树：
 * 
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0559.png)
 * 
 * 我们应返回其最大深度，3。
 * 
 * 说明：
 *   - 树的深度不会超过 1000。
 *   - 树的节点总不会超过 5000。
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
 * @return {number}
 */
var maxDepth = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(maxDepth("param"), "expect", "caseName");
assert.deepEqual(maxDepth("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
