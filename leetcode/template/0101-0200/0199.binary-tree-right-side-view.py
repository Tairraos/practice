# https://leetcode-cn.com/problems/binary-tree-right-side-view/
# 0199.二叉树的右视图
# 难度：中等
# 
# 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
# 
# 示例：
# 输入: [1,2,3,null,5,null,4]
# 输出: [1, 3, 4]
# 解释：
# 
#    1            <---
#  /   \
# 2     3         <---
#  \    \
#   5      4      <---

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def rightSideView(self, root: TreeNode) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.rightSideView('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
