# https://leetcode-cn.com/problems/minimum-increment-to-make-array-unique/
# 0945.使数组唯一的最小增量
# 难度：中等
# 
# 给定整数数组 A，每次 move 操作将会选择任意 A[i]，并将其递增 1。
# 返回使 A 中的每个值都是唯一的最少操作次数。
# 
# 示例 1：
# 输入：[1,2,2]
# 输出：1
# 解释：经过一次 move 操作，数组将变为 [1, 2, 3]。
# 
# 示例 2：
# 输入：[3,2,1,2,1,7]
# 输出：6
# 解释：经过 6 次 move 操作，数组将变为 [3, 4, 1, 2, 5, 7]。
# 可以看出 5 次或 5 次以下的 move 操作是不能让数组的每个值唯一的。
# 
# 提示：
#   - 0 <= A.length <= 40000
#   - 0 <= A[i] < 40000


from typing import *


class Solution:
    def minIncrementForUnique(self, A: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.minIncrementForUnique('param') == 'expect', 'Case 1'
    assert unit.minIncrementForUnique('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
