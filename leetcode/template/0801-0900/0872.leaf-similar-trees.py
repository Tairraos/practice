# https://leetcode-cn.com/problems/leaf-similar-trees/
# 0872.叶子相似的树
# 难度：容易
# 
# 请考虑一颗二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0872.png)
# 举个例子，如上图所示，给定一颗叶值序列为 (6, 7, 4, 9, 8) 的树。
# 如果有两颗二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。
# 如果给定的两个头结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。
# 
# 提示：
#   - 给定的两颗树可能会有 1 到 100 个结点。

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def leafSimilar(self, root1: TreeNode, root2: TreeNode) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.leafSimilar('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
