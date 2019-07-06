# https://leetcode-cn.com/problems/smallest-string-starting-from-leaf/
# 0988.从叶结点开始的最小字符串
# 难度：中等
# 
# 给定一颗根结点为 root 的二叉树，书中的每个结点都有一个从 0 到 25 的值，分别代表字母 'a' 到 'z'：值 0 代表 'a'，值 1 代表 'b'，依此类推。
# 找出按字典序最小的字符串，该字符串从这棵树的一个叶结点开始，到根结点结束。
# （小贴士：字符串中任何较短的前缀在字典序上都是较小的：例如，在字典序上 "ab" 比 "aba" 要小。叶结点是指没有子结点的结点。）
# 
# 示例 1：
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0988-1.png)
# 输入：[0,1,2,3,4,3,4]
# 输出："dba"
# 
# 示例 2：
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0988-2.png)
# 输入：[25,1,3,1,3,0,2]
# 输出："adz"
# 
# 示例 3：
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0988-3.png)
# 输入：[2,2,1,null,1,0,null,0]
# 输出："abc"
# 提示：
#   - 给定树的结点数介于 1 和 8500 之间。
#   - 树中的每个结点都有一个介于 0 和 25 之间的值。

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def smallestFromLeaf(self, root: TreeNode) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.smallestFromLeaf('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
