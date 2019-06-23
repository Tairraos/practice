# https://leetcode-cn.com/problems/add-strings/
# 0415.字符串相加
# 难度：容易
# 
# 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
# 
# 注意：
#   - num1 和num2 的长度都小于 5100.
#   - num1 和num2 都只包含数字 0-9.
#   - num1 和num2 都不包含任何前导零。
#   - 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。

class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.addStrings('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
