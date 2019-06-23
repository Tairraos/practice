# https://leetcode-cn.com/problems/number-of-digit-one/
# 0233.数字1的个数
# 难度：困难
# 
# 给定一个整数 n，计算所有小于等于 n 的非负整数中数字 1 出现的个数。
# 
# 示例：
# 输入: 13
# 输出: 6
# 解释: 数字 1 出现在以下数字中: 1, 10, 11, 12, 13 。

class Solution:
    def countDigitOne(self, n: int) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.countDigitOne('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
