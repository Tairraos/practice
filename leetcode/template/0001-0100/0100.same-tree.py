# https://leetcode-cn.com/problems/same-tree/
# 0100.相同的树
# 难度：容易
# 
# 给定两个二叉树，编写一个函数来检验它们是否相同。
# 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
# 
# 示例 1：
# 输入:       1         1
#           / \       / \
#          2   3     2   3
# 
#         [1,2,3],   [1,2,3]
# 
# 输出: true
# 
# 示例 2：
# 输入:      1          1
#           /           \
#          2             2
# 
#         [1,2],     [1,null,2]
# 
# 输出: false
# 
# 示例 3：
# 输入:       1         1
#           / \       / \
#          2   1     1   2
# 
#         [1,2,1],   [1,1,2]
# 
# 输出: false

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.isSameTree('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
