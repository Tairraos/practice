# https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
# 面试题53 - I.在排序数组中查找数字 I
# 难度：容易
# 
# 统计一个数字在排序数组中出现的次数。
# 
# 示例 1:
# 输入: nums = [5,7,7,8,8,10], target = 8
# 输出: 2
# 
# 示例 2:
# 输入: nums = [5,7,7,8,8,10], target = 6
# 输出: 0
# 
# 限制：
# 
# 0 <= 数组长度 <= 50000
# 
# 注意：本题与主站 34 题相同（仅返回值不同）：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/


from typing import *


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.search('param') == 'expect', 'Case 1'
    assert unit.search('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
