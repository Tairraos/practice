# https://leetcode-cn.com/problems/sort-list/
# 0148.排序链表
# 难度：中等
# 
# 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
# 
# 示例 1：
# 输入: 4->2->1->3
# 输出: 1->2->3->4
# 
# 示例 2：
# 输入: -1->5->3->4->0
# 输出: -1->0->3->4->5


from typing import *


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def sortList(self, head: ListNode) -> ListNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.sortList('param') == 'expect', 'Case 1'
    assert unit.sortList('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
