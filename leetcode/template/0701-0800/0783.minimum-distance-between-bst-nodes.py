# https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/
# 0783.二叉搜索树结点最小距离
# 难度：容易
# 
# 给定一个二叉搜索树的根结点 root, 返回树中任意两节点的差的最小值。
# 
# 示例：
# 输入: root = [4,2,6,1,3,null,null]
# 输出: 1
# 解释：
# 
# 注意，root是树结点对象(TreeNode object)，而不是数组。
# 
# 给定的树 [4,2,6,1,3,null,null] 可表示为下图：
# 
#           4
#         /   \
#       2      6
#      / \
#     1   3
# 
# 最小的差值是 1, 它是节点1和节点2的差值, 也是节点3和节点2的差值。
# 
# 注意：
#   - 二叉树的大小范围在 2 到 100。
#   - 二叉树总是有效的，每个节点的值都是整数，且不重复。


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def minDiffInBST(self, root: TreeNode) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.minDiffInBST('param') == 'expect', 'Case 1'
    assert unit.minDiffInBST('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
