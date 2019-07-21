# https://leetcode-cn.com/problems/contains-duplicate-ii/
# 0219.存在重复元素 II
# 难度：容易
# 
# 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。
# 
# 示例 1：
# 输入: nums = [1,2,3,1], k = 3
# 输出: true
# 
# 示例 2：
# 输入: nums = [1,0,1,1], k = 1
# 输出: true
# 
# 示例 3：
# 输入: nums = [1,2,3,1,2,3], k = 2
# 输出: false

class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.containsNearbyDuplicate('param') == 'expect', 'Case 1'
    assert unit.containsNearbyDuplicate('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
