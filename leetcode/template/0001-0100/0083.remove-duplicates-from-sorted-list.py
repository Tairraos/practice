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

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.deleteDuplicates('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')