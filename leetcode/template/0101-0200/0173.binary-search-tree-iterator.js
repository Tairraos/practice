/**
 * https://leetcode-cn.com/problems/binary-search-tree-iterator/
 * 0173.二叉搜索树迭代器
 * 难度：中等
 * 
 * 实现一个二叉搜索树迭代器。你将使用二叉搜索树的根节点初始化迭代器。
 * 调用 next() 将返回二叉搜索树中的下一个最小的数。
 * 
 * 示例：
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0173.png)
 * BSTIterator iterator = new BSTIterator(root);
 * iterator.next();    // 返回 3
 * iterator.next();    // 返回 7
 * iterator.hasNext(); // 返回 true
 * iterator.next();    // 返回 9
 * iterator.hasNext(); // 返回 true
 * iterator.next();    // 返回 15
 * iterator.hasNext(); // 返回 true
 * iterator.next();    // 返回 20
 * iterator.hasNext(); // 返回 false
 * 
 * 提示：
 *   - next() 和 hasNext() 操作的时间复杂度是 O(1)，并使用 O(h) 内存，其中 h 是树的高度。
 *   - 你可以假设 next() 调用总是有效的，也就是说，当调用 next() 时，BST 中至少存在一个下一个最小的数。
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
 */
var BSTIterator = function(root) {
    
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = Object.create(BSTIterator).createNew(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(BSTIterator("param"), "expect", "caseName");
assert.deepEqual(BSTIterator("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
