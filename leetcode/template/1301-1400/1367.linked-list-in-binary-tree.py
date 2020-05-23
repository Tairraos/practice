# https://leetcode-cn.com/problems/linked-list-in-binary-tree/
# 1367.二叉树中的列表
# 难度：中等
# 
# 给你一棵以 root 为根的二叉树和一个 head 为第一个节点的链表。
# 
# 如果在二叉树中，存在一条一直向下的路径，且每个点的数值恰好一一对应以 head 为首的链表中每个节点的值，那么请你返回 True ，否则返回 False 。
# 
# 一直向下的路径的意思是：从树中某个节点开始，一直连续向下的路径。
# 
# 示例 1：
# 输入：head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
# 输出：true
# 解释：树中蓝色的节点构成了与链表对应的子路径。
# 
# 示例 2：
# 输入：head = [1,4,2,6], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
# 输出：true
# 
# 示例 3：
# 输入：head = [1,4,2,6,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
# 输出：false
# 解释：二叉树中不存在一一对应链表的路径。
# 
# 提示：
# 二叉树和链表中的每个节点的值都满足 1 <= node.val <= 100 。
# 链表包含的节点数目在 1 到 100 之间。
# 二叉树包含的节点数目在 1 到 2500 之间。


from typing import *


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x, y = None):
        self.val = x
        self.next = y

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def isSubPath(self, head: ListNode, root: TreeNode) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    def toArray(a: ListNode): return ([a.val] + toArray(a.next) if a.next else [a.val]) if a else []
    def toLinked(a): return ListNode(a[0], toLinked(a[1:]) if len(a[1:]) else None) if len(a) else None

    assert toArray(unit.isSubPath(toLinked([1,2,3]))) == [1,2,3], 'Case 1'
    assert toArray(unit.isSubPath(toLinked([1,2,3]))) == [1,2,3], 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
