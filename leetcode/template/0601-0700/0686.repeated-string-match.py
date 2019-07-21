# https://leetcode-cn.com/problems/repeated-string-match/
# 0686.重复叠加字符串匹配
# 难度：容易
# 
# 给定两个字符串 A 和 B, 寻找重复叠加字符串A的最小次数，使得字符串B成为叠加后的字符串A的子串，如果不存在则返回 -1。
# 举个例子，A = "abcd"，B = "cdabcdab"。
# 答案为 3， 因为 A 重复叠加三遍后为 “abcdabcdabcd”，此时 B 是其子串；A 重复叠加两遍后为"abcdabcd"，B 并不是其子串。
# 
# 注意：
# A 与 B 字符串的长度在1和10000区间范围内。

class Solution:
    def repeatedStringMatch(self, A: str, B: str) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.repeatedStringMatch('param') == 'expect', 'Case 1'
    assert unit.repeatedStringMatch('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
