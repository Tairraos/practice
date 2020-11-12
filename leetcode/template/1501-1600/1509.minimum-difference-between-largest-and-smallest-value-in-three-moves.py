# https://leetcode-cn.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/
# 1509.三次操作后最大值与最小值的最小差
# 难度：中等
# 
# 给你一个数组 nums ，每次操作你可以选择 nums 中的任意一个元素并将它改成任意值。
# 
# 请你返回三次操作后， nums 中最大值与最小值的差的最小值。
# 
# 示例 1：
# 输入：nums = [5,3,2,4]
# 输出：0
# 解释：将数组 [5,3,2,4] 变成 [2,2,2,2].
# 最大值与最小值的差为 2-2 = 0 。
# 
# 示例 2：
# 输入：nums = [1,5,0,10,14]
# 输出：1
# 解释：将数组 [1,5,0,10,14] 变成 [1,1,0,1,1] 。
# 最大值与最小值的差为 1-0 = 1 。
# 
# 示例 3：
# 输入：nums = [6,6,0,1,1,4,6]
# 输出：2
# 
# 示例 4：
# 输入：nums = [1,5,6,14,15]
# 输出：1
# 
# 提示：
# 1 <= nums.length <= 10^5
# -10^9 <= nums[i] <= 10^9


from typing import *


class Solution:
    def minDifference(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.minDifference('param') == 'expect', 'Case 1'
    assert unit.minDifference('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
