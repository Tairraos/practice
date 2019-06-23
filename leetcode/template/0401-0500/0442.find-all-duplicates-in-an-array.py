# https://leetcode-cn.com/problems/find-all-duplicates-in-an-array/
# 0442.数组中重复的数据
# 难度：中等
# 
# 给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。
# 找到所有出现两次的元素。
# 你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？
# 
# 示例：
# 输入：
# [4,3,2,7,8,2,3,1]
# 
# 输出：
# [2,3]

class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findDuplicates('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
