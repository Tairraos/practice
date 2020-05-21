# https://leetcode-cn.com/problems/zero-matrix-lcci/
# 面试题 01.08.零矩阵
# 难度：中等
# 
# 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。
# 
# 示例 1：
# 输入：
# [
#   [1,1,1],
#   [1,0,1],
#   [1,1,1]
# ]
# 输出：
# [
#   [1,0,1],
#   [0,0,0],
#   [1,0,1]
# ]
# 
# 示例 2：
# 输入：
# [
#   [0,1,2,0],
#   [3,4,5,2],
#   [1,3,1,5]
# ]
# 输出：
# [
#   [0,0,0,0],
#   [0,4,5,0],
#   [0,3,1,0]
# ]


from typing import *


class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.setZeroes('param') == 'expect', 'Case 1'
    assert unit.setZeroes('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
