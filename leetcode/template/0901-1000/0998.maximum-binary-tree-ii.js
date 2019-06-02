/**
 * https://leetcode-cn.com/problems/maximum-binary-tree-ii/
 * 0998.最大二叉树 II
 * 难度：中等
 * 
 * 最大树定义：一个树，其中每个节点的值都大于其子树中的任何其他值。
 * 给出最大树的根节点 root。
 * 就像[之前的问题](https://leetcode-cn.com/problems/maximum-binary-tree/)那样，给定的树是从表 A（root = Construct(A)）递归地使用下述 Construct(A) 例程构造的：
 *   - 如果 A 为空，返回 null
 *   - 否则，令 A[i] 作为 A 的最大元素。创建一个值为 A[i] 的根节点 root
 *   - root 的左子树将被构建为 Construct([A[0], A[1], ..., A[i-1]])
 *   - root 的右子树将被构建为 Construct([A[i+1], A[i+2], ..., A[A.length - 1]])
 *   - 返回 root
 * 
 * 请注意，我们没有直接给定 A，只有一个根节点 root = Construct(A).
 * 假设 B 是 A 的副本，并附加值 val。保证 B 中的值是不同的。
 * 返回 Construct(B)。
 * 
 * 示例 1：
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0998-1.png)
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0998-2.png)
 * 输入：root = [4,1,3,null,null,2], val = 5
 * 输出：[5,4,null,1,3,null,null,2]
 * 解释：A = [1,4,2,3], B = [1,4,2,3,5]
 * 
 * 示例 2：
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0998-3.png)
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0998-4.png)
 * 输入：root = [5,2,4,null,1], val = 3
 * 输出：[5,2,4,null,1,null,3]
 * 解释：A = [2,1,5,4], B = [2,1,5,4,3]
 * 
 * 示例 3：
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0998-5.png)
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0998-6.png)
 * 输入：root = [5,2,3,null,1], val = 4
 * 输出：[5,2,4,null,1,3]
 * 解释：A = [2,1,5,3], B = [2,1,5,3,4]
 * 
 * 提示：
 *   - 1 <= B.length <= 100
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function(root, val) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(insertIntoMaxTree("param"), "expect", "caseName");
assert.deepEqual(insertIntoMaxTree("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
