/**
 * https://leetcode-cn.com/problems/binary-tree-tilt/
 * 0563.二叉树的坡度
 * 难度：容易
 * 
 * 给定一个二叉树，计算整个树的坡度。
 * 一个树的节点的坡度定义即为，该节点左子树的结点之和和右子树结点之和的差的绝对值。空结点的的坡度是0。
 * 整个树的坡度就是其所有节点的坡度之和。
 * 
 * 示例：
 * 输入：
 *          1
 *        /   \
 *       2     3
 * 输出: 1
 * 解释：
 * 结点的坡度 2 : 0
 * 结点的坡度 3 : 0
 * 结点的坡度 1 : |2-3| = 1
 * 树的坡度 : 0 + 0 + 1 = 1
 * 
 * 注意：
 *   - 任何子树的结点的和不会超过32位整数的范围。
 *   - 坡度的值不会超过32位整数的范围。
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
var findTilt = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(findTilt("param"), "expect", "caseName");
assert.deepEqual(findTilt("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
