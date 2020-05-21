# https://leetcode-cn.com/problems/swap-numbers-lcci/
# 面试题 16.01.交换数字
# 难度：中等
# 
# 编写一个函数，不用临时变量，直接交换numbers = [a, b]中a与b的值。
# 示例：
# 输入: numbers = [1,2]
# 输出: [2,1]
# 
# 提示：
# numbers.length == 2


from typing import *


class Solution:
    def swapNumbers(self, numbers: List[int]) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.swapNumbers('param') == 'expect', 'Case 1'
    assert unit.swapNumbers('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
