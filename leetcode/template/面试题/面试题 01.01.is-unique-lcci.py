# https://leetcode-cn.com/problems/is-unique-lcci/
# 面试题 01.01.判定字符是否唯一
# 难度：容易
# 
# 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。
# 
# 示例 1：
# 输入: s = "leetcode"
# 输出: false 
# 
# 示例 2：
# 输入: s = "abc"
# 输出: true
# 
# 限制：
# 
# 0 
# 如果你不使用额外的数据结构，会很加分。


class Solution:
    def isUnique(self, astr: str) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.isUnique('param') == 'expect', 'Case 1'
    assert unit.isUnique('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
