# https://leetcode-cn.com/problems/number-of-ways-to-split-a-string/
# 1573.分割字符串的方案数
# 难度：中等
# 
# 给你一个二进制串 s  （一个只包含 0 和 1 的字符串），我们可以将 s 分割成 3 个 非空 字符串 s1, s2, s3 （s1 + s2 + s3 = s）。
# 
# 请你返回分割 s 的方案数，满足 s1，s2 和 s3 中字符 &#39;1&#39; 的数目相同。
# 
# 由于答案可能很大，请将它对 10^9 + 7 取余后返回。
# 
# 示例 1：
# 输入：s = "10101"
# 输出：4
# 解释：总共有 4 种方法将 s 分割成含有 &#39;1&#39; 数目相同的三个子字符串。
# "1|010|1"
# "1|01|01"
# "10|10|1"
# "10|1|01"
# 
# 示例 2：
# 输入：s = "1001"
# 输出：0
# 
# 示例 3：
# 输入：s = "0000"
# 输出：3
# 解释：总共有 3 种分割 s 的方法。
# "0|0|00"
# "0|00|0"
# "00|0|0"
# 
# 示例 4：
# 输入：s = "100100010100110"
# 输出：12
# 
# 提示：
# s[i] == &#39;0&#39; 或者 s[i] == &#39;1&#39;
# 3 <= s.length <= 10^5


class Solution:
    def numWays(self, s: str) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.numWays('param') == 'expect', 'Case 1'
    assert unit.numWays('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
