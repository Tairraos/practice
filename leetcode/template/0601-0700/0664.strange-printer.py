# https://leetcode-cn.com/problems/strange-printer/
# 0664.奇怪的打印机
# 难度：困难
# 
# 有台奇怪的打印机有以下两个特殊要求：
#   - 打印机每次只能打印同一个字符序列。
#   - 每次可以在任意起始和结束位置打印新字符，并且会覆盖掉原来已有的字符。
# 
# 给定一个只包含小写英文字母的字符串，你的任务是计算这个打印机打印它需要的最少次数。
# 
# 示例 1：
# 输入: "aaabbb"
# 输出: 2
# 解释: 首先打印 "aaa" 然后打印 "bbb"。
# 
# 示例 2：
# 输入: "aba"
# 输出: 2
# 解释: 首先打印 "aaa" 然后在第二个位置打印 "b" 覆盖掉原来的字符 'a'。
# 提示: 输入字符串的长度不会超过 100。

class Solution:
    def strangePrinter(self, s: str) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.strangePrinter('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
