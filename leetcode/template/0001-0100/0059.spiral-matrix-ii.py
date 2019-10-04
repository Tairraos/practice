# https://leetcode-cn.com/problems/spiral-matrix-ii/
# 0059.螺旋矩阵 II
# 难度：中等
# 
# 给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
# 
# 示例：
# 输入: 3
# 输出：
# [
# [ 1, 2, 3 ],
# [ 8, 9, 4 ],
# [ 7, 6, 5 ]
# ]


from typing import *


class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.generateMatrix('param') == 'expect', 'Case 1'
    assert unit.generateMatrix('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
