# https://leetcode-cn.com/problems/valid-palindrome-ii/
# 0680.验证回文字符串 Ⅱ
# 难度：容易
# 
# 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
# 
# 示例 1：
# 输入: "aba"
# 输出: True
# 
# 示例 2：
# 输入: "abca"
# 输出: True
# 解释: 你可以删除c字符。
# 
# 注意：
#   - 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。


class Solution:
    def validPalindrome(self, s: str) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.validPalindrome('param') == 'expect', 'Case 1'
    assert unit.validPalindrome('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
