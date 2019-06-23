# https://leetcode-cn.com/problems/subarray-product-less-than-k/
# 0713.乘积小于K的子数组
# 难度：中等
# 
# 给定一个正整数数组 nums。
# 找出该数组内乘积小于 k 的连续的子数组的个数。
# 
# 示例 1：
# 输入: nums = [10,5,2,6], k = 100
# 输出: 8
# 解释: 8个乘积小于100的子数组分别为: [10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6]。
# 需要注意的是 [10,5,2] 并不是乘积小于100的子数组。
# 
# 说明：
#   - 0 < nums.length <= 50000
#   - 0 < nums[i] < 1000
#   - 0 <= k < 10^6

class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.numSubarrayProductLessThanK('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
