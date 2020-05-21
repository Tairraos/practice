# https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
# 面试题 58-II.左旋转字符串
# 难度：容易
# 
# 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
# 
# 示例 1：
# 输入: s = "abcdefg", k = 2
# 输出: "cdefgab"
# 
# 示例 2：
# 输入: s = "lrloseumgh", k = 6
# 输出: "umghlrlose"
# 
# 限制：
# 
# 1 <= k < s.length <= 10000


class Solution:
    def reverseLeftWords(self, s: str, n: int) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.reverseLeftWords('param') == 'expect', 'Case 1'
    assert unit.reverseLeftWords('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
