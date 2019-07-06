# https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/
# 0378.有序矩阵中第K小的元素
# 难度：中等
# 
# 给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第k小的元素。
# 请注意，它是排序后的第k小元素，而不是第k个元素。
# 
# 示例：
# matrix = [
#    [ 1,  5,  9],
#    [10, 11, 13],
#    [12, 13, 15]
# ],
# k = 8,
# 
# 返回 13。
# 
# 说明：
# 你可以假设 k 的值永远是有效的, 1 ≤ k ≤ n^2 。

class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.kthSmallest('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
