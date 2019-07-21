# https://leetcode-cn.com/problems/binary-number-with-alternating-bits/
# 0693.交替位二进制数
# 难度：容易
# 
# 给定一个正整数，检查他是否为交替位二进制数：换句话说，就是他的二进制数相邻的两个位数永不相等。
# 
# 示例 1：
# 输入: 5
# 输出: True
# 解释：
# 5的二进制数是: 101
# 
# 示例 2：
# 输入: 7
# 输出: False
# 解释：
# 7的二进制数是: 111
# 
# 示例 3：
# 输入: 11
# 输出: False
# 解释：
# 11的二进制数是: 1011
# 
# 示例 4：
# 输入: 10
# 输出: True
# 解释：
# 10的二进制数是: 1010

class Solution:
    def hasAlternatingBits(self, n: int) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.hasAlternatingBits('param') == 'expect', 'Case 1'
    assert unit.hasAlternatingBits('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
