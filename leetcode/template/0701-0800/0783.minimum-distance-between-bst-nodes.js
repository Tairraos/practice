/**
 * https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/
 * 0783.二叉搜索树结点最小距离
 * 难度：容易
 * 
 * 给定一个二叉搜索树的根结点 root, 返回树中任意两节点的差的最小值。
 * 
 * 示例：
 * 输入: root = [4,2,6,1,3,null,null]
 * 输出: 1
 * 解释：
 * 
 * 注意，root是树结点对象(TreeNode object)，而不是数组。
 * 
 * 给定的树 [4,2,6,1,3,null,null] 可表示为下图：
 * 
 *           4
 *         /   \
 *       2      6
 *      / \
 *     1   3
 * 
 * 最小的差值是 1, 它是节点1和节点2的差值, 也是节点3和节点2的差值。
 * 
 * 注意：
 *   - 二叉树的大小范围在 2 到 100。
 *   - 二叉树总是有效的，每个节点的值都是整数，且不重复。
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
var minDiffInBST = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(minDiffInBST("参数"), "期望结果");
assert.deepEqual(minDiffInBST("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
