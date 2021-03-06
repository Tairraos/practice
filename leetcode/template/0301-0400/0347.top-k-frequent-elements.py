# https://leetcode-cn.com/problems/top-k-frequent-elements/
# 0347.前K个高频元素
# 难度：中等
# 
# 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
# 
# 示例 1：
# 输入: nums = [1,1,1,2,2,3], k = 2
# 输出: [1,2]
# 
# 示例 2：
# 输入: nums = [1], k = 1
# 输出: [1]
# 
# 说明：
#   - 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
#   - 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。


from typing import *


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.topKFrequent('param') == 'expect', 'Case 1'
    assert unit.topKFrequent('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
