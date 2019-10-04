# https://leetcode-cn.com/problems/univalued-binary-tree/
# 0965.单值二叉树
# 难度：容易
# 
# 如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树。
# 只有给定的树是单值二叉树时，才返回 true；否则返回 false。
# 
# 示例 1：
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0965-1.png)
# 输入：[1,1,1,1,1,null,1]
# 输出：true
# 
# 示例 2：
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0965-2.png)
# 输入：[2,2,2,5,2]
# 输出：false
# 
# 提示：
#   - 给定树的节点数范围是 [1, 100]。
#   - 每个节点的值都是整数，范围为 [0, 99] 。


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def isUnivalTree(self, root: TreeNode) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.isUnivalTree('param') == 'expect', 'Case 1'
    assert unit.isUnivalTree('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
