# https://leetcode-cn.com/problems/break-a-palindrome/
# 1328.破坏回文串
# 难度：中等
# 
# 给你一个回文字符串 palindrome ，请你将其中 一个 字符用任意小写英文字母替换，使得结果字符串的字典序最小，且 不是 回文串。
# 
# 请你返回结果字符串。如果无法做到，则返回一个空串。
# 
# 示例 1：
# 输入：palindrome = "abccba"
# 输出："aaccba"
# 
# 示例 2：
# 输入：palindrome = "a"
# 输出：""
# 
# 提示：
# 1 <= palindrome.length <= 1000
# palindrome 只包含小写英文字母。


class Solution:
    def breakPalindrome(self, palindrome: str) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.breakPalindrome('param') == 'expect', 'Case 1'
    assert unit.breakPalindrome('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
