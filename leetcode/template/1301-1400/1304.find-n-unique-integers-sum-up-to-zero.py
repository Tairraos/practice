# https://leetcode-cn.com/problems/find-n-unique-integers-sum-up-to-zero/
# 1304.和为零的N个唯一整数
# 难度：容易
# 
# 给你一个整数 n，请你返回 任意 一个由 n 个 各不相同 的整数组成的数组，并且这 n 个数相加和为 0 。
# 
# 示例 1：
# 输入：n = 5
# 输出：[-7,-1,1,3,4]
# 解释：这些数组也是正确的 [-5,-1,1,2,3]，[-3,-1,2,-2,4]。
# 
# 示例 2：
# 输入：n = 3
# 输出：[-1,0,1]
# 
# 示例 3：
# 输入：n = 1
# 输出：[0]
# 
# 提示：
# 1 <= n <= 1000


from typing import *


class Solution:
    def sumZero(self, n: int) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.sumZero('param') == 'expect', 'Case 1'
    assert unit.sumZero('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
