/**
 * https://leetcode-cn.com/problems/univalued-binary-tree/
 * 0965.单值二叉树
 * 难度：容易
 * 
 * 如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树。
 * 只有给定的树是单值二叉树时，才返回 true；否则返回 false。
 * 
 * 示例 1：
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0965-1.png)
 * 输入：[1,1,1,1,1,null,1]
 * 输出：true
 * 
 * 示例 2：
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0965-2.png)
 * 输入：[2,2,2,5,2]
 * 输出：false
 * 
 * 提示：
 *   - 给定树的节点数范围是 [1, 100]。
 *   - 每个节点的值都是整数，范围为 [0, 99] 。
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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(isUnivalTree("参数"), "期望结果");
assert.deepEqual(isUnivalTree("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
