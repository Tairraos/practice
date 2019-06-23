# https://leetcode-cn.com/problems/sum-of-left-leaves/
# 0404.左叶子之和
# 难度：容易
# 
# 计算给定二叉树的所有左叶子之和。
# 
# 示例：
#     3
#    / \
#   9  20
#     /  \
#    15   7
# 
# 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def sumOfLeftLeaves(self, root: TreeNode) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.sumOfLeftLeaves('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
