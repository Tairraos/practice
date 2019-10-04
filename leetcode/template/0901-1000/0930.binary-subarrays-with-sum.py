# https://leetcode-cn.com/problems/binary-subarrays-with-sum/
# 0930.和相同的二元子数组
# 难度：中等
# 
# 在由若干 0 和 1  组成的数组 A 中，有多少个和为 S 的非空子数组。
# 
# 示例：
# 输入：A = [1,0,1,0,1], S = 2
# 输出：4
# 解释：
# 如下面黑体所示，有 4 个满足题目要求的子数组：
# [1,0,1,0,1]
# [1,0,1,0,1]
# [1,0,1,0,1]
# [1,0,1,0,1]
# 
# 提示：
#   - A.length <= 30000
#   - 0 <= S <= A.length
#   - A[i] 为 0 或 1


from typing import *


class Solution:
    def numSubarraysWithSum(self, A: List[int], S: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.numSubarraysWithSum('param') == 'expect', 'Case 1'
    assert unit.numSubarraysWithSum('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
