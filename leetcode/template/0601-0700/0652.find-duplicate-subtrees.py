# https://leetcode-cn.com/problems/find-duplicate-subtrees/
# 0652.寻找重复的子树
# 难度：中等
# 
# 给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。
# 两棵树重复是指它们具有相同的结构以及相同的结点值。
# 
# 示例 1：
#         1
#        / \
#       2   3
#      /   / \
#     4   2   4
#        /
#       4
# 
# 下面是两个重复的子树：
#       2
#      /
#     4
# 
# 和
#     4
# 
# 因此，你需要以列表的形式返回上述重复子树的根结点。


from typing import *


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
    def findDuplicateSubtrees(self, root: TreeNode) -> List[TreeNode]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findDuplicateSubtrees('param') == 'expect', 'Case 1'
    assert unit.findDuplicateSubtrees('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
