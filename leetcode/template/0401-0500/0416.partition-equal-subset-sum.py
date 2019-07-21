# https://leetcode-cn.com/problems/partition-equal-subset-sum/
# 0416.分割等和子集
# 难度：中等
# 
# 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
# 
# 注意：
#   - 每个数组中的元素不会超过 100
#   - 数组的大小不会超过 200
# 
# 示例 1：
# 输入: [1, 5, 11, 5]
# 
# 输出: true
# 
# 解释: 数组可以分割成 [1, 5, 5] 和 [11].
# 
# 示例 2：
# 输入: [1, 2, 3, 5]
# 
# 输出: false
# 
# 解释: 数组不能分割成两个元素和相等的子集.

class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.canPartition('param') == 'expect', 'Case 1'
    assert unit.canPartition('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
