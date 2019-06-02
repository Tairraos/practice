/**
 * https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/
 * 0109.有序链表转换二叉搜索树
 * 难度：中等
 * 
 * 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 * 
 * 示例：
 * 给定的有序链表： [-10, -3, 0, 5, 9],
 * 
 * 一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：
 * 
 *       0
 *      / \
 *    -3   9
 *    /   /
 * -10  5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(sortedListToBST("param"), "expect", "caseName");
assert.deepEqual(sortedListToBST("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
