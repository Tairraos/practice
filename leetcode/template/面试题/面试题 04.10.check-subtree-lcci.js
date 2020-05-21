/**
 * https://leetcode-cn.com/problems/check-subtree-lcci/
 * 面试题 04.10.检查子树
 * 难度：中等
 * 
 * 检查子树。你有两棵非常大的二叉树：T1，有几万个节点；T2，有几万个节点。设计一个算法，判断 T2 是否为 T1 的子树。
 * 
 * 如果 T1 有这么一个节点 n，其子树与 T2 一模一样，则 T2 为 T1 的子树，也就是说，从节点 n 处把树砍断，得到的树与 T2 完全相同。
 * 
 * 示例1:
 *  输入：t1 = [1, 2, 3], t2 = [2]
 *  输出：true
 * 
 * 示例2:
 *  输入：t1 = [1, null, 2, 4], t2 = [3, 2]
 *  输出：false
 * 
 * 提示：
 * 树的节点数目范围为[0, 20000]。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
var checkSubTree = function(t1, t2) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(checkSubTree("param"), "expect", "Case 1");
assert.deepEqual(checkSubTree("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
