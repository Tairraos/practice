/**
 * https://leetcode-cn.com/problems/sum-of-nodes-with-even-valued-grandparent/
 * 1315.祖父节点值为偶数的节点和
 * 难度：中等
 * 
 * 给你一棵二叉树，请你返回满足以下条件的所有节点的值之和：
 * 
 * 该节点的祖父节点的值为偶数。（一个节点的祖父节点是指该节点的父节点的父节点。）
 * 
 * 如果不存在祖父节点值为偶数的节点，那么返回 0 。
 * 
 * 示例：
 * 输入：root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
 * 输出：18
 * 解释：图中红色节点的祖父节点的值为偶数，蓝色节点为这些红色节点的祖父节点。
 * 
 * 提示：
 * 树中节点的数目在 1 到 10^4 之间。
 * 每个节点的值在 1 到 100 之间。
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
var sumEvenGrandparent = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(sumEvenGrandparent("param"), "expect", "Case 1");
assert.deepEqual(sumEvenGrandparent("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
