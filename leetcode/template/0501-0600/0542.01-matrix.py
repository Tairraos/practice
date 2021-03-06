# https://leetcode-cn.com/problems/01-matrix/
# 0542.01 矩阵
# 难度：中等
# 
# 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。
# 两个相邻元素间的距离为 1 。
# 
# 示例 1：
# 输入：
# 0 0 0
# 0 1 0
# 0 0 0
# 
# 输出：
# 0 0 0
# 0 1 0
# 0 0 0
# 
# 示例 2：
# 输入：
# 0 0 0
# 0 1 0
# 1 1 1
# 
# 输出：
# 0 0 0
# 0 1 0
# 1 2 1
# 
# 注意：
#   - 给定矩阵的元素个数不超过 10000。
#   - 给定矩阵中至少有一个元素是 0。
#   - 矩阵中的元素只在四个方向上相邻: 上、下、左、右。


from typing import *


class Solution:
    def updateMatrix(self, matrix: List[List[int]]) -> List[List[int]]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.updateMatrix('param') == 'expect', 'Case 1'
    assert unit.updateMatrix('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
