# https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/
# 剑指 Offer 34.二叉树中和为某一值的路径
# 难度：中等
# 
# 输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。
# 
# 示例:
# 给定如下二叉树，以及目标和 sum = 22，
# 
#               5
#              / \
#             4   8
#            /   / \
#           11  13  4
#          /  \    / \
#         7    2  5   1
# 
# 返回:
# 
# [
#    [5,4,11,2],
#    [5,8,4,5]
# ]
# 
# 提示：
# 节点总数 <= 10000
# 
# 注意：本题与主站 113 题相同：https://leetcode-cn.com/problems/path-sum-ii/


from typing import *


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def pathSum(self, root: TreeNode, sum: int) -> List[List[int]]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.pathSum('param') == 'expect', 'Case 1'
    assert unit.pathSum('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
