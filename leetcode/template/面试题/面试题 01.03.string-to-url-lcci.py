# https://leetcode-cn.com/problems/string-to-url-lcci/
# 面试题 01.03.URL化
# 难度：容易
# 
# URL化。编写一种方法，将字符串中的空格全部替换为%20。假定该字符串尾部有足够的空间存放新增字符，并且知道字符串的&ldquo;真实&rdquo;长度。（注：用Java实现的话，请使用字符数组实现，以便直接在数组上操作。）
# 
# 示例1:
#  输入："Mr John Smith    ", 13
#  输出："Mr%20John%20Smith"
# 
# 示例2:
#  输入："               ", 5
#  输出："%20%20%20%20%20"
# 
# 提示：
# 字符串长度在[0, 500000]范围内。


class Solution:
    def replaceSpaces(self, S: str, length: int) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.replaceSpaces('param') == 'expect', 'Case 1'
    assert unit.replaceSpaces('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
