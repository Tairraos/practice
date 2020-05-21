# https://leetcode-cn.com/problems/smallest-k-lcci/
# 面试题 17.14.最小K个数
# 难度：中等
# 
# 设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。
# 
# 示例：
# 输入： arr = [1,3,5,7,2,4,6,8], k = 4
# 输出： [1,2,3,4]
# 
# 提示：
# 0 <= len(arr) <= 100000
# 0 <= k <= min(100000, len(arr))


from typing import *


class Solution:
    def smallestK(self, arr: List[int], k: int) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.smallestK('param') == 'expect', 'Case 1'
    assert unit.smallestK('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
