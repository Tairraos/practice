# https://leetcode-cn.com/problems/shortest-palindrome/
# 0214.最短回文串
# 难度：困难
# 
# 给定一个字符串 s，你可以通过在字符串前面添加字符将其转换为回文串。找到并返回可以用这种方式转换的最短回文串。
# 
# 示例 1：
# 输入: "aacecaaa"
# 输出: "aaacecaaa"
# 
# 示例 2：
# 输入: "abcd"
# 输出: "dcbabcd"

class Solution:
    def shortestPalindrome(self, s: str) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.shortestPalindrome('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
