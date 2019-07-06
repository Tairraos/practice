# https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
# 0082.删除排序链表中的重复元素 II
# 难度：中等
# 
# 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
# 
# 示例 1：
# 输入: 1->2->3->3->4->4->5
# 输出: 1->2->5
# 
# 示例 2：
# 输入: 1->1->1->2->3
# 输出: 2->3

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.deleteDuplicates('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
