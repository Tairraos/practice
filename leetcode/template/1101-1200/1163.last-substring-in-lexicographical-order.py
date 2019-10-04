# https://leetcode-cn.com/problems/last-substring-in-lexicographical-order/
# 1163.按字典序排在最后的子串
# 难度：困难
# 
# 给你一个字符串 s，找出它的所有子串并按字典序排列，返回排在最后的那个子串。
# 
# 示例 1：
# 输入："abab"
# 输出："bab"
# 解释：我们可以找出 7 个子串 ["a", "ab", "aba", "abab", "b", "ba", "bab"]。按字典序排在最后的子串是 "bab"。
# 
# 示例 2：
# 输入："leetcode"
# 输出："tcode"
# 
# 提示：
# 1 <= s.length <= 10^5
# s 仅含有小写英文字符。


class Solution:
    def lastSubstring(self, s: str) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.lastSubstring('param') == 'expect', 'Case 1'
    assert unit.lastSubstring('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
