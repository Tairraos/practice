# https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/
# 剑指 Offer 51.数组中的逆序对
# 难度：困难
# 
# 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。
# 
# 示例 1:
# 输入: [7,5,6,4]
# 输出: 5
# 
# 限制：
# 
# 0 <= 数组长度 <= 50000


from typing import *


class Solution:
    def reversePairs(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.reversePairs('param') == 'expect', 'Case 1'
    assert unit.reversePairs('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
