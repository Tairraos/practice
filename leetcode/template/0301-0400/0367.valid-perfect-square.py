# https://leetcode-cn.com/problems/valid-perfect-square/
# 0367.有效的完全平方数
# 难度：容易
# 
# 给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。
# 
# 说明：不要使用任何内置的库函数，如  sqrt。
# 
# 示例 1：
# 输入：16
# 输出：True
# 
# 示例 2：
# 输入：14
# 输出：False


class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.isPerfectSquare('param') == 'expect', 'Case 1'
    assert unit.isPerfectSquare('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
