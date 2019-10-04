/**
 * https://leetcode-cn.com/problems/most-frequent-subtree-sum/
 * 0508.出现次数最多的子树元素和
 * 难度：中等
 * 
 * 给出二叉树的根，找出出现次数最多的子树元素和。一个结点的子树元素和定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。然后求出出现次数最多的子树元素和。如果有多个元素出现的次数相同，返回所有出现次数最多的元素（不限顺序）。
 * 
 * 示例 1
 * 输入：
 *   5
 * /  \
 * 2   -3
 * 
 * 返回 [2, -3, 4]，所有的值均只出现一次，以任意顺序返回所有值。
 * 
 * 示例 2
 * 输入：
 *   5
 * /  \
 * 2   -5
 * 
 * 返回 [2]，只有 2 出现两次，-5 只出现 1 次。
 * 
 * 提示： 假设任意子树元素和均可以用 32 位有符号整数表示。
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
var findFrequentTreeSum = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(findFrequentTreeSum("param"), "expect", "Case 1");
assert.deepEqual(findFrequentTreeSum("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
