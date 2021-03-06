# https://leetcode-cn.com/problems/four-divisors/
# 1390.四因数
# 难度：中等
# 
# 给你一个整数数组 nums，请你返回该数组中恰有四个因数的这些整数的各因数之和。
# 
# 如果数组中不存在满足题意的整数，则返回 0 。
# 
# 示例：
# 输入：nums = [21,4,7]
# 输出：32
# 解释：
# 21 有 4 个因数：1, 3, 7, 21
# 4 有 3 个因数：1, 2, 4
# 7 有 2 个因数：1, 7
# 答案仅为 21 的所有因数的和。
# 
# 提示：
# 1 <= nums.length <= 10^4
# 1 <= nums[i] <= 10^5


from typing import *


class Solution:
    def sumFourDivisors(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.sumFourDivisors('param') == 'expect', 'Case 1'
    assert unit.sumFourDivisors('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
