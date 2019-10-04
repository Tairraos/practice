# https://leetcode-cn.com/problems/missing-number/
# 0268.缺失数字
# 难度：容易
# 
# 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
# 
# 示例 1：
# 输入: [3,0,1]
# 输出: 2
# 
# 示例 2：
# 输入: [9,6,4,2,3,5,7,0,1]
# 输出: 8
# 
# 说明：
# 你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?


from typing import *


class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.missingNumber('param') == 'expect', 'Case 1'
    assert unit.missingNumber('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
