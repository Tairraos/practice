# https://leetcode-cn.com/problems/squares-of-a-sorted-array/
# 0977.有序数组的平方
# 难度：容易
# 
# 给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
# 
# 示例 1：
# 输入：[-4,-1,0,3,10]
# 输出：[0,1,9,16,100]
# 
# 示例 2：
# 输入：[-7,-3,2,3,11]
# 输出：[4,9,9,49,121]
# 
# 提示：
#   - 1 <= A.length <= 10000
#   - -10000 <= A[i] <= 10000
#   - A 已按非递减顺序排序。

class Solution:
    def sortedSquares(self, A: List[int]) -> List[int]:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.sortedSquares('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')