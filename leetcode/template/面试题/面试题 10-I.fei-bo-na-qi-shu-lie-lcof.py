# https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
# 面试题 10-I.斐波那契数列
# 难度：容易
# 
# 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项。斐波那契数列的定义如下：
# 
# F(0) = 0,   F(1) = 1
# F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
# 
# 斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
# 
# 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
# 
# 示例 1：
# 输入：n = 2
# 输出：1
# 
# 示例 2：
# 输入：n = 5
# 输出：5
# 
# 提示：
# 0 <= n <= 100
# 
# 注意：本题与主站 509 题相同：https://leetcode-cn.com/problems/fibonacci-number/


class Solution:
    def fib(self, n: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.fib('param') == 'expect', 'Case 1'
    assert unit.fib('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
