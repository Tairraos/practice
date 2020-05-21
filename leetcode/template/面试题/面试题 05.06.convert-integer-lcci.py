# https://leetcode-cn.com/problems/convert-integer-lcci/
# 面试题 05.06.整数转换
# 难度：容易
# 
# 整数转换。编写一个函数，确定需要改变几个位才能将整数A转成整数B。
# 
#  示例1:
# 
#  输入：A = 29 （或者0b11101）, B = 15（或者0b01111）
#  输出：2
# 
#  示例2:
# 
#  输入：A = 1，B = 2
#  输出：2
# 
#  提示:
# 
# A，B范围在[-2147483648, 2147483647]之间


class Solution:
    def convertInteger(self, A: int, B: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.convertInteger('param') == 'expect', 'Case 1'
    assert unit.convertInteger('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
