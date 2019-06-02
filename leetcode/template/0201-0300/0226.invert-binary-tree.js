/**
 * https://leetcode-cn.com/problems/invert-binary-tree/
 * 0226.翻转二叉树
 * 难度：容易
 * 
 * 翻转一棵二叉树。
 * 
 * 示例：
 * 输入：
 *      4
 *    /   \
 *   2     7
 * / \   / \
 * 1   3 6   9
 * 输出：
 *      4
 *    /   \
 *   7     2
 * / \   / \
 * 9   6 3   1
 * 备注：
 * 这个问题是受到 [Max Howell](https://twitter.com/mxcl)的 [原问题](https://twitter.com/mxcl/status/608682016205344768) 启发的 ：
 * 
 * 谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(invertTree("param"), "expect", "caseName");
assert.deepEqual(invertTree("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
