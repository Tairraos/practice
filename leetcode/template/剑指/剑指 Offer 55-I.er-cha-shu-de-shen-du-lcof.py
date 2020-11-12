# https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/
# 剑指 Offer 55-I.二叉树的深度
# 难度：容易
# 
# 输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
# 
# 例如：
# 
# 给定二叉树 [3,9,20,null,null,15,7]，
# 
#     3
#    / \
#   9  20
#     /  \
#    15   7
# 
# 返回它的最大深度 3 。
# 
# 提示：
# 节点总数 <= 10000
# 
# 注意：本题与主站 104 题相同：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maxDepth('param') == 'expect', 'Case 1'
    assert unit.maxDepth('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
