# https://leetcode-cn.com/problems/bst-sequences-lcci/
# 面试题 04.09.二叉搜索树序列
# 难度：困难
# 
# 从左向右遍历一个数组，通过不断将其中的元素插入树中可以逐步地生成一棵二叉搜索树。给定一个由不同节点组成的二叉树，输出所有可能生成此树的数组。
# 
# 示例:
# 给定如下二叉树
# 
#         2
#        / \
#       1   3
# 
# 返回:
# 
# [
#    [2,1,3],
#    [2,3,1]
# ]


from typing import *


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def BSTSequences(self, root: TreeNode) -> List[List[int]]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.BSTSequences('param') == 'expect', 'Case 1'
    assert unit.BSTSequences('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
