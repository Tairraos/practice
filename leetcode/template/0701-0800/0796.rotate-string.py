# https://leetcode-cn.com/problems/rotate-string/
# 0796.旋转字符串
# 难度：容易
# 
# 给定两个字符串, A 和 B。
# A 的旋转操作就是将 A 最左边的字符移动到最右边。 例如, 若 A = 'abcde'，在移动一次之后结果就是'bcdea' 。如果在若干次旋转操作之后，A 能变成B，那么返回True。
# 
# 示例 1：
# 输入: A = 'abcde', B = 'cdeab'
# 输出: true
# 
# 示例 2：
# 输入: A = 'abcde', B = 'abced'
# 输出: false
# 
# 注意：
#   - A 和 B 长度不超过 100。


class Solution:
    def rotateString(self, A: str, B: str) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.rotateString('param') == 'expect', 'Case 1'
    assert unit.rotateString('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
