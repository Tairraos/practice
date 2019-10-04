# https://leetcode-cn.com/problems/distribute-coins-in-binary-tree/
# 0979.在二叉树中分配硬币
# 难度：中等
# 
# 给定一个有 N 个结点的二叉树的根结点 root，树中的每个结点上都对应有 node.val 枚硬币，并且总共有 N 枚硬币。
# 在一次移动中，我们可以选择两个相邻的结点，然后将一枚硬币从其中一个结点移动到另一个结点。(移动可以是从父结点到子结点，或者从子结点移动到父结点。)。
# 返回使每个结点上只有一枚硬币所需的移动次数。
# 
# 示例 1：
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0979-1.png)
# 输入：[3,0,0]
# 输出：2
# 解释：从树的根结点开始，我们将一枚硬币移到它的左子结点上，一枚硬币移到它的右子结点上。
# 
# 示例 2：
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0979-2.png)
# 输入：[0,3,0]
# 输出：3
# 解释：从根结点的左子结点开始，我们将两枚硬币移到根结点上 [移动两次]。然后，我们把一枚硬币从根结点移到右子结点上。
# 
# 示例 3：
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0979-3.png)
# 输入：[1,0,2]
# 输出：2
# 
# 示例 4：
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0979-4.png)
# 输入：[1,0,0,null,3]
# 输出：4
# 
# 提示：
#   - 1<= N <= 100
#   - 0 <= node.val <= N


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def distributeCoins(self, root: TreeNode) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.distributeCoins('param') == 'expect', 'Case 1'
    assert unit.distributeCoins('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
