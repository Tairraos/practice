# https://leetcode-cn.com/problems/integer-replacement/
# 0397.整数替换
# 难度：中等
# 
# 给定一个正整数 n，你可以做如下操作：
# 1. 如果 n 是偶数，则用 n / 2替换 n。
# 2. 如果 n 是奇数，则可以用 n + 1或n - 1替换 n。
# n 变为 1 所需的最小替换次数是多少？
# 
# 示例 1：
# 输入：
# 8
# 
# 输出：
# 3
# 
# 解释：
# 8 -> 4 -> 2 -> 1
# 
# 示例 2：
# 输入：
# 7
# 
# 输出：
# 4
# 
# 解释：
# 7 -> 8 -> 4 -> 2 -> 1
# 或
# 7 -> 6 -> 3 -> 2 -> 1


class Solution:
    def integerReplacement(self, n: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.integerReplacement('param') == 'expect', 'Case 1'
    assert unit.integerReplacement('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
