# https://leetcode-cn.com/problems/volume-of-histogram-lcci/
# 面试题 17.21.直方图的水量
# 难度：困难
# 
# 给定一个直方图(也称柱状图)，假设有人从上面源源不断地倒水，最后直方图能存多少水量?直方图的宽度为 1。
# 
# 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的直方图，在这种情况下，可以接 6 个单位的水（蓝色部分表示水）。 感谢 Marcos 贡献此图。
# 
# 示例:
# 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
# 输出: 6


from typing import *


class Solution:
    def trap(self, height: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.trap('param') == 'expect', 'Case 1'
    assert unit.trap('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
