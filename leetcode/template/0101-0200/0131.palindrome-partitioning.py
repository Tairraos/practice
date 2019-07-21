# https://leetcode-cn.com/problems/palindrome-partitioning/
# 0131.分割回文串
# 难度：中等
# 
# 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
# 返回 s 所有可能的分割方案。
# 
# 示例：
# 输入: "aab"
# 输出：
# [
#   ["aa","b"],
#   ["a","a","b"]
# ]

class Solution:
    def partition(self, s: str) -> List[List[str]]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.partition('param') == 'expect', 'Case 1'
    assert unit.partition('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
