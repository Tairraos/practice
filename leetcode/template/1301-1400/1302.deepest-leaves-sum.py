# https://leetcode-cn.com/problems/deepest-leaves-sum/
# 1302.层数最深叶子节点的和
# 难度：中等
# 
# 给你一棵二叉树，请你返回层数最深的叶子节点的和。
# 
# 示例：
# 输入：root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
# 输出：15
# 
# 提示：
# 树中节点数目在 1 到 10^4 之间。
# 每个节点的值在 1 到 100 之间。


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def deepestLeavesSum(self, root: TreeNode) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.deepestLeavesSum('param') == 'expect', 'Case 1'
    assert unit.deepestLeavesSum('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
