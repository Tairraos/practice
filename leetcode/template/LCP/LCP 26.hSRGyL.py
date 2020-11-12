# https://leetcode-cn.com/problems/hSRGyL/
# LCP 26.导航装置
# 难度：困难
# 
# 小扣参加的秋日市集景区共有 $N$ 个景点，景点编号为 $1$~$N$。景点内设有 $N-1$ 条双向道路，使所有景点形成了一个二叉树结构，根结点记为 `root`，景点编号即为节点值。
# 
# 由于秋日市集景区的结构特殊，游客很容易迷路，主办方决定在景区的若干个景点设置导航装置，按照所在景点编号升序排列后定义装置编号为 1 ~ M。导航装置向游客发送数据，数据内容为列表 `[游客与装置 1 的相对距离,游客与装置 2 的相对距离,...,游客与装置 M 的相对距离]`。由于游客根据导航装置发送的信息来确认位置，因此主办方需保证游客在每个景点接收的数据信息皆不相同。请返回主办方最少需要设置多少个导航装置。
# 
# **示例 1：**
# >输入：`root = [1,2,null,3,4]`
# >
# >输出：`2`
# >
# >解释：在景点 1、3 或景点 1、4 或景点 3、4 设置导航装置。
# >
# >![image.png](https://pic.leetcode-cn.com/1597996812-tqrgwu-image.png){:height="250px"}
# 
# **示例 2：**
# >输入：`root = [1,2,3,4]`
# >
# >输出：`1`
# >
# >解释：在景点 3、4 设置导航装置皆可。
# >
# >![image.png](https://pic.leetcode-cn.com/1597996826-EUQRyz-image.png){:height="200px"}
# 
# **提示：**
# - `2 <= N <= 50000`
# - 二叉树的非空节点值为 `1~N` 的一个排列。


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
class Solution:
    def navigation(self, root: TreeNode) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.navigation('param') == 'expect', 'Case 1'
    assert unit.navigation('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
