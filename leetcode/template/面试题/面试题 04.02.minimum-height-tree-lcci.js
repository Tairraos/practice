/**
 * https://leetcode-cn.com/problems/minimum-height-tree-lcci/
 * 面试题 04.02.最小高度树
 * 难度：容易
 * 
 * 给定一个有序整数数组，元素各不相同且按升序排列，编写一个算法，创建一棵高度最小的二叉搜索树。示例:给定有序数组: [-10,-3,0,5,9],一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：          0          / &#92        -3   9        /   /      -10  5
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(sortedArrayToBST("param"), "expect", "Case 1");
assert.deepEqual(sortedArrayToBST("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
