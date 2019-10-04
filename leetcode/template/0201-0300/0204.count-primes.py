# https://leetcode-cn.com/problems/count-primes/
# 0204.计数质数
# 难度：容易
# 
# 统计所有小于非负整数 n 的质数的数量。
# 
# 示例：
# 输入: 10
# 输出: 4
# 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。


class Solution:
    def countPrimes(self, n: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.countPrimes('param') == 'expect', 'Case 1'
    assert unit.countPrimes('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
