# https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
# 0124.二叉树中的最大路径和
# 难度：困难
# 
# 给定一个非空二叉树，返回其最大路径和。
# 本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。
# 
# 示例 1：
# 输入: [1,2,3]
# 
#        1
#       / \
#      2   3
# 
# 输出: 6
# 
# 示例 2：
# 输入: [-10,9,20,null,null,15,7]
# 
#    -10
#    / \
#   9  20
#     /  \
#    15   7
# 
# 输出: 42

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def maxPathSum(self, root: TreeNode) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maxPathSum('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
