# https://leetcode-cn.com/problems/first-missing-positive/
# 0041.缺失的第一个正数
# 难度：困难
# 
# 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
# 
# 示例 1：
# 输入: [1,2,0]
# 输出: 3
# 
# 示例 2：
# 输入: [3,4,-1,1]
# 输出: 2
# 
# 示例 3：
# 输入: [7,8,9,11,12]
# 输出: 1
# 
# 说明：
# 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。


from typing import *


class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.firstMissingPositive('param') == 'expect', 'Case 1'
    assert unit.firstMissingPositive('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
