# https://leetcode-cn.com/problems/reverse-linked-list-ii/
# 0092.反转链表 II
# 难度：中等
# 
# 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
# 
# 说明：
# 1 ≤ m ≤ n ≤ 链表长度。
# 
# 示例：
# 输入: 1->2->3->4->5->NULL, m = 2, n = 4
# 输出: 1->4->3->2->5->NULL

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseBetween(self, head: ListNode, m: int, n: int) -> ListNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.reverseBetween('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
