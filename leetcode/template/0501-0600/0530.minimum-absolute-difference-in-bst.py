# https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/
# 0530.二叉搜索树的最小绝对差
# 难度：容易
# 
# 给定一个所有节点为非负值的二叉搜索树，求树中任意两节点的差的绝对值的最小值。
# 
# 示例：
# 输入：
# 
#    1
#     \
#      3
#     /
#    2
# 
# 输出：
# 1
# 
# 解释：
# 最小绝对差为1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。
# 
# 注意: 树中至少有2个节点。


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def getMinimumDifference(self, root: TreeNode) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.getMinimumDifference('param') == 'expect', 'Case 1'
    assert unit.getMinimumDifference('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
