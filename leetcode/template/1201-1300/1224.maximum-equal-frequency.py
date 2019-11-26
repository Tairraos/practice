# https://leetcode-cn.com/problems/maximum-equal-frequency/
# 1224.最大相等频率
# 难度：困难
# 
# 给出一个正整数数组 nums，请你帮忙从该数组中找出能满足下面要求的 最长 前缀，并返回其长度：
# 
# 从前缀中 删除一个 元素后，使得所剩下的每个数字的出现次数相同。
# 
# 如果删除这个元素后没有剩余元素存在，仍可认为每个数字都具有相同的出现次数（也就是 0 次）。
# 
# 示例 1：
# 输入：nums = [2,2,1,1,5,3,3,5]
# 输出：7
# 解释：对于长度为 7 的子数组 [2,2,1,1,5,3,3]，如果我们从中删去 nums[4]=5，就可以得到 [2,2,1,1,3,3]，里面每个数字都出现了两次。
# 
# 示例 2：
# 输入：nums = [1,1,1,2,2,2,3,3,3,4,4,4,5]
# 输出：13
# 
# 示例 3：
# 输入：nums = [1,1,1,2,2,2]
# 输出：5
# 
# 示例 4：
# 输入：nums = [10,2,8,9,3,8,1,5,2,3,7,6]
# 输出：8
# 
# 提示：
# 2 <= nums.length <= 10^5
# 1 <= nums[i] <= 10^5


from typing import *


class Solution:
    def maxEqualFreq(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.maxEqualFreq('param') == 'expect', 'Case 1'
    assert unit.maxEqualFreq('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
