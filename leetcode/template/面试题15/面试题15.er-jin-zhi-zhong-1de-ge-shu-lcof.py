# https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/
# 面试题15.二进制中1的个数
# 难度：容易
# 
# 请实现一个函数，输入一个整数，输出该数二进制表示中 1 的个数。例如，把 9 表示成二进制是 1001，有 2 位是 1。因此，如果输入 9，则该函数输出 2。
# 
# 示例 1：
# 输入：00000000000000000000000000001011
# 输出：3
# 解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 &#39;1&#39;。
# 
# 示例 2：
# 输入：00000000000000000000000010000000
# 输出：1
# 解释：输入的二进制串 00000000000000000000000010000000 中，共有一位为 &#39;1&#39;。
# 
# 示例 3：
# 输入：11111111111111111111111111111101
# 输出：31
# 解释：输入的二进制串 11111111111111111111111111111101 中，共有 31 位为 &#39;1&#39;。
# 
# 注意：本题与主站 191 题相同：https://leetcode-cn.com/problems/number-of-1-bits/


class Solution:
    def hammingWeight(self, n: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.hammingWeight('param') == 'expect', 'Case 1'
    assert unit.hammingWeight('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
