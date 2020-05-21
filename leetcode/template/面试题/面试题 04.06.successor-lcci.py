# https://leetcode-cn.com/problems/successor-lcci/
# 面试题 04.06.后继者
# 难度：中等
# 
# 设计一个算法，找出二叉搜索树中指定节点的&ldquo;下一个&rdquo;节点（也即中序后继）。
# 
# 如果指定节点没有对应的&ldquo;下一个&rdquo;节点，则返回null。
# 
# 示例 1:
# 输入: root = [2,1,3], p = 1
# 
#   2
#  / \
# 1   3
# 
# 输出: 2
# 
# 示例 2:
# 输入: root = [5,3,6,2,4,null,null,1], p = 6
# 
#       5
#      / \
#     3   6
#    / \
#   2   4
#  /   
# 1
# 
# 输出: null


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def inorderSuccessor(self, root: TreeNode, p: TreeNode) -> TreeNode:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.inorderSuccessor('param') == 'expect', 'Case 1'
    assert unit.inorderSuccessor('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
