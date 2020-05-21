# https://leetcode-cn.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
# 1343.大小为 K 且平均值大于等于阈值的子数组数目
# 难度：中等
# 
# 给你一个整数数组 arr 和两个整数 k 和 threshold 。
# 
# 请你返回长度为 k 且平均值大于等于 threshold 的子数组数目。
# 
# 示例 1：
# 输入：arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
# 输出：3
# 解释：子数组 [2,5,5],[5,5,5] 和 [5,5,8] 的平均值分别为 4，5 和 6 。其他长度为 3 的子数组的平均值都小于 4 （threshold 的值)。
# 
# 示例 2：
# 输入：arr = [1,1,1,1,1], k = 1, threshold = 0
# 输出：5
# 
# 示例 3：
# 输入：arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
# 输出：6
# 解释：前 6 个长度为 3 的子数组平均值都大于 5 。注意平均值不是整数。
# 
# 示例 4：
# 输入：arr = [7,7,7,7,7,7,7], k = 7, threshold = 7
# 输出：1
# 
# 示例 5：
# 输入：arr = [4,4,4,4], k = 4, threshold = 1
# 输出：1
# 
# 提示：
# 1 <= arr.length <= 10^5
# 1 <= arr[i] <= 10^4
# 1 <= k <= arr.length
# 0 <= threshold <= 10^4


from typing import *


class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.numOfSubarrays('param') == 'expect', 'Case 1'
    assert unit.numOfSubarrays('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
