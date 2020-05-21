# https://leetcode-cn.com/problems/exchange-lcci/
# 面试题 05.07.配对交换
# 难度：容易
# 
# 配对交换。编写程序，交换某个整数的奇数位和偶数位，尽量使用较少的指令（也就是说，位0与位1交换，位2与位3交换，以此类推）。
# 
#  示例1:
# 
#  输入：num = 2（或者0b10）
#  输出 1 (或者 0b01)
# 
#  示例2:
# 
#  输入：num = 3
#  输出：3
# 
#  提示:
# 
# num的范围在[0, 2^30 - 1]之间，不会发生整数溢出。


class Solution:
    def exchangeBits(self, num: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.exchangeBits('param') == 'expect', 'Case 1'
    assert unit.exchangeBits('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
