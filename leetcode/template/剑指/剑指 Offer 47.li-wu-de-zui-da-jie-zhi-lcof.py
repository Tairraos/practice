# https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof/
# 剑指 Offer 47.礼物的最大价值
# 难度：中等
# 
# 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？
# 
# 示例 1:
# 输入: 
# [
#   [1,3,1],
#   [1,5,1],
#   [4,2,1]
# ]
# 输出: 12
# 解释: 路径 1&rarr;3&rarr;5&rarr;2&rarr;1 可以拿到最多价值的礼物
# 
# 提示：
# 0 < grid.length <= 200
# 0 < grid[0].length <= 200


from typing import *


class Solution:
    def maxValue(self, grid: List[List[int]]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maxValue('param') == 'expect', 'Case 1'
    assert unit.maxValue('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
