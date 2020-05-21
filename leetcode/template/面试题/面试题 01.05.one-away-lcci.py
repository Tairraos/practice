# https://leetcode-cn.com/problems/one-away-lcci/
# 面试题 01.05.一次编辑
# 难度：中等
# 
# 字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。
# 
# 示例 1:
# 输入: 
# first = "pale"
# second = "ple"
# 输出: True
# 
# 示例 2:
# 输入: 
# first = "pales"
# second = "pal"
# 输出: False


class Solution:
    def oneEditAway(self, first: str, second: str) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.oneEditAway('param') == 'expect', 'Case 1'
    assert unit.oneEditAway('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
