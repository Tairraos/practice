# https://leetcode-cn.com/problems/intersection-of-two-arrays/
# 0349.两个数组的交集
# 难度：容易
# 
# 给定两个数组，编写一个函数来计算它们的交集。
# 
# 示例 1：
# 输入: nums1 = [1,2,2,1], nums2 = [2,2]
# 输出: [2]
# 
# 示例 2：
# 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
# 输出: [9,4]
# 
# 说明：
#   - 输出结果中的每个元素一定是唯一的。
#   - 我们可以不考虑输出结果的顺序。


from typing import *


class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.intersection('param') == 'expect', 'Case 1'
    assert unit.intersection('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
