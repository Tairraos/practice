# https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements/
# 0453.最小移动次数使数组元素相等
# 难度：容易
# 
# 给定一个长度为 n 的非空整数数组，找到让数组所有元素相等的最小移动次数。每次移动可以使 n - 1 个元素增加 1。
# 
# 示例：
# 输入：
# [1,2,3]
# 
# 输出：
# 3
# 
# 解释：
# 只需要3次移动（注意每次移动会增加两个元素的值）：
# 
# [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]


from typing import *


class Solution:
    def minMoves(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.minMoves('param') == 'expect', 'Case 1'
    assert unit.minMoves('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
