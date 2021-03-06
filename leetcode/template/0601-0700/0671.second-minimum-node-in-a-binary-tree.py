# https://leetcode-cn.com/problems/second-minimum-node-in-a-binary-tree/
# 0671.二叉树中第二小的节点
# 难度：容易
# 
# 给定一个非空特殊的二叉树，每个节点都是正数，并且每个节点的子节点数量只能为 2 或 0。如果一个节点有两个子节点的话，那么这个节点的值不大于它的子节点的值。
# 给出这样的一个二叉树，你需要输出所有节点中的第二小的值。如果第二小的值不存在的话，输出 -1 。
# 
# 示例 1：
# 输入：
#     2
#    / \
#   2   5
#      / \
#     5   7
# 
# 输出: 5
# 
# 说明: 最小的值是 2 ，第二小的值是 5 。
# 
# 示例 2：
# 输入：
#     2
#    / \
#   2   2
# 
# 输出: -1
# 
# 说明: 最小的值是 2, 但是不存在第二小的值。


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def findSecondMinimumValue(self, root: TreeNode) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findSecondMinimumValue('param') == 'expect', 'Case 1'
    assert unit.findSecondMinimumValue('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
