# https://leetcode-cn.com/problems/palindrome-partitioning-ii/
# 0132.分割回文串 II
# 难度：困难
# 
# 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
# 返回符合要求的最少分割次数。
# 
# 示例：
# 输入: "aab"
# 输出: 1
# 解释: 进行一次分割就可将 s 分割成 ["aa","b"] 这样两个回文子串。

class Solution:
    def minCut(self, s: str) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.minCut('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
