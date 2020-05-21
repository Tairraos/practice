# https://leetcode-cn.com/problems/reverse-subarray-to-maximize-array-value/
# 1330.翻转子数组得到最大的数组值
# 难度：困难
# 
# 给你一个整数数组 nums 。「数组值」定义为所有满足 0 <= i < nums.length-1 的 |nums[i]-nums[i+1]| 的和。
# 
# 你可以选择给定数组的任意子数组，并将该子数组翻转。但你只能执行这个操作 一次 。
# 
# 请你找到可行的最大 数组值 。
# 
# 示例 1：
# 输入：nums = [2,3,1,5,4]
# 输出：10
# 解释：通过翻转子数组 [3,1,5] ，数组变成 [2,5,1,3,4] ，数组值为 10 。
# 
# 示例 2：
# 输入：nums = [2,4,9,24,2,1,10]
# 输出：68
# 
# 提示：
# 1 <= nums.length <= 3*10^4
# -10^5 <= nums[i] <= 10^5


from typing import *


class Solution:
    def maxValueAfterReverse(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maxValueAfterReverse('param') == 'expect', 'Case 1'
    assert unit.maxValueAfterReverse('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')