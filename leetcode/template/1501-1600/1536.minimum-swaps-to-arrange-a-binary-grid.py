# https://leetcode-cn.com/problems/minimum-swaps-to-arrange-a-binary-grid/
# 1536.排布二进制网格的最少交换次数
# 难度：中等
# 
# 给你一个 n x n 的二进制网格 grid，每一次操作中，你可以选择网格的 相邻两行 进行交换。
# 
# 一个符合要求的网格需要满足主对角线以上的格子全部都是 0 。
# 
# 请你返回使网格满足要求的最少操作次数，如果无法使网格符合要求，请你返回 -1 。
# 
# 主对角线指的是从 (1, 1) 到 (n, n) 的这些格子。
# 
# 示例 1：
# 输入：grid = [[0,0,1],[1,1,0],[1,0,0]]
# 输出：3
# 
# 示例 2：
# 输入：grid = [[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0]]
# 输出：-1
# 解释：所有行都是一样的，交换相邻行无法使网格符合要求。
# 
# 示例 3：
# 输入：grid = [[1,0,0],[1,1,0],[1,1,1]]
# 输出：0
# 
# 提示：
# n == grid.length
# n == grid[i].length
# 1 <= n <= 200
# grid[i][j] 要么是 0 要么是 1 。


from typing import *


class Solution:
    def minSwaps(self, grid: List[List[int]]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.minSwaps('param') == 'expect', 'Case 1'
    assert unit.minSwaps('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
