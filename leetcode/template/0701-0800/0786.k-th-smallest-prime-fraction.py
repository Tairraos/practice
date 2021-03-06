# https://leetcode-cn.com/problems/k-th-smallest-prime-fraction/
# 0786.第 K 个最小的素数分数
# 难度：困难
# 
# 一个已排序好的表 A，其包含 1 和其他一些素数.  当列表中的每一个 p<q 时，我们可以构造一个分数 p/q 。
# 那么第 k 个最小的分数是多少呢?  以整数数组的形式返回你的答案, 这里 answer[0] = p 且 answer[1] = q.
# 示例：
# 输入: A = [1, 2, 3, 5], K = 3
# 输出: [2, 5]
# 解释：
# 已构造好的分数,排序后如下所示：
# 1/5, 1/3, 2/5, 1/2, 3/5, 2/3.
# 很明显第三个最小的分数是 2/5.
# 
# 输入: A = [1, 7], K = 1
# 输出: [1, 7]
# 
# 注意：
#   - A 的取值范围在 2 —— 2000.
#   - 每个 A[i] 的值在 1 ——30000.
#   - K 取值范围为 1 ——A.length * (A.length - 1) / 2


from typing import *


class Solution:
    def kthSmallestPrimeFraction(self, A: List[int], K: int) -> List[int]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.kthSmallestPrimeFraction('param') == 'expect', 'Case 1'
    assert unit.kthSmallestPrimeFraction('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
