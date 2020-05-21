# https://leetcode-cn.com/problems/reverse-bits-lcci/
# 面试题 05.03.翻转数位
# 难度：容易
# 
# 给定一个32位整数 num，你可以将一个数位从0变为1。请编写一个程序，找出你能够获得的最长的一串1的长度。
# 
# 示例 1：
# 输入: num = 1775(110111011112)
# 输出: 8
# 
# 示例 2：
# 输入: num = 7(01112)
# 输出: 4


class Solution:
    def reverseBits(self, num: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.reverseBits('param') == 'expect', 'Case 1'
    assert unit.reverseBits('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
