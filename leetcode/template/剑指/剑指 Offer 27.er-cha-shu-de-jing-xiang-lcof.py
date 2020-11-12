# https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/
# 剑指 Offer 27.二叉树的镜像
# 难度：容易
# 
# 请完成一个函数，输入一个二叉树，该函数输出它的镜像。
# 
# 例如输入：
# 
#      4
#    /   \
#   2     7
#  / \   / \
# 1   3 6   9
# 镜像输出：
# 
#      4
#    /   \
#   7     2
#  / \   / \
# 9   6 3   1
# 
# 示例 1：
# 输入：root = [4,2,7,1,3,6,9]
# 输出：[4,7,2,9,6,3,1]
# 
# 限制：
# 
# 0 <= 节点个数 <= 1000
# 
# 注意：本题与主站 226 题相同：https://leetcode-cn.com/problems/invert-binary-tree/


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def mirrorTree(self, root: TreeNode) -> TreeNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.mirrorTree('param') == 'expect', 'Case 1'
    assert unit.mirrorTree('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
