# https://leetcode-cn.com/problems/longest-valid-parentheses/
# 0032.最长有效括号
# 难度：困难
# 
# 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
# 
# 示例 1：
# 输入: "(()"
# 输出: 2
# 解释: 最长有效括号子串为 "()"
# 
# 示例 2：
# 输入: ")()())"
# 输出: 4
# 解释: 最长有效括号子串为 "()()"


class Solution:
    def longestValidParentheses(self, s: str) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.longestValidParentheses('param') == 'expect', 'Case 1'
    assert unit.longestValidParentheses('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
