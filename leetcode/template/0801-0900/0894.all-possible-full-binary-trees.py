# https://leetcode-cn.com/problems/all-possible-full-binary-trees/
# 0894.所有可能的满二叉树
# 难度：中等
# 
# 满二叉树是一类二叉树，其中每个结点恰好有 0 或 2 个子结点。
# 返回包含 N 个结点的所有可能满二叉树的列表。 答案的每个元素都是一个可能树的根结点。
# 答案中每个树的每个结点都必须有 node.val=0。
# 你可以按任何顺序返回树的最终列表。
# 
# 示例：
# 输入：7
# 输出：[[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
# 解释：
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0894.png)
# 
# 提示：
#   - 1 <= N <= 20


from typing import *


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def allPossibleFBT(self, N: int) -> List[TreeNode]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.allPossibleFBT('param') == 'expect', 'Case 1'
    assert unit.allPossibleFBT('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
