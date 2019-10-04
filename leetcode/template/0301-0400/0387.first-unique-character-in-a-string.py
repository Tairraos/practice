# https://leetcode-cn.com/problems/first-unique-character-in-a-string/
# 0387.字符串中的第一个唯一字符
# 难度：容易
# 
# 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
# 案例：
# s = "leetcode"
# 返回 0.
# 
# s = "loveleetcode",
# 返回 2.
# 
# 注意事项：您可以假定该字符串只包含小写字母。


class Solution:
    def firstUniqChar(self, s: str) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.firstUniqChar('param') == 'expect', 'Case 1'
    assert unit.firstUniqChar('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
