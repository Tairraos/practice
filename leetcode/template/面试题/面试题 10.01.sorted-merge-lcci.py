# https://leetcode-cn.com/problems/sorted-merge-lcci/
# 面试题 10.01.合并排序的数组
# 难度：容易
# 
# 给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。
# 
# 初始化 A 和 B 的元素数量分别为 m 和 n。
# 
# 示例:
# 输入:
# A = [1,2,3,0,0,0], m = 3
# B = [2,5,6],       n = 3
# 
# 输出: [1,2,2,3,5,6]
# 
# 说明:
# 
# A.length == n + m


from typing import *


class Solution:
    def merge(self, A: List[int], m: int, B: List[int], n: int) -> None:
        """
        Do not return anything, modify A in-place instead.
        """
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.merge('param') == 'expect', 'Case 1'
    assert unit.merge('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
