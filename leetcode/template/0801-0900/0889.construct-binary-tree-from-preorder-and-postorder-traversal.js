/**
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/
 * 0889.根据前序和后序遍历构造二叉树
 * 难度：中等
 * 
 * 返回与给定的前序和后序遍历匹配的任何二叉树。
 * pre 和 post 遍历中的值是不同的正整数。
 * 
 * 示例：
 * 输入：pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
 * 输出：[1,2,3,4,5,6,7]
 * 
 * 提示：
 *   - 1 <= pre.length == post.length <= 30
 *   - pre[] 和 post[] 都是 1, 2, ..., pre.length 的排列
 *   - 每个输入保证至少有一个答案。如果有多个答案，可以返回其中一个。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(constructFromPrePost("param"), "expect", "caseName");
assert.deepEqual(constructFromPrePost("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
