# https://leetcode-cn.com/problems/corporate-flight-bookings/
# 1109.航班预订统计
# 难度：中等
# 
# 这里有 n 个航班，它们分别从 1 到 n 进行编号。
# 
# 我们这儿有一份航班预订表，表中第 i 条预订记录 bookings[i] = [i, j, k] 意味着我们在从 i 到 j 的每个航班上预订了 k 个座位。
# 
# 请你返回一个长度为 n 的数组 answer，按航班编号顺序返回每个航班上预订的座位数。
# 
# 示例：
# 输入：bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
# 输出：[10,55,45,25,25]
# 
# 提示：
# 1 <= bookings.length <= 20000
# 1 <= bookings[i][0] <= bookings[i][1] <= n <= 20000
# 1 <= bookings[i][2] <= 10000


from typing import *


class Solution:
    def corpFlightBookings(self, bookings: List[List[int]], n: int) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.corpFlightBookings('param') == 'expect', 'Case 1'
    assert unit.corpFlightBookings('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
