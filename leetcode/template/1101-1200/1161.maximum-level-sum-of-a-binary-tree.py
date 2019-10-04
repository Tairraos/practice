# https://leetcode-cn.com/problems/maximum-level-sum-of-a-binary-tree/
# 1161.最大层内元素和
# 难度：中等
# 
# 给你一个二叉树的根节点 root。设根节点位于二叉树的第 1 层，而根节点的子节点位于第 2 层，依此类推。
# 
# 请你找出层内元素之和 最大 的那几层（可能只有一层）的层号，并返回其中 最小 的那个。
# 
# 示例：
# 输入：[1,7,0,7,-8,null,null]
# 输出：2
# 解释：
# 第 1 层各元素之和为 1，
# 第 2 层各元素之和为 7 + 0 = 7，
# 第 3 层各元素之和为 7 + -8 = -1，
# 所以我们返回第 2 层的层号，它的层内元素之和最大。
# 
# 提示：
# 树中的节点数介于 1 和 10^4 之间
# -10^5 <= node.val <= 10^5


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def maxLevelSum(self, root: TreeNode) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maxLevelSum('param') == 'expect', 'Case 1'
    assert unit.maxLevelSum('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
