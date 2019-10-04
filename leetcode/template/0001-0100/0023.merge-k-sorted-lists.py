# https://leetcode-cn.com/problems/merge-k-sorted-lists/
# 0023.合并K个排序链表
# 难度：困难
# 
# 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
# 
# 示例：
# 输入：
# [
#   1->4->5,
#   1->3->4,
#   2->6
# ]
# 输出: 1->1->2->3->4->4->5->6


from typing import *


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.mergeKLists('param') == 'expect', 'Case 1'
    assert unit.mergeKLists('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
