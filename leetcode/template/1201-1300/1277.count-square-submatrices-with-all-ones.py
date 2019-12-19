# https://leetcode-cn.com/problems/count-square-submatrices-with-all-ones/
# 1277.统计全为 1 的正方形子矩阵
# 难度：中等
# 
# 给你一个 m * n 的矩阵，矩阵中的元素不是 0 就是 1，请你统计并返回其中完全由 1 组成的 正方形 子矩阵的个数。
# 
# 示例 1：
# 输入：matrix =
# [
#   [0,1,1,1], 
#   [1,1,1,1],
#   [0,1,1,1]
# ]
# 输出：15
# 解释： 
# 边长为 1 的正方形有 10 个。
# 边长为 2 的正方形有 4 个。
# 边长为 3 的正方形有 1 个。
# 正方形的总数 = 10 + 4 + 1 = 15.
# 
# 示例 2：
# 输入：matrix = 
# [
#   [1,0,1], 
#   [1,1,0],
#   [1,1,0]
# ]
# 输出：7
# 解释：
# 边长为 1 的正方形有 6 个。 
# 边长为 2 的正方形有 1 个。
# 正方形的总数 = 6 + 1 = 7.
# 
# 提示：
# 1 <= arr.length <= 300
# 1 <= arr[0].length <= 300
# 0 <= arr[i][j] <= 1


from typing import *


class Solution:
    def countSquares(self, matrix: List[List[int]]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.countSquares('param') == 'expect', 'Case 1'
    assert unit.countSquares('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
