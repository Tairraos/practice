# https://leetcode-cn.com/problems/strong-password-checker/
# 0420.强密码检验器
# 难度：困难
# 
# 一个强密码应满足以下所有条件：
#   - 由至少6个，至多20个字符组成。
#   - 至少包含一个小写字母，一个大写字母，和一个数字。
#   - 同一字符不能连续出现三次 (比如 "...aaa..." 是不允许的, 但是 "...aa...a..." 是可以的)。
# 
# 编写函数 strongPasswordChecker(s)，s 代表输入字符串，如果 s 已经符合强密码条件，则返回0；否则返回要将 s 修改为满足强密码条件的字符串所需要进行修改的最小步数。
# 插入、删除、替换任一字符都算作一次修改。

class Solution:
    def strongPasswordChecker(self, s: str) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.strongPasswordChecker('param') == 'expect', 'Case 1'
    assert unit.strongPasswordChecker('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
