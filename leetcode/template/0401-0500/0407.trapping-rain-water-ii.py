# https://leetcode-cn.com/problems/trapping-rain-water-ii/
# 0407.接雨水 II
# 难度：困难
# 
# 给定一个 m x n 的矩阵，其中的值均为正整数，代表二维高度图每个单元的高度，请计算图中形状最多能接多少体积的雨水。
# 
# 说明：
# m 和 n 都是小于110的整数。每一个单位的高度都大于0 且小于 20000。
# 
# 示例：
# 给出如下 3x6 的高度图：
# [
#   [1,4,3,1,3,2],
#   [3,2,1,3,2,4],
#   [2,3,3,2,3,1]
# ]
# 
# 返回 4。
# 
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0408-1.png)
# 如上图所示，这是下雨前的高度图[[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]] 的状态。
# 
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0408-2.png)
# 下雨后，雨水将会被存储在这些方块中。总的接雨水量是4。


from typing import *


class Solution:
    def trapRainWater(self, heightMap: List[List[int]]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.trapRainWater('param') == 'expect', 'Case 1'
    assert unit.trapRainWater('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
