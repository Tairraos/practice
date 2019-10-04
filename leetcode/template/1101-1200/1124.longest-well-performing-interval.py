# https://leetcode-cn.com/problems/longest-well-performing-interval/
# 1124.表现良好的最长时间段
# 难度：中等
# 
# 给你一份工作时间表 hours，上面记录着某一位员工每天的工作小时数。
# 
# 我们认为当员工一天中的工作小时数大于 8 小时的时候，那么这一天就是「劳累的一天」。
# 
# 所谓「表现良好的时间段」，意味在这段时间内，「劳累的天数」是严格 大于「不劳累的天数」。
# 
# 请你返回「表现良好时间段」的最大长度。
# 
# 示例 1：
# 输入：hours = [9,9,6,0,6,6,9]
# 输出：3
# 解释：最长的表现良好时间段是 [9,9,6]。
# 
# 提示：
# 1 <= hours.length <= 10000
# 0 <= hours[i] <= 16


from typing import *


class Solution:
    def longestWPI(self, hours: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.longestWPI('param') == 'expect', 'Case 1'
    assert unit.longestWPI('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
