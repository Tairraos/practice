# https://leetcode-cn.com/problems/maximum-average-subarray-i/
# 0643.子数组最大平均数 I
# 难度：容易
# 
# 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
# 
# 示例 1：
# 输入: [1,12,-5,-6,50,3], k = 4
# 输出: 12.75
# 解释: 最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
# 
# 注意：
#   - 1 <= k <= n <= 30,000。
#   - 所给数据范围 [-10,000，10,000]。

class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findMaxAverage('param') == 'expect', 'Case 1'
    assert unit.findMaxAverage('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
