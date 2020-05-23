# https://leetcode-cn.com/problems/palindrome-linked-list/
# 0234.回文链表
# 难度：容易
# 
# 请判断一个链表是否为回文链表。
# 
# 示例 1：
# 输入: 1->2
# 输出: false
# 
# 示例 2：
# 输入: 1->2->2->1
# 输出: true
# 
# 进阶：
# 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？


from typing import *


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x, y = None):
        self.val = x
        self.next = y

class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    def toArray(a: ListNode): return ([a.val] + toArray(a.next) if a.next else [a.val]) if a else []
    def toLinked(a): return ListNode(a[0], toLinked(a[1:]) if len(a[1:]) else None) if len(a) else None

    assert toArray(unit.isPalindrome(toLinked([1,2,3]))) == [1,2,3], 'Case 1'
    assert toArray(unit.isPalindrome(toLinked([1,2,3]))) == [1,2,3], 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
