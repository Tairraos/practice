# https://leetcode-cn.com/problems/convert-bst-to-greater-tree/
# 0538.把二叉搜索树转换为累加树
# 难度：容易
# 
# 给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。
# 
# 例如：
# 输入: 二叉搜索树：
#               5
#             /   \
#            2     13
# 
# 输出: 转换为累加树：
#              18
#             /   \
#           20     13

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def convertBST(self, root: TreeNode) -> TreeNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.convertBST('param') == 'expect', 'Case 1'
    assert unit.convertBST('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
