/**
 * https://leetcode-cn.com/problems/check-completeness-of-a-binary-tree/
 * 0958.二叉树的完全性检验
 * 难度：中等
 * 
 * 给定一个二叉树，确定它是否是一个完全二叉树。
 * [百度百科](https://baike.baidu.com/item/%E5%AE%8C%E5%85%A8%E4%BA%8C%E5%8F%89%E6%A0%91)中对完全二叉树的定义如下：
 * 若设二叉树的深度为 h，除第 h 层外，其它各层 (1～h-1) 的结点数都达到最大个数，第 h 层所有的结点都连续集中在最左边，这就是完全二叉树。（注：第 h 层可能包含 1~ 2^h 个节点。）
 * 
 * 示例 1：
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0958-1.png)
 * 输入：[1,2,3,4,5,6]
 * 输出：true
 * 解释：最后一层前的每一层都是满的（即，结点值为 {1} 和 {2,3} 的两层），且最后一层中的所有结点（{4,5,6}）都尽可能地向左。
 * 
 * 示例 2：
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0958-2.png)
 * 输入：[1,2,3,4,5,null,7]
 * 输出：false
 * 解释：值为 7 的结点没有尽可能靠向左侧。
 * 
 * 提示：
 *   - 树中将会有 1 到 100 个结点。
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
var isCompleteTree = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(isCompleteTree("param"), "expect", "caseName");
assert.deepEqual(isCompleteTree("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
