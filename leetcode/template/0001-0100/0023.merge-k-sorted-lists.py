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

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.mergeKLists('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')