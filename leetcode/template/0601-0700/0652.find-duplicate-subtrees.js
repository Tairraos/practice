/**
 * https://leetcode-cn.com/problems/find-duplicate-subtrees/
 * 0652.寻找重复的子树
 * 难度：中等
 * 
 * 给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。
 * 两棵树重复是指它们具有相同的结构以及相同的结点值。
 * 
 * 示例 1：
 *         1
 *        / \
 *       2   3
 *      /   / \
 *     4   2   4
 *        /
 *       4
 * 
 * 下面是两个重复的子树：
 *       2
 *      /
 *     4
 * 
 * 和
 *     4
 * 
 * 因此，你需要以列表的形式返回上述重复子树的根结点。
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(findDuplicateSubtrees("param"), "expect", "caseName");
assert.deepEqual(findDuplicateSubtrees("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
