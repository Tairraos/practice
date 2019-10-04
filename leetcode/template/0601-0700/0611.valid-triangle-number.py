# https://leetcode-cn.com/problems/valid-triangle-number/
# 0611.有效三角形的个数
# 难度：中等
# 
# 给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。
# 
# 示例 1：
# 输入: [2,2,3,4]
# 输出: 3
# 解释：
# 有效的组合是：
# 2,3,4 (使用第一个 2)
# 2,3,4 (使用第二个 2)
# 2,2,3
# 
# 注意：
#   - 数组长度不超过1000。
#   - 数组里整数的范围为 [0, 1000]。


from typing import *


class Solution:
    def triangleNumber(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.triangleNumber('param') == 'expect', 'Case 1'
    assert unit.triangleNumber('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
