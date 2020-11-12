# https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
# 剑指 Offer 05.替换空格
# 难度：容易
# 
# 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
# 
# 示例 1：
# 输入：s = "We are happy."
# 输出："We%20are%20happy."
# 
# 限制：
# 
# 0 <= s 的长度 <= 10000


class Solution:
    def replaceSpace(self, s: str) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.replaceSpace('param') == 'expect', 'Case 1'
    assert unit.replaceSpace('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
