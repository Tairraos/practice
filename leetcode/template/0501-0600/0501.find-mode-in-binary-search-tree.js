/**
 * https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/
 * 0501.二叉搜索树中的众数
 * 难度：容易
 * 
 * 给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。
 * 假定 BST 有如下定义：
 *   - 结点左子树中所含结点的值小于等于当前结点的值
 *   - 结点右子树中所含结点的值大于等于当前结点的值
 *   - 左子树和右子树都是二叉搜索树
 * 
 * 例如：
 * 给定 BST [1,null,2,2],
 *    1
 *     \
 *      2
 *     /
 *    2
 * 
 * 返回[2].
 * 提示：如果众数超过1个，不需考虑输出顺序
 * 
 * 进阶：你可以不使用额外的空间吗？（假设由递归产生的隐式调用栈的开销不被计算在内）
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
var findMode = function(root) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(findMode("param"), "expect", "Case 1");
assert.deepEqual(findMode("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
