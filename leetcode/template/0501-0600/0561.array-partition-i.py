# https://leetcode-cn.com/problems/array-partition-i/
# 0561.数组拆分 I
# 难度：容易
# 
# 给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 n 的 min(ai, bi) 总和最大。
# 
# 示例 1：
# 输入: [1,4,3,2]
# 
# 输出: 4
# 解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
# 
# 提示：
#   - n 是正整数,范围在 [1, 10000].
#   - 数组中的元素范围在 [-10000, 10000].


from typing import *


class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.arrayPairSum('param') == 'expect', 'Case 1'
    assert unit.arrayPairSum('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
