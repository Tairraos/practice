# https://leetcode-cn.com/problems/string-without-aaa-or-bbb/
# 0984.不含 AAA 或 BBB 的字符串
# 难度：中等
# 
# 给定两个整数 A 和 B，返回任意字符串 S，要求满足：
#   - S 的长度为 A + B，且正好包含 A 个 'a' 字母与 B 个 'b' 字母；
#   - 子串 'aaa' 没有出现在 S 中；
#   - 子串 'bbb' 没有出现在 S 中。
# 
# 示例 1：
# 输入：A = 1, B = 2
# 输出："abb"
# 解释："abb", "bab" 和 "bba" 都是正确答案。
# 
# 示例 2：
# 输入：A = 4, B = 1
# 输出："aabaa"
# 提示：
#   - 0 <= A <= 100
#   - 0 <= B <= 100
#   - 对于给定的 A 和 B，保证存在满足要求的 S。

class Solution:
    def strWithout3a3b(self, A: int, B: int) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.strWithout3a3b('param') == 'expect', 'Case 1'
    assert unit.strWithout3a3b('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
