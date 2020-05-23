# https://leetcode-cn.com/problems/next-greater-node-in-linked-list/
# 1019.链表中的下一个更大节点
# 难度：中等
# 
# 给出一个以头节点 head 作为第一个节点的链表。链表中的节点分别编号为：node_1, node_2, node_3, ... 。
# 
# 每个节点都可能有下一个更大值（next larger value）：对于 node_i，如果其 next_larger(node_i) 是 node_j.val，那么就有 j > i 且  node_j.val > node_i.val，而 j 是可能的选项中最小的那个。如果不存在这样的 j，那么下一个更大值为 0 。
# 
# 返回整数答案数组 answer，其中 answer[i] = next_larger(node_{i+1}) 。
# 
# 注意：在下面的示例中，诸如 [2,1,5] 这样的输入（不是输出）是链表的序列化表示，其头节点的值为 2，第二个节点值为 1，第三个节点值为 5 。
# 
# 示例 1：
# 输入：[2,1,5]
# 输出：[5,5,0]
# 
# 示例 2：
# 输入：[2,7,4,3,5]
# 输出：[7,0,5,5,0]
# 
# 示例 3：
# 输入：[1,7,5,1,9,2,5,1]
# 输出：[7,9,9,9,0,5,0,0]
# 
# 提示：
# 对于链表中的每个节点，1 <= node.val <= 10^9
# 给定列表的长度在 [0, 10000] 范围内


from typing import *


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x, y = None):
        self.val = x
        self.next = y

class Solution:
    def nextLargerNodes(self, head: ListNode) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    def toArray(a: ListNode): return ([a.val] + toArray(a.next) if a.next else [a.val]) if a else []
    def toLinked(a): return ListNode(a[0], toLinked(a[1:]) if len(a[1:]) else None) if len(a) else None

    assert toArray(unit.nextLargerNodes(toLinked([1,2,3]))) == [1,2,3], 'Case 1'
    assert toArray(unit.nextLargerNodes(toLinked([1,2,3]))) == [1,2,3], 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
