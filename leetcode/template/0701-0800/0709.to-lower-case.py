# https://leetcode-cn.com/problems/to-lower-case/
# 0709.转换成小写字母
# 难度：容易
# 
# 实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。
# 
# 示例 1：
# 输入: "Hello"
# 输出: "hello"
# 
# 示例 2：
# 输入: "here"
# 输出: "here"
# 
# 示例 3：
# 输入: "LOVELY"
# 输出: "lovely"

class Solution:
    def toLowerCase(self, str: str) -> str:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.toLowerCase('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
