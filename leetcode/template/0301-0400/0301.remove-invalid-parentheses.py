# https://leetcode-cn.com/problems/remove-invalid-parentheses/
# 0301.删除无效的括号
# 难度：困难
# 
# 删除最小数量的无效括号，使得输入的字符串有效，返回所有可能的结果。
# 
# 说明: 输入可能包含了除 ( 和 ) 以外的字符。
# 
# 示例 1：
# 输入: "()())()"
# 输出: ["()()()", "(())()"]
# 
# 示例 2：
# 输入: "(a)())()"
# 输出: ["(a)()()", "(a())()"]
# 
# 示例 3：
# 输入: ")("
# 输出: [""]


from typing import *


class Solution:
    def removeInvalidParentheses(self, s: str) -> List[str]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.removeInvalidParentheses('param') == 'expect', 'Case 1'
    assert unit.removeInvalidParentheses('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
