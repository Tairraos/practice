# https://leetcode-cn.com/problems/number-of-2s-in-range-lcci/
# 面试题 17.06.2出现的次数
# 难度：中等
# 
# 编写一个方法，计算从 0 到 n (含 n) 中数字 2 出现的次数。
# 
# 示例:
# 输入: 25
# 输出: 9
# 解释: (2, 12, 20, 21, 22, 23, 24, 25)(注意 22 应该算作两次)
# 
# 提示：
# n <= 10^9


class Solution:
    def numberOf2sInRange(self, n: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.numberOf2sInRange('param') == 'expect', 'Case 1'
    assert unit.numberOf2sInRange('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
