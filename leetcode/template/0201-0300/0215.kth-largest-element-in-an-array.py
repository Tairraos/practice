# https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
# 0215.数组中的第K个最大元素
# 难度：中等
# 
# 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
# 
# 示例 1：
# 输入: [3,2,1,5,6,4] 和 k = 2
# 输出: 5
# 
# 示例 2：
# 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
# 输出: 4
# 
# 说明：
# 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findKthLargest('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
