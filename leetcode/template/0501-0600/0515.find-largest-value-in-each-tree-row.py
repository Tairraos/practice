# https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/
# 0515.在每个树行中找最大值
# 难度：中等
# 
# 您需要在二叉树的每一行中找到最大的值。
# 
# 示例：
# 输入：
# 
#           1
#          / \
#         3   2
#        / \   \
#       5   3   9
# 
# 输出: [1, 3, 9]

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def largestValues(self, root: TreeNode) -> List[int]:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.largestValues('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
