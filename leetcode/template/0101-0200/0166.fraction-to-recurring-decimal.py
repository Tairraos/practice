# https://leetcode-cn.com/problems/fraction-to-recurring-decimal/
# 0166.分数到小数
# 难度：中等
# 
# 给定两个整数，分别表示分数的分子 numerator 和分母 denominator，以字符串形式返回小数。
# 如果小数部分为循环小数，则将循环的部分括在括号内。
# 
# 示例 1：
# 输入: numerator = 1, denominator = 2
# 输出: "0.5"
# 
# 示例 2：
# 输入: numerator = 2, denominator = 1
# 输出: "2"
# 
# 示例 3：
# 输入: numerator = 2, denominator = 3
# 输出: "0.(6)"

class Solution:
    def fractionToDecimal(self, numerator: int, denominator: int) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.fractionToDecimal('param') == 'expect', 'Case 1'
    assert unit.fractionToDecimal('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
