# https://leetcode-cn.com/problems/max-area-of-island/
# 0695.岛屿的最大面积
# 难度：中等
# 
# 给定一个包含了一些 0 和 1的非空二维数组 grid , 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。
# 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)
# 
# 示例 1：
# [[0,0,1,0,0,0,0,1,0,0,0,0,0],
# [0,0,0,0,0,0,0,1,1,1,0,0,0],
# [0,1,1,0,1,0,0,0,0,0,0,0,0],
# [0,1,0,0,1,1,0,0,1,0,1,0,0],
# [0,1,0,0,1,1,0,0,1,1,1,0,0],
# [0,0,0,0,0,0,0,0,0,0,1,0,0],
# [0,0,0,0,0,0,0,1,1,1,0,0,0],
# [0,0,0,0,0,0,0,1,1,0,0,0,0]]
# 
# 对于上面这个给定矩阵应返回 6。注意答案不应该是11，因为岛屿只能包含水平或垂直的四个方向的“1”。
# 
# 示例 2：
# [[0,0,0,0,0,0,0,0]]
# 对于上面这个给定的矩阵, 返回 0。
# 
# 注意: 给定的矩阵grid 的长度和宽度都不超过 50。


from typing import *


class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maxAreaOfIsland('param') == 'expect', 'Case 1'
    assert unit.maxAreaOfIsland('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
