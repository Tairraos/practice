# https://leetcode-cn.com/problems/draw-line-lcci/
# 面试题 05.08.绘制直线
# 难度：中等
# 
# 绘制直线。有个单色屏幕存储在一个一维数组中，使得32个连续像素可以存放在一个 int 里。屏幕宽度为w，且w可被32整除（即一个 int 不会分布在两行上），屏幕高度可由数组长度及屏幕宽度推算得出。请实现一个函数，绘制从点(x1, y)到点(x2, y)的水平线。
# 
# 给出数组的长度 length，宽度 w（以比特为单位）、直线开始位置 x1（比特为单位）、直线结束位置 x2（比特为单位）、直线所在行数 y。返回绘制过后的数组。
# 
# 示例1:
#  输入：length = 1, w = 32, x1 = 30, x2 = 31, y = 0
#  输出：[3]
#  说明：在第0行的第30位到第31为画一条直线，屏幕表示为[0b000000000000000000000000000000011]
# 
# 示例2:
#  输入：length = 3, w = 96, x1 = 0, x2 = 95, y = 0
#  输出：[-1, -1, -1]


from typing import *


class Solution:
    def drawLine(self, length: int, w: int, x1: int, x2: int, y: int) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.drawLine('param') == 'expect', 'Case 1'
    assert unit.drawLine('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
