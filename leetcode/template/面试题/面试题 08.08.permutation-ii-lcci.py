# https://leetcode-cn.com/problems/permutation-ii-lcci/
# 面试题 08.08.有重复字符串的排列组合
# 难度：中等
# 
# 有重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合。
# 
# 示例1:
#  输入：S = "qqe"
#  输出：["eqq","qeq","qqe"]
# 
# 示例2:
#  输入：S = "ab"
#  输出：["ab", "ba"]
# 
# 提示:
# 字符都是英文字母。
# 字符串长度在[1, 9]之间。


from typing import *


class Solution:
    def permutation(self, S: str) -> List[str]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.permutation('param') == 'expect', 'Case 1'
    assert unit.permutation('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
