# https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements-ii/
# 0462.最少移动次数使数组元素相等 II
# 难度：中等
# 
# 给定一个非空整数数组，找到使所有数组元素相等所需的最小移动数，其中每次移动可将选定的一个元素加1或减1。 您可以假设数组的长度最多为10000。
# 
# 例如：
# 输入：
# [1,2,3]
# 
# 输出：
# 2
# 
# 说明：
# 只有两个动作是必要的（记得每一步仅可使其中一个元素加1或减1）：
# 
# [1,2,3]  =>  [2,2,3]  =>  [2,2,2]

class Solution:
    def minMoves2(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.minMoves2('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
