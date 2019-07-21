# https://leetcode-cn.com/problems/k-th-smallest-in-lexicographical-order/
# 0440.字典序的第K小数字
# 难度：困难
# 
# 给定整数 n 和 k，找到 1 到 n 中字典序第 k 小的数字。
# 
# 注意：1 ≤ k ≤ n ≤ 10^9。
# 
# 示例：
# 输入：
# n: 13   k: 2
# 
# 输出：
# 10
# 
# 解释：
# 字典序的排列是 [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]，所以第二小的数字是 10。

class Solution:
    def findKthNumber(self, n: int, k: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findKthNumber('param') == 'expect', 'Case 1'
    assert unit.findKthNumber('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
