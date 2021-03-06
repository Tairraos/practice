# https://leetcode-cn.com/problems/combination-sum-ii/
# 0040.组合总和 II
# 难度：中等
# 
# 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
# candidates 中的每个数字在每个组合中只能使用一次。
# 
# 说明：
#   - 所有数字（包括目标数）都是正整数。
#   - 解集不能包含重复的组合。
# 
# 示例 1：
# 输入: candidates = [10,1,2,7,6,1,5], target = 8,
# 所求解集为：
# [
#   [1, 7],
#   [1, 2, 5],
#   [2, 6],
#   [1, 1, 6]
# ]
# 
# 示例 2：
# 输入: candidates = [2,5,2,1,2], target = 5,
# 所求解集为：
# [
#   [1,2,2],
#   [5]
# ]


from typing import *


class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.combinationSum2('param') == 'expect', 'Case 1'
    assert unit.combinationSum2('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
