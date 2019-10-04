# https://leetcode-cn.com/problems/longest-univalue-path/
# 0687.最长同值路径
# 难度：容易
# 
# 给定一个二叉树，找到最长的路径，这个路径中的每个节点具有相同值。 这条路径可以经过也可以不经过根节点。
# 
# 注意：两个节点之间的路径长度由它们之间的边数表示。
# 
# 示例 1：
# 输入：
#               5
#              / \
#             4   5
#            / \   \
#           1   1   5
# 
# 输出：
# 2
# 
# 示例 2：
# 输入：
#               1
#              / \
#             4   5
#            / \   \
#           4   4   5
# 
# 输出：
# 2
# 
# 注意: 给定的二叉树不超过10000个结点。 树的高度不超过1000。


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def longestUnivaluePath(self, root: TreeNode) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.longestUnivaluePath('param') == 'expect', 'Case 1'
    assert unit.longestUnivaluePath('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
