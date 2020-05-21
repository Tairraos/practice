# https://leetcode-cn.com/problems/bianry-number-to-string-lcci/
# 面试题 05.02.二进制数转字符串
# 难度：中等
# 
# 二进制数转字符串。给定一个介于0和1之间的实数（如0.72），类型为double，打印它的二进制表达式。如果该数字不在0和1之间，或者无法精确地用32位以内的二进制表示，则打印&ldquo;ERROR&rdquo;。
# 
# 示例1:
#  输入：0.625
#  输出："0.101"
# 
# 示例2:
#  输入：0.1
#  输出："ERROR"
#  提示：0.1无法被二进制准确表示
# 
# 提示：
# 32位包括输出中的"0."这两位。


class Solution:
    def printBin(self, num: float) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.printBin('param') == 'expect', 'Case 1'
    assert unit.printBin('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
