# https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
# 剑指 Offer 50.第一个只出现一次的字符
# 难度：容易
# 
# 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
# 
# 示例:
# s = "abaccdeff"
# 返回 "b"
# 
# s = "" 
# 返回 " "
# 
# 限制：
# 
# 0 <= s 的长度 <= 50000


class Solution:
    def firstUniqChar(self, s: str) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.firstUniqChar('param') == 'expect', 'Case 1'
    assert unit.firstUniqChar('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
