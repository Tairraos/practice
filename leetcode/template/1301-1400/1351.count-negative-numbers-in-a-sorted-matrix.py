# https://leetcode-cn.com/problems/count-negative-numbers-in-a-sorted-matrix/
# 1351.统计有序矩阵中的负数
# 难度：容易
# 
# 给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。 
# 
# 请你统计并返回 grid 中 负数 的数目。
# 
# 示例 1：
# 输入：grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
# 输出：8
# 解释：矩阵中共有 8 个负数。
# 
# 示例 2：
# 输入：grid = [[3,2],[1,0]]
# 输出：0
# 
# 示例 3：
# 输入：grid = [[1,-1],[-1,-1]]
# 输出：3
# 
# 示例 4：
# 输入：grid = [[-1]]
# 输出：1
# 
# 提示：
# m == grid.length
# n == grid[i].length
# 1 <= m, n <= 100
# -100 <= grid[i][j] <= 100


from typing import *


class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.countNegatives('param') == 'expect', 'Case 1'
    assert unit.countNegatives('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
