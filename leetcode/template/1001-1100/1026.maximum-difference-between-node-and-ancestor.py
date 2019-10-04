# https://leetcode-cn.com/problems/maximum-difference-between-node-and-ancestor/
# 1026.节点与其祖先之间的最大差值
# 难度：中等
# 
# 给定二叉树的根节点 root，找出存在于不同节点 A 和 B 之间的最大值 V，其中 V = |A.val - B.val|，且 A 是 B 的祖先。
# 
# （如果 A 的任何子节点之一为 B，或者 A 的任何子节点是 B 的祖先，那么我们认为 A 是 B 的祖先）
# 
# 示例：
# 输入：[8,3,10,1,6,null,14,null,null,4,7,13]
# 输出：7
# 解释： 
# 我们有大量的节点与其祖先的差值，其中一些如下：
# |8 - 3| = 5
# |3 - 7| = 4
# |8 - 1| = 7
# |10 - 13| = 3
# 在所有可能的差值中，最大值 7 由 |8 - 1| = 7 得出。
# 
# 提示：
# 树中的节点数在 2 到 5000 之间。
# 每个节点的值介于 0 到 100000 之间。


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def maxAncestorDiff(self, root: TreeNode) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maxAncestorDiff('param') == 'expect', 'Case 1'
    assert unit.maxAncestorDiff('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
