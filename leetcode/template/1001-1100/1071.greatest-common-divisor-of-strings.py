# https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/
# 1071.字符串的最大公因子
# 难度：容易
# 
# 对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 &ldquo;T 能除尽 S&rdquo;。
# 
# 返回字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。
# 
# 示例 1：
# 输入：str1 = "ABCABC", str2 = "ABC"
# 输出："ABC"
# 
# 示例 2：
# 输入：str1 = "ABABAB", str2 = "ABAB"
# 输出："AB"
# 
# 示例 3：
# 输入：str1 = "LEET", str2 = "CODE"
# 输出：""
# 
# 提示：
# 1 <= str1.length <= 1000
# 1 <= str2.length <= 1000
# str1[i] 和 str2[i] 为大写英文字母


class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.gcdOfStrings('param') == 'expect', 'Case 1'
    assert unit.gcdOfStrings('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
