# https://leetcode-cn.com/problems/reorganize-string/
# 0767.重构字符串
# 难度：中等
# 
# 给定一个字符串S，检查是否能重新排布其中的字母，使得两相邻的字符不同。
# 若可行，输出任意可行的结果。若不可行，返回空字符串。
# 
# 示例 1：
# 输入: S = "aab"
# 输出: "aba"
# 
# 示例 2：
# 输入: S = "aaab"
# 输出: ""
# 
# 注意：
#   - S 只包含小写字母并且长度在[1, 500]区间内。


class Solution:
    def reorganizeString(self, S: str) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.reorganizeString('param') == 'expect', 'Case 1'
    assert unit.reorganizeString('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
