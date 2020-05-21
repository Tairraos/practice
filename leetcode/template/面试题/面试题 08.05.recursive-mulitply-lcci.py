# https://leetcode-cn.com/problems/recursive-mulitply-lcci/
# 面试题 08.05.递归乘法
# 难度：中等
# 
# 递归乘法。 写一个递归函数，不使用 * 运算符， 实现两个正整数的相乘。可以使用加号、减号、位移，但要吝啬一些。
# 
#  示例1:
# 
#  输入：A = 1, B = 10
#  输出：10
# 
#  示例2:
# 
#  输入：A = 3, B = 4
#  输出：12
# 
#  提示:
# 
# 保证乘法范围不会溢出


class Solution:
    def multiply(self, A: int, B: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.multiply('param') == 'expect', 'Case 1'
    assert unit.multiply('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
