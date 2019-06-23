# https://leetcode-cn.com/problems/contains-duplicate-iii/
# 0220.存在重复元素 III
# 难度：中等
# 
# 给定一个整数数组，判断数组中是否有两个不同的索引 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值最大为 t，并且 i 和 j 之间的差的绝对值最大为 ķ。
# 
# 示例 1：
# 输入: nums = [1,2,3,1], k = 3, t = 0
# 输出: true
# 
# 示例 2：
# 输入: nums = [1,0,1,1], k = 1, t = 2
# 输出: true
# 
# 示例 3：
# 输入: nums = [1,5,9,1,5,9], k = 2, t = 3
# 输出: false

class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], k: int, t: int) -> bool:

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.containsNearbyAlmostDuplicate('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
