# https://leetcode-cn.com/problems/merge-intervals/
# 0056.合并区间
# 难度：中等
# 
# 给出一个区间的集合，请合并所有重叠的区间。
# 
# 示例 1：
# 输入: [[1,3],[2,6],[8,10],[15,18]]
# 输出: [[1,6],[8,10],[15,18]]
# 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
# 
# 示例 2：
# 输入: [[1,4],[4,5]]
# 输出: [[1,5]]
# 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。


from typing import *


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.merge('param') == 'expect', 'Case 1'
    assert unit.merge('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
