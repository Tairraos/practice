# https://leetcode-cn.com/problems/construct-quad-tree/
# 0427.建立四叉树
# 难度：容易
# 
# 我们想要使用一棵四叉树来储存一个 N x N 的布尔值网络。网络中每一格的值只会是真或假。树的根结点代表整个网络。对于每个结点, 它将被分等成四个孩子结点直到这个区域内的值都是相同的.
# 每个结点还有另外两个布尔变量: isLeaf 和 val。isLeaf 当这个节点是一个叶子结点时为真。val 变量储存叶子结点所代表的区域的值。
# 你的任务是使用一个四叉树表示给定的网络。下面的例子将有助于你理解这个问题：
# 给定下面这个8 x 8 网络，我们将这样建立一个对应的四叉树：
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0427-1.png)
# 由上文的定义，它能被这样分割：
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0427-2.png)
# 
# 对应的四叉树应该像下面这样，每个结点由一对 (isLeaf, val) 所代表.
# 对于非叶子结点，val 可以是任意的，所以使用 * 代替。
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0427-3.png)
# 提示：
#   - N 将小于 1000 且确保是 2 的整次幂。
#   - 如果你想了解更多关于四叉树的知识，你可以参考这个 [wiki](https://zh.wikipedia.org/wiki/%E5%9B%9B%E5%8F%89%E6%A0%91) 页面。

"""
# Definition for a QuadTree node.
class Node:
    def __init__(self, val, isLeaf, topLeft, topRight, bottomLeft, bottomRight):
        self.val = val
        self.isLeaf = isLeaf
        self.topLeft = topLeft
        self.topRight = topRight
        self.bottomLeft = bottomLeft
        self.bottomRight = bottomRight
"""
class Solution:
    def construct(self, grid: List[List[int]]) -> 'Node':
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.__init__('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
