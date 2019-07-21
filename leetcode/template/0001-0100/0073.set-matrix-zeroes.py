# https://leetcode-cn.com/problems/set-matrix-zeroes/
# 0073.矩阵置零
# 难度：中等
# 
# 给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用[原地](http://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)算法。
# 
# 示例 1：
# 输入：
# [
#   [1,1,1],
#   [1,0,1],
#   [1,1,1]
# ]
# 输出：
# [
#   [1,0,1],
#   [0,0,0],
#   [1,0,1]
# ]
# 
# 示例 2：
# 输入：
# [
#   [0,1,2,0],
#   [3,4,5,2],
#   [1,3,1,5]
# ]
# 输出：
# [
#   [0,0,0,0],
#   [0,4,5,0],
#   [0,3,1,0]
# ]
# 
# 进阶：
#   - 一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
#   - 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
#   - 你能想出一个常数空间的解决方案吗？

class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.setZeroes('param') == 'expect', 'Case 1'
    assert unit.setZeroes('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
