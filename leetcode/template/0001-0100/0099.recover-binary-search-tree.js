/**
 * https://leetcode-cn.com/problems/recover-binary-search-tree/
 * 0099.恢复二叉搜索树
 * 难度：困难
 * 
 * 二叉搜索树中的两个节点被错误地交换。
 * 请在不改变其结构的情况下，恢复这棵树。
 * 
 * 示例 1：
 * 输入: [1,3,null,null,2]
 * 
 *    1
 *   /
 * 3
 *   \
 *    2
 * 
 * 输出: [3,1,null,null,2]
 * 
 *    3
 *   /
 * 1
 *   \
 *    2
 * 
 * 示例 2：
 * 输入: [3,1,4,null,null,2]
 * 
 *   3
 * / \
 * 1   4
 *    /
 *   2
 * 
 * 输出: [2,1,4,null,null,3]
 * 
 *   2
 * / \
 * 1   4
 *    /
 *   3
 * 
 * 进阶：
 *   - 使用 O(n) 空间复杂度的解法很容易实现。
 *   - 你能想出一个只使用常数空间的解决方案吗？
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(recoverTree("参数"), "期望结果");
assert.deepEqual(recoverTree("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
