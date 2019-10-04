# https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
# 0114.二叉树展开为链表
# 难度：中等
# 
# 给定一个二叉树，[原地](https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)将它展开为链表。
# 
# 例如，给定二叉树
#     1
#    / \
#   2   5
# / \   \
# 3   4   6
# 将其展开为：
# 1
# \
#   2
#    \
#     3
#      \
#       4
#        \
#         5
#          \
#           6


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def flatten(self, root: TreeNode) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.flatten('param') == 'expect', 'Case 1'
    assert unit.flatten('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
