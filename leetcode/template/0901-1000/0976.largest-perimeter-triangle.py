# https://leetcode-cn.com/problems/largest-perimeter-triangle/
# 0976.三角形的最大周长
# 难度：容易
# 
# 给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。
# 如果不能形成任何面积不为零的三角形，返回 0。
# 
# 示例 1：
# 输入：[2,1,2]
# 输出：5
# 
# 示例 2：
# 输入：[1,2,1]
# 输出：0
# 
# 示例 3：
# 输入：[3,2,3,4]
# 输出：10
# 
# 示例 4：
# 输入：[3,6,2,3]
# 输出：8
# 
# 提示：
#   - 3 <= A.length <= 10000
#   - 1 <= A[i] <= 10^6


from typing import *


class Solution:
    def largestPerimeter(self, A: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.largestPerimeter('param') == 'expect', 'Case 1'
    assert unit.largestPerimeter('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
