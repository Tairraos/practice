# https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/
# 面试题 56-II.数组中数字出现的次数 II
# 难度：中等
# 
# 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。
# 
# 示例 1：
# 输入：nums = [3,4,3,3]
# 输出：4
# 
# 示例 2：
# 输入：nums = [9,1,7,9,7,9,7]
# 输出：1
# 
# 限制：
# 
# 1 <= nums.length <= 10000
# 1 <= nums[i] < 2^31


from typing import *


class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.singleNumber('param') == 'expect', 'Case 1'
    assert unit.singleNumber('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
