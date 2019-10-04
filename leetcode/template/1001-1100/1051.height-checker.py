# https://leetcode-cn.com/problems/height-checker/
# 1051.高度检查器
# 难度：容易
# 
# 学校在拍年度纪念照时，一般要求学生按照 非递减 的高度顺序排列。
# 
# 请你返回至少有多少个学生没有站在正确位置数量。该人数指的是：能让所有学生以 非递减 高度排列的必要移动人数。
# 
# 示例：
# 输入：[1,1,4,2,1,3]
# 输出：3
# 解释：
# 高度为 4、3 和最后一个 1 的学生，没有站在正确的位置。
# 
# 提示：
# 1 <= heights.length <= 100
# 1 <= heights[i] <= 100


from typing import *


class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.heightChecker('param') == 'expect', 'Case 1'
    assert unit.heightChecker('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
