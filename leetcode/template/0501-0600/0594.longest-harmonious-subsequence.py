# https://leetcode-cn.com/problems/longest-harmonious-subsequence/
# 0594.最长和谐子序列
# 难度：容易
# 
# 和谐数组是指一个数组里元素的最大值和最小值之间的差别正好是1。
# 现在，给定一个整数数组，你需要在所有可能的子序列中找到最长的和谐子序列的长度。
# 
# 示例 1：
# 输入: [1,3,2,2,5,2,3,7]
# 输出: 5
# 原因: 最长的和谐数组是：[3,2,2,2,3].
# 
# 说明: 输入的数组长度最大不超过20,000.

class Solution:
    def findLHS(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findLHS('param') == 'expect', 'Case 1'
    assert unit.findLHS('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
