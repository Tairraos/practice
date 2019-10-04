/**
 * https://leetcode-cn.com/problems/all-possible-full-binary-trees/
 * 0894.所有可能的满二叉树
 * 难度：中等
 * 
 * 满二叉树是一类二叉树，其中每个结点恰好有 0 或 2 个子结点。
 * 返回包含 N 个结点的所有可能满二叉树的列表。 答案的每个元素都是一个可能树的根结点。
 * 答案中每个树的每个结点都必须有 node.val=0。
 * 你可以按任何顺序返回树的最终列表。
 * 
 * 示例：
 * 输入：7
 * 输出：[[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
 * 解释：
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0894.png)
 * 
 * 提示：
 *   - 1 <= N <= 20
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(N) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(allPossibleFBT("param"), "expect", "Case 1");
assert.deepEqual(allPossibleFBT("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
