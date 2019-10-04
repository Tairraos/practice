# https://leetcode-cn.com/problems/insertion-sort-list/
# 0147.对链表进行插入排序
# 难度：中等
# 
# 对链表进行插入排序。
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0147.gif)
# 插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。
# 每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。
# 
# 插入排序算法：
#   - 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
#   - 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
#   - 重复直到所有输入数据插入完为止。
# 
# 示例 1：
# 输入: 4->2->1->3
# 输出: 1->2->3->4
# 
# 示例 2：
# 输入: -1->5->3->4->0
# 输出: -1->0->3->4->5


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
    def insertionSortList(self, head: ListNode) -> ListNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.insertionSortList('param') == 'expect', 'Case 1'
    assert unit.insertionSortList('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
