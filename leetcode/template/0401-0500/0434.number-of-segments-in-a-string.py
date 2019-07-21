# https://leetcode-cn.com/problems/number-of-segments-in-a-string/
# 0434.字符串中的单词数
# 难度：容易
# 
# 统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。
# 请注意，你可以假定字符串里不包括任何不可打印的字符。
# 
# 示例：
# 输入: "Hello, my name is John"
# 输出: 5

class Solution:
    def countSegments(self, s: str) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.countSegments('param') == 'expect', 'Case 1'
    assert unit.countSegments('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
