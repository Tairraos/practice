# https://leetcode-cn.com/problems/reverse-vowels-of-a-string/
# 0345.反转字符串中的元音字母
# 难度：容易
# 
# 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
# 
# 示例 1：
# 输入: "hello"
# 输出: "holle"
# 
# 示例 2：
# 输入: "leetcode"
# 输出: "leotcede"
# 
# 说明：
# 元音字母不包含字母"y"。


class Solution:
    def reverseVowels(self, s: str) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.reverseVowels('param') == 'expect', 'Case 1'
    assert unit.reverseVowels('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
