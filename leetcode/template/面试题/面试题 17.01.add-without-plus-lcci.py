# https://leetcode-cn.com/problems/add-without-plus-lcci/
# 面试题 17.01.不用加号的加法
# 难度：容易
# 
# 设计一个函数把两个数字相加。不得使用 + 或者其他算术运算符。
# 
# 示例:
# 输入: a = 1, b = 1
# 输出: 2
# 
# 提示：
# a, b 均可能是负数或 0
# 结果不会溢出 32 位整数


class Solution:
    def add(self, a: int, b: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.add('param') == 'expect', 'Case 1'
    assert unit.add('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
