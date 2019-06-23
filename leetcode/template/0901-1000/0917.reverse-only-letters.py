# https://leetcode-cn.com/problems/reverse-only-letters/
# 0917.仅仅反转字母
# 难度：容易
# 
# 给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。
# 
# 示例 1：
# 输入："ab-cd"
# 输出："dc-ba"
# 
# 示例 2：
# 输入："a-bC-dEf-ghIj"
# 输出："j-Ih-gfE-dCba"
# 
# 示例 3：
# 输入："Test1ng-Leet=code-Q!"
# 输出："Qedo1ct-eeLg=ntse-T!"
# 提示：
#   - S.length <= 100
#   - 33 <= S[i].ASCIIcode <= 122
#   - S 中不包含 \ or "

class Solution:
    def reverseOnlyLetters(self, S: str) -> str:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.reverseOnlyLetters('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
