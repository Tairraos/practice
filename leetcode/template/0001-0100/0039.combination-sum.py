# https://leetcode-cn.com/problems/combination-sum/
# 0039.组合总和
# 难度：中等
# 
# 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
# candidates 中的数字可以无限制重复被选取。
# 
# 说明：
#   - 所有数字（包括 target）都是正整数。
#   - 解集不能包含重复的组合。
# 
# 示例 1：
# 输入: candidates = [2,3,6,7], target = 7,
# 所求解集为：
# [
#   [7],
#   [2,2,3]
# ]
# 
# 示例 2：
# 输入: candidates = [2,3,5], target = 8,
# 所求解集为：
# [
#   [2,2,2,2],
#   [2,3,3],
#   [3,5]
# ]

class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.combinationSum('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')