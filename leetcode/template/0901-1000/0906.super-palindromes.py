# https://leetcode-cn.com/problems/super-palindromes/
# 0906.超级回文数
# 难度：困难
# 
# 如果一个正整数自身是回文数，而且它也是一个回文数的平方，那么我们称这个数为超级回文数。
# 现在，给定两个正整数 L 和 R （以字符串形式表示），返回包含在范围 [L, R] 中的超级回文数的数目。
# 
# 示例：
# 输入：L = "4", R = "1000"
# 输出：4
# 解释：
# 4，9，121，以及 484 是超级回文数。
# 
# 注意 676 不是一个超级回文数： 26 * 26 = 676，但是 26 不是回文数。
# 
# 提示：
#   - 1 <= len(L) <= 18
#   - 1 <= len(R) <= 18
#   - L 和 R 是表示 [1, 10^18) 范围的整数的字符串。
#   - int(L) <= int(R)


class Solution:
    def superpalindromesInRange(self, L: str, R: str) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.superpalindromesInRange('param') == 'expect', 'Case 1'
    assert unit.superpalindromesInRange('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
