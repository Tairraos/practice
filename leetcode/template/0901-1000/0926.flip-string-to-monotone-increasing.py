# https://leetcode-cn.com/problems/flip-string-to-monotone-increasing/
# 0926.将字符串翻转到单调递增
# 难度：中等
# 
# 如果一个由 '0' 和 '1' 组成的字符串，是以一些 '0'（可能没有 '0'）后面跟着一些 '1'（也可能没有 '1'）的形式组成的，那么该字符串是单调递增的。
# 我们给出一个由字符 '0' 和 '1' 组成的字符串 S，我们可以将任何 '0' 翻转为 '1' 或者将 '1' 翻转为 '0'。
# 返回使 S 单调递增的最小翻转次数。
# 
# 示例 1：
# 输入："00110"
# 输出：1
# 解释：我们翻转最后一位得到 00111.
# 
# 示例 2：
# 输入："010110"
# 输出：2
# 解释：我们翻转得到 011111，或者是 000111。
# 
# 示例 3：
# 输入："00011000"
# 输出：2
# 解释：我们翻转得到 00000000。
# 
# 提示：
#   - 1 <= S.length <= 20000
#   - S 中只包含字符 '0' 和 '1'

class Solution:
    def minFlipsMonoIncr(self, S: str) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.minFlipsMonoIncr('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')