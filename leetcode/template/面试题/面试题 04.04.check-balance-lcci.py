# https://leetcode-cn.com/problems/check-balance-lcci/
# 面试题 04.04.检查平衡性
# 难度：容易
# 
# 实现一个函数，检查二叉树是否平衡。在这个问题中，平衡树的定义如下：任意一个节点，其两棵子树的高度差不超过 1。示例 1:给定二叉树 [3,9,20,null,null,15,7]    3   / &#92  9  20    /  &#92   15   7返回 true 。示例 2:给定二叉树 [1,2,2,3,3,null,null,4,4]      1     / &#92    2   2   / &#92  3   3 / &#924   4返回 false 。


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.isBalanced('param') == 'expect', 'Case 1'
    assert unit.isBalanced('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
