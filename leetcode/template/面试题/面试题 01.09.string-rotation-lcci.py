# https://leetcode-cn.com/problems/string-rotation-lcci/
# 面试题 01.09.字符串轮转
# 难度：容易
# 
# 字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。
# 
# 示例1:
#  输入：s1 = "waterbottle", s2 = "erbottlewat"
#  输出：True
# 
# 示例2:
#  输入：s1 = "aa", "aba"
#  输出：False
# 
# 提示：
# 字符串长度在[0, 100000]范围内。
# 
# 说明:
# 
# 你能只调用一次检查子串的方法吗？


class Solution:
    def isFlipedString(self, s1: str, s2: str) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.isFlipedString('param') == 'expect', 'Case 1'
    assert unit.isFlipedString('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
