# https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
# 面试题 25.合并两个排序的链表
# 难度：容易
# 
# 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
# 
# 示例1：
# 输入：1->2->4, 1->3->4
# 输出：1->1->2->3->4->4
# 
# 限制：
# 
# 0 <= 链表长度 <= 1000
# 
# 注意：本题与主站 21 题相同：https://leetcode-cn.com/problems/merge-two-sorted-lists/


from typing import *


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.mergeTwoLists('param') == 'expect', 'Case 1'
    assert unit.mergeTwoLists('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
