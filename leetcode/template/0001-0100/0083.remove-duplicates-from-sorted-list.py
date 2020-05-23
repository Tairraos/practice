# https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
# 0083.删除排序链表中的重复元素
# 难度：容易
# 
# 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
# 
# 示例 1：
# 输入: 1->1->2
# 输出: 1->2
# 
# 示例 2：
# 输入: 1->1->2->3->3
# 输出: 1->2->3


from typing import *


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x, y = None):
        self.val = x
        self.next = y

class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    def toArray(a: ListNode): return ([a.val] + toArray(a.next) if a.next else [a.val]) if a else []
    def toLinked(a): return ListNode(a[0], toLinked(a[1:]) if len(a[1:]) else None) if len(a) else None

    assert toArray(unit.deleteDuplicates(toLinked([1,2,3]))) == [1,2,3], 'Case 1'
    assert toArray(unit.deleteDuplicates(toLinked([1,2,3]))) == [1,2,3], 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
