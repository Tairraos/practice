# https://leetcode-cn.com/problems/find-bottom-left-tree-value/
# 0513.找树左下角的值
# 难度：中等
# 
# 给定一个二叉树，在树的最后一行找到最左边的值。
# 
# 示例 1：
# 输入：
# 
#     2
#    / \
#   1   3
# 
# 输出：
# 1
# 
# 示例 2：
# 输入：
# 
#         1
#        / \
#       2   3
#      /   / \
#     4   5   6
#        /
#       7
# 
# 输出：
# 7
# 
# 注意: 您可以假设树（即给定的根节点）不为 NULL。


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
    def findBottomLeftValue(self, root: TreeNode) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findBottomLeftValue('param') == 'expect', 'Case 1'
    assert unit.findBottomLeftValue('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
