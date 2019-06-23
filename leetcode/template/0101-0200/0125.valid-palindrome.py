# https://leetcode-cn.com/problems/valid-palindrome/
# 0125.验证回文串
# 难度：容易
# 
# 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
# 
# 说明：本题中，我们将空字符串定义为有效的回文串。
# 
# 示例 1：
# 输入: "A man, a plan, a canal: Panama"
# 输出: true
# 
# 示例 2：
# 输入: "race a car"
# 输出: false

class Solution:
    def isPalindrome(self, s: str) -> bool:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.isPalindrome('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
