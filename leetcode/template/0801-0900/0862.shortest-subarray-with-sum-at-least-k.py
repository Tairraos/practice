# https://leetcode-cn.com/problems/shortest-subarray-with-sum-at-least-k/
# 0862.和至少为 K 的最短子数组
# 难度：困难
# 
# 返回 A 的最短的非空连续子数组的长度，该子数组的和至少为 K 。
# 如果没有和至少为 K 的非空子数组，返回 -1 。
# 
# 示例 1：
# 输入：A = [1], K = 1
# 输出：1
# 
# 示例 2：
# 输入：A = [1,2], K = 4
# 输出：-1
# 
# 示例 3：
# 输入：A = [2,-1,2], K = 3
# 输出：3
# 
# 提示：
#   - 1 <= A.length <= 50000
#   - -10 ^ 5 <= A[i] <= 10 ^ 5
#   - 1 <= K <= 10 ^ 9


from typing import *


class Solution:
    def shortestSubarray(self, A: List[int], K: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.shortestSubarray('param') == 'expect', 'Case 1'
    assert unit.shortestSubarray('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
