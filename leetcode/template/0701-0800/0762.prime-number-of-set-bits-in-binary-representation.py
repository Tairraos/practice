# https://leetcode-cn.com/problems/prime-number-of-set-bits-in-binary-representation/
# 0762.二进制表示中质数个计算置位
# 难度：容易
# 
# 给定两个整数 L 和 R ，找到闭区间 [L, R] 范围内，计算置位位数为质数的整数个数。
# （注意，计算置位代表二进制表示中1的个数。例如 21 的二进制表示 10101 有 3 个计算置位。还有，1 不是质数。）
# 
# 示例 1：
# 输入: L = 6, R = 10
# 输出: 4
# 解释：
# 6 -> 110 (2 个计算置位，2 是质数)
# 7 -> 111 (3 个计算置位，3 是质数)
# 9 -> 1001 (2 个计算置位，2 是质数)
# 10-> 1010 (2 个计算置位，2 是质数)
# 
# 示例 2：
# 输入: L = 10, R = 15
# 输出: 5
# 解释：
# 10 -> 1010 (2 个计算置位, 2 是质数)
# 11 -> 1011 (3 个计算置位, 3 是质数)
# 12 -> 1100 (2 个计算置位, 2 是质数)
# 13 -> 1101 (3 个计算置位, 3 是质数)
# 14 -> 1110 (3 个计算置位, 3 是质数)
# 15 -> 1111 (4 个计算置位, 4 不是质数)
# 
# 注意：
#   - L, R 是 L <= R 且在 [1, 10^6] 中的整数。
#   - R - L 的最大值为 10000。


class Solution:
    def countPrimeSetBits(self, L: int, R: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.countPrimeSetBits('param') == 'expect', 'Case 1'
    assert unit.countPrimeSetBits('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
