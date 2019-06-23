# https://leetcode-cn.com/problems/contiguous-array/
# 0525.连续数组
# 难度：中等
# 
# 给定一个二进制数组, 找到含有相同数量的 0 和 1 的最长连续子数组（的长度）。
# 
# 示例 1：
# 输入: [0,1]
# 输出: 2
# 
# 说明: [0, 1] 是具有相同数量0和1的最长连续子数组。
# 
# 示例 2：
# 输入: [0,1,0]
# 输出: 2
# 
# 说明: [0, 1] (或 [1, 0]) 是具有相同数量0和1的最长连续子数组。
# 
# 注意: 给定的二进制数组的长度不会超过50000。

class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findMaxLength('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
