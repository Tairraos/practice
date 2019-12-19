# https://leetcode-cn.com/problems/remove-covered-intervals/
# 1288.删除被覆盖区间
# 难度：中等
# 
# 给你一个区间列表，请你删除列表中被其他区间所覆盖的区间。
# 
# 只有当 c <= a 且 b <= d 时，我们才认为区间 [a,b) 被区间 [c,d) 覆盖。
# 
# 在完成所有删除操作后，请你返回列表中剩余区间的数目。
# 
# 示例：
# 输入：intervals = [[1,4],[3,6],[2,8]]
# 输出：2
# 解释：区间 [3,6] 被区间 [2,8] 覆盖，所以它被删除了。
# 
# 提示：​​​​​​
# 1 <= intervals.length <= 1000
# 0 <= intervals[i][0] < intervals[i][1] <= 10^5
# 对于所有的 i != j：intervals[i] != intervals[j]


from typing import *


class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.removeCoveredIntervals('param') == 'expect', 'Case 1'
    assert unit.removeCoveredIntervals('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
