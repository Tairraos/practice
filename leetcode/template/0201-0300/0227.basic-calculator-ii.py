# https://leetcode-cn.com/problems/basic-calculator-ii/
# 0227.基本计算器 II
# 难度：中等
# 
# 实现一个基本的计算器来计算一个简单的字符串表达式的值。
# 字符串表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。
# 
# 示例 1：
# 输入: "3+2*2"
# 输出: 7
# 
# 示例 2：
# 输入: " 3/2 "
# 输出: 1
# 
# 示例 3：
# 输入: " 3+5 / 2 "
# 输出: 5
# 
# 说明：
#   - 你可以假设所给定的表达式都是有效的。
#   - 请不要使用内置的库函数 eval。


class Solution:
    def calculate(self, s: str) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.calculate('param') == 'expect', 'Case 1'
    assert unit.calculate('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
