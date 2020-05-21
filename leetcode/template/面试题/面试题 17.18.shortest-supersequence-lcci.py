# https://leetcode-cn.com/problems/shortest-supersequence-lcci/
# 面试题 17.18.最短超串
# 难度：中等
# 
# 假设你有两个数组，一个长一个短，短的元素均不相同。找到长数组中包含短数组所有的元素的最短子数组，其出现顺序无关紧要。
# 
# 返回最短子数组的左端点和右端点，如有多个满足条件的子数组，返回左端点最小的一个。若不存在，返回空数组。
# 
# 示例 1:
# 输入:
# big = [7,5,9,0,2,1,3,5,7,9,1,1,5,8,8,9,7]
# small = [1,5,9]
# 输出: [7,10]
# 
# 示例 2:
# 输入:
# big = [1,2,3]
# small = [4]
# 输出: []
# 
# 提示：
# big.length <= 100000
# 1 <= small.length <= 100000


from typing import *


class Solution:
    def shortestSeq(self, big: List[int], small: List[int]) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.shortestSeq('param') == 'expect', 'Case 1'
    assert unit.shortestSeq('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
