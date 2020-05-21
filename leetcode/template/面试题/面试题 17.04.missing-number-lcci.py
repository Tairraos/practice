# https://leetcode-cn.com/problems/missing-number-lcci/
# 面试题 17.04.消失的数字
# 难度：容易
# 
# 数组nums包含从0到n的所有整数，但其中缺了一个。请编写代码找出那个缺失的整数。你有办法在O(n)时间内完成吗？
# 
# 注意：本题相对书上原题稍作改动
# 
# 示例 1：
# 输入：[3,0,1]
# 输出：2
# 
# 示例 2：
# 输入：[9,6,4,2,3,5,7,0,1]
# 输出：8


from typing import *


class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.missingNumber('param') == 'expect', 'Case 1'
    assert unit.missingNumber('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
