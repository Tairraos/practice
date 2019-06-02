/**
 * https://leetcode-cn.com/problems/flip-equivalent-binary-trees/
 * 0951.翻转等价二叉树
 * 难度：中等
 * 
 * 我们可以为二叉树 T 定义一个翻转操作，如下所示：选择任意节点，然后交换它的左子树和右子树。
 * 只要经过一定次数的翻转操作后，能使 X 等于 Y，我们就称二叉树 X 翻转等价于二叉树 Y。
 * 编写一个判断两个二叉树是否是翻转等价的函数。这些树由根节点 root1 和 root2 给出。
 * 
 * 示例：
 * 输入：root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
 * 输出：true
 * 解释：We flipped at nodes with values 1, 3, and 5.
 * [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0951.png)
 * 
 * 提示：
 *   - 每棵树最多有 100 个节点。
 *   - 每棵树中的每个值都是唯一的、在 [0, 99] 范围内的整数。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(flipEquiv("param"), "expect", "caseName");
assert.deepEqual(flipEquiv("param"), "expect", "caseName");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
