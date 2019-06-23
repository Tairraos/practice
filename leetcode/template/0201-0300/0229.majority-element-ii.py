# https://leetcode-cn.com/problems/majority-element-ii/
# 0229.求众数 II
# 难度：中等
# 
# 给定一个大小为 n 的数组，找出其中所有出现超过 'n/3' 次的元素。
# 
# 说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1)。
# 
# 示例 1：
# 输入: [3,2,3]
# 输出: [3]
# 
# 示例 2：
# 输入: [1,1,1,3,3,2,2,2]
# 输出: [1,2]

class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.majorityElement('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
