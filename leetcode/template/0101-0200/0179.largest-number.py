# https://leetcode-cn.com/problems/largest-number/
# 0179.最大数
# 难度：中等
# 
# 给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。
# 
# 示例 1：
# 输入: [10,2]
# 输出: 210
# 
# 示例 2：
# 输入: [3,30,34,5,9]
# 输出: 9534330
# 
# 说明: 输出结果可能非常大，所以你需要返回一个字符串而不是整数。


from typing import *


class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.largestNumber('param') == 'expect', 'Case 1'
    assert unit.largestNumber('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
