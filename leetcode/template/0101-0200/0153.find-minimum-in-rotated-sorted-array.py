# https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
# 0153.寻找旋转排序数组中的最小值
# 难度：中等
# 
# 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
# ( 例如，数组 [0,1,2,4,5,6,7]  可能变为 [4,5,6,7,0,1,2] )。
# 请找出其中最小的元素。
# 你可以假设数组中不存在重复元素。
# 
# 示例 1：
# 输入: [3,4,5,1,2]
# 输出: 1
# 
# 示例 2：
# 输入: [4,5,6,7,0,1,2]
# 输出: 0

class Solution:
    def findMin(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findMin('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
