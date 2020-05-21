# https://leetcode-cn.com/problems/minimum-absolute-difference/
# 1200.最小绝对差
# 难度：容易
# 
# 给你个整数数组 arr，其中每个元素都 不相同。
# 
# 请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。
# 
# 示例 1：
# 输入：arr = [4,2,1,3]
# 输出：[[1,2],[2,3],[3,4]]
# 
# 示例 2：
# 输入：arr = [1,3,6,10,15]
# 输出：[[1,3]]
# 
# 示例 3：
# 输入：arr = [3,8,-10,23,19,-4,-14,27]
# 输出：[[-14,-10],[19,23],[23,27]]
# 
# 提示：
# 2 <= arr.length <= 10^5
# -10^6 <= arr[i] <= 10^6


from typing import *


class Solution:
    def minimumAbsDifference(self, arr: List[int]) -> List[List[int]]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.minimumAbsDifference('param') == 'expect', 'Case 1'
    assert unit.minimumAbsDifference('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')