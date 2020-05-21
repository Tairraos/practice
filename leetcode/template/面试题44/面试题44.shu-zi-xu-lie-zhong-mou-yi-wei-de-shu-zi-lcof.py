# https://leetcode-cn.com/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof/
# 面试题44.数字序列中某一位的数字
# 难度：中等
# 
# 数字以0123456789101112131415&hellip;的格式序列化到一个字符序列中。在这个序列中，第5位（从下标0开始计数）是5，第13位是1，第19位是4，等等。
# 
# 请写一个函数，求任意第n位对应的数字。
# 
# 示例 1：
# 输入：n = 3
# 输出：3
# 
# 示例 2：
# 输入：n = 11
# 输出：0
# 
# 限制：
# 
# 0 <= n < 2^31
# 
# 注意：本题与主站 400 题相同：https://leetcode-cn.com/problems/nth-digit/


class Solution:
    def findNthDigit(self, n: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findNthDigit('param') == 'expect', 'Case 1'
    assert unit.findNthDigit('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
