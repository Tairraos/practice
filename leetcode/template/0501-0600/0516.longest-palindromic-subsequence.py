# https://leetcode-cn.com/problems/longest-palindromic-subsequence/
# 0516.最长回文子序列
# 难度：中等
# 
# 给定一个字符串s，找到其中最长的回文子序列。可以假设s的最大长度为1000。
# 
# 示例 1：
# 输入：
# "bbbab"
# 输出：
# 4
# 
# 一个可能的最长回文子序列为 "bbbb"。
# 
# 示例 2：
# 输入：
# "cbbd"
# 输出：
# 2
# 
# 一个可能的最长回文子序列为 "bb"。

class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.longestPalindromeSubseq('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
