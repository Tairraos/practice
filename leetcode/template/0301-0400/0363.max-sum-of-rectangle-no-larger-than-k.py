# https://leetcode-cn.com/problems/max-sum-of-rectangle-no-larger-than-k/
# 0363.矩形区域不超过 K 的最大数值和
# 难度：困难
# 
# 给定一个非空二维矩阵 matrix 和一个整数 k，找到这个矩阵内部不大于 k 的最大矩形和。
# 
# 示例：
# 输入: matrix = [[1,0,1],[0,-2,3]], k = 2
# 输出: 2
# 解释: 矩形区域 [[0, 1], [-2, 3]] 的数值和是 2，且 2 是不超过 k 的最大数字（k = 2）。
# 
# 说明：
#   - 矩阵内的矩形区域面积必须大于 0。
#   - 如果行数远大于列数，你将如何解答呢？


from typing import *


class Solution:
    def maxSumSubmatrix(self, matrix: List[List[int]], k: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maxSumSubmatrix('param') == 'expect', 'Case 1'
    assert unit.maxSumSubmatrix('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
