/**
 * https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/
 * 面试题37.序列化二叉树
 * 难度：困难
 * 
 * 请实现两个函数，分别用来序列化和反序列化二叉树。
 * 
 * 示例: 
 * 你可以将以下二叉树：
 * 
 *     1
 *    / \
 *   2   3
 *      / \
 *     4   5
 * 
 * 序列化为 "[1,2,3,null,null,4,5]"
 * 
 * 注意：本题与主站 297 题相同：https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(serialize("param"), "expect", "Case 1");
assert.deepEqual(serialize("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
