# https://leetcode-cn.com/problems/binary-tree-pruning/
# 0814.二叉树剪枝
# 难度：中等
# 
# 给定二叉树根结点 root ，此外树的每个结点的值要么是 0，要么是 1。
# 返回移除了所有不包含 1 的子树的原二叉树。
# ( 节点 X 的子树为 X 本身，以及所有 X 的后代。)
# 示例1：
# 输入: [1,null,0,0,1]
# 输出: [1,null,0,null,1]
# 
# 解释：
# 只有红色节点满足条件“所有不包含 1 的子树”。
# 右图为返回的答案。
# 
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0814-1.png)
# 
# 示例2：
# 输入: [1,0,1,0,0,0,1]
# 输出: [1,null,1,null,1]
# 
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0814-2.png)
# 
# 示例3：
# 输入: [1,1,0,1,1,0,1,0]
# 输出: [1,1,0,1,1,null,1]
# 
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0814-3.png)
# 
# 说明：
#   - 给定的二叉树最多有 100 个节点。
#   - 每个节点的值只会为 0 或 1 。


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def pruneTree(self, root: TreeNode) -> TreeNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.pruneTree('param') == 'expect', 'Case 1'
    assert unit.pruneTree('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
