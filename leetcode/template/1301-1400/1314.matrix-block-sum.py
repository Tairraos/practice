# https://leetcode-cn.com/problems/matrix-block-sum/
# 1314.矩阵区域和
# 难度：中等
# 
# 给你一个 m * n 的矩阵 mat 和一个整数 K ，请你返回一个矩阵 answer ，其中每个 answer[i][j] 是所有满足下述条件的元素 mat[r][c] 的和： 
# 
# i - K <= r <= i + K, j - K <= c <= j + K 
# (r, c) 在矩阵内。
# 
# 示例 1：
# 输入：mat = [[1,2,3],[4,5,6],[7,8,9]], K = 1
# 输出：[[12,21,16],[27,45,33],[24,39,28]]
# 
# 示例 2：
# 输入：mat = [[1,2,3],[4,5,6],[7,8,9]], K = 2
# 输出：[[45,45,45],[45,45,45],[45,45,45]]
# 
# 提示：
# m == mat.length
# n == mat[i].length
# 1 <= m, n, K <= 100
# 1 <= mat[i][j] <= 100


from typing import *


class Solution:
    def matrixBlockSum(self, mat: List[List[int]], K: int) -> List[List[int]]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.matrixBlockSum('param') == 'expect', 'Case 1'
    assert unit.matrixBlockSum('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
