# https://leetcode-cn.com/problems/range-sum-query-2d-immutable/
# 0304.二维区域和检索 - 矩阵不可变
# 难度：中等
# 
# 给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2)。
# [示意图](https://github.com/Tairraos/practice/blob/master/leetcode/figs/0304.png)
# 上图子矩阵左上角 (row1, col1) = (2, 1) ，右下角(row2, col2) = (4, 3)，该子矩形内元素的总和为 8。
# 
# 示例：
# 给定 matrix = [
#   [3, 0, 1, 4, 2],
#   [5, 6, 3, 2, 1],
#   [1, 2, 0, 1, 5],
#   [4, 1, 0, 1, 7],
#   [1, 0, 3, 0, 5]
# ]
# 
# sumRegion(2, 1, 4, 3) -> 8
# sumRegion(1, 1, 2, 2) -> 11
# sumRegion(1, 2, 2, 4) -> 12
# 
# 说明：
#   - 你可以假设矩阵不可变。
#   - 会多次调用 sumRegion 方法。
#   - 你可以假设 row1 ≤ row2 且 col1 ≤ col2。


from typing import *


class NumMatrix:

    def __init__(self, matrix: List[List[int]]):
        

    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        


# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# param_1 = obj.sumRegion(row1,col1,row2,col2)
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.__init__('param') == 'expect', 'Case 1'
    assert unit.__init__('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
