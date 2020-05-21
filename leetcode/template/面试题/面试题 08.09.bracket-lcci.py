# https://leetcode-cn.com/problems/bracket-lcci/
# 面试题 08.09.括号
# 难度：中等
# 
# 括号。设计一种算法，打印n对括号的所有合法的（例如，开闭一一对应）组合。
# 
# 说明：解集不能包含重复的子集。
# 
# 例如，给出 n = 3，生成结果为：
# 
# [
#   "((()))",
#   "(()())",
#   "(())()",
#   "()(())",
#   "()()()"
# ]


from typing import *


class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.generateParenthesis('param') == 'expect', 'Case 1'
    assert unit.generateParenthesis('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
