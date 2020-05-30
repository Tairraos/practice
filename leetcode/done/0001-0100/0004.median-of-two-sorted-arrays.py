# https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
# 0004.寻找两个有序数组的中位数
# 难度：困难
# 
# 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
# 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
# 你可以假设 nums1 和 nums2 不会同时为空。
# 
# 示例 1：
# nums1 = [1, 3]
# nums2 = [2]
# 则中位数是 2.0
# 
# 示例 2：
# nums1 = [1, 2]
# nums2 = [3, 4]
# 则中位数是 (2 + 3)/2 = 2.5


from typing import *


class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        a = sorted(nums1 + nums2) # 排序
        # 从两头各取一个中间值，加起来除2
        # 奇数长度两次都会取到中间值，偶数长度会取到中间两个值
        return (a[len(a) // 2] + a[len(a) - (len(a) // 2) - 1]) / 2


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findMedianSortedArrays([1, 3], [2]) == 2, 'Case 1'
    assert unit.findMedianSortedArrays([1, 2], [3, 4]) == 2.5, 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
