# https://leetcode-cn.com/problems/intersection-lcci/
# 面试题 16.03.交点
# 难度：困难
# 
# 给定两条线段（表示为起点start = {X1, Y1}和终点end = {X2, Y2}），如果它们有交点，请计算其交点，没有交点则返回空值。
# 要求浮点型误差不超过10^-6。若有多个交点（线段重叠）则返回X值最小的点，X坐标相同则返回Y值最小的点。
# 示例 1：
# 输入：
# line1 = {0, 0}, {1, 0}
# line2 = {1, 1}, {0, -1}
# 输出： {0.5, 0}
# 
# 示例 2：
# 输入：
# line1 = {0, 0}, {3, 3}
# line2 = {1, 1}, {2, 2}
# 输出： {1, 1}
# 
# 示例 3：
# 输入：
# line1 = {0, 0}, {1, 1}
# line2 = {1, 0}, {2, 1}
# 输出： {}，两条线段没有交点
# 
# 提示：
# 坐标绝对值不会超过2^7
# 输入的坐标均是有效的二维坐标


from typing import *


class Solution:
    def intersection(self, start1: List[int], end1: List[int], start2: List[int], end2: List[int]) -> List[float]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.intersection('param') == 'expect', 'Case 1'
    assert unit.intersection('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
