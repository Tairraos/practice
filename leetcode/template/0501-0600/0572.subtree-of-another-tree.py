# https://leetcode-cn.com/problems/subtree-of-another-tree/
# 0572.另一个树的子树
# 难度：容易
# 
# 给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树。
# 
# 示例 1：
# 给定的树 s：
#      3
#     / \
#    4   5
#   / \
# 1   2
# 
# 给定的树 t：
#    4
#   / \
# 1   2
# 
# 返回 true，因为 t 与 s 的一个子树拥有相同的结构和节点值。
# 
# 示例 2：
# 给定的树 s：
#      3
#     / \
#    4   5
#   / \
# 1   2
#     /
#    0
# 
# 给定的树 t：
#    4
#   / \
# 1   2
# 
# 返回 false。


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isSubtree(self, s: TreeNode, t: TreeNode) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.isSubtree('param') == 'expect', 'Case 1'
    assert unit.isSubtree('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
