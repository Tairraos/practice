# https://leetcode-cn.com/problems/binary-string-with-substrings-representing-1-to-n/
# 1016.子串能表示从 1 到 N 数字的二进制串
# 难度：中等
# 
# 给定一个二进制字符串 S（一个仅由若干 &#39;0&#39; 和 &#39;1&#39; 构成的字符串）和一个正整数 N，如果对于从 1 到 N 的每个整数 X，其二进制表示都是 S 的子串，就返回 true，否则返回 false。
# 
# 示例 1：
# 输入：S = "0110", N = 3
# 输出：true
# 
# 示例 2：
# 输入：S = "0110", N = 4
# 输出：false
# 
# 提示：
# 1 <= S.length <= 1000
# 1 <= N <= 10^9


class Solution:
    def queryString(self, S: str, N: int) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.queryString('param') == 'expect', 'Case 1'
    assert unit.queryString('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
