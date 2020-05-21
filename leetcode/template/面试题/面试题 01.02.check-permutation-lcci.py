# https://leetcode-cn.com/problems/check-permutation-lcci/
# 面试题 01.02.判定是否互为字符重排
# 难度：容易
# 
# 给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。
# 
# 示例 1：
# 输入: s1 = "abc", s2 = "bca"
# 输出: true 
# 
# 示例 2：
# 输入: s1 = "abc", s2 = "bad"
# 输出: false
# 
# 说明：
# 
# 0 <= len(s1) <= 100 
# 0 <= len(s2) <= 100


class Solution:
    def CheckPermutation(self, s1: str, s2: str) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.CheckPermutation('param') == 'expect', 'Case 1'
    assert unit.CheckPermutation('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
