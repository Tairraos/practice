/**
 * https://leetcode-cn.com/problems/binary-tree-cameras/
 * 0968.监控二叉树
 * 难度：困难
 * 
 * 给定一个二叉树，我们在树的节点上安装摄像头。
 * 节点上的每个摄影头都可以监视其父对象、自身及其直接子对象。
 * 计算监控树的所有节点所需的最小摄像头数量。
 * 
 * 示例 1：
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0968-1.png)
 * 输入：[0,0,null,0,0]
 * 输出：1
 * 解释：如图所示，一台摄像头足以监控所有节点。
 * 
 * 示例 2：
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0968-2.png)
 * 输入：[0,0,null,0,null,0,null,null,0]
 * 输出：2
 * 解释：需要至少两个摄像头来监视树的所有节点。 上图显示了摄像头放置的有效位置之一。
 * 
 * 提示：
 *   - 给定树的节点数的范围是 [1, 1000]。
 *   - 每个节点的值都是 0。
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
var minCameraCover = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(minCameraCover("param"), "expect", "Case 1");
assert.deepEqual(minCameraCover("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
