# https://leetcode-cn.com/problems/permutations-ii/
# 0047.全排列 II
# 难度：中等
# 
# 给定一个可包含重复数字的序列，返回所有不重复的全排列。
# 
# 示例：
# 输入: [1,1,2]
# 输出：
# [
#   [1,1,2],
#   [1,2,1],
#   [2,1,1]
# ]

class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.permuteUnique('param') == 'expect', 'Case 1'
    assert unit.permuteUnique('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
