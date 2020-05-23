# https://leetcode-cn.com/problems/list-of-depth-lcci/
# 面试题 04.03.特定深度节点链表
# 难度：中等
# 
# 给定一棵二叉树，设计一个算法，创建含有某一深度上所有节点的链表（比如，若一棵树的深度为 D，则会创建出 D 个链表）。返回一个包含所有深度的链表的数组。
# 
# 示例：
# 输入：[1,2,3,4,5,null,7,8]
# 
#         1
#        /  \ 
#       2    3
#      / \    \ 
#     4   5    7
#    /
#   8
# 
# 输出：[[1],[2,3],[4,5,7],[8]]


from typing import *


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

# Definition for singly-linked list.
class ListNode:
    def __init__(self, x, y = None):
        self.val = x
        self.next = y

class Solution:
    def listOfDepth(self, tree: TreeNode) -> List[ListNode]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    def toArray(a: ListNode): return ([a.val] + toArray(a.next) if a.next else [a.val]) if a else []
    def toLinked(a): return ListNode(a[0], toLinked(a[1:]) if len(a[1:]) else None) if len(a) else None

    assert toArray(unit.listOfDepth(toLinked([1,2,3]))) == [1,2,3], 'Case 1'
    assert toArray(unit.listOfDepth(toLinked([1,2,3]))) == [1,2,3], 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
