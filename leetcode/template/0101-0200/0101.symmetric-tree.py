# https://leetcode-cn.com/problems/symmetric-tree/
# 0101.对称二叉树
# 难度：容易
# 
# 给定一个二叉树，检查它是否是镜像对称的。
# 
# 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
#     1
#    / \
#   2   2
# / \ / \
# 3  4 4  3
# 
# 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的：
#     1
#    / \
#   2   2
#    \   \
#    3    3
# 
# 说明：
# 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.isSymmetric('param') == 'expect', 'Case 1'
    assert unit.isSymmetric('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
