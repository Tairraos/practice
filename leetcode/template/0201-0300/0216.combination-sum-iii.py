# https://leetcode-cn.com/problems/combination-sum-iii/
# 0216.组合总和 III
# 难度：中等
# 
# 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
# 
# 说明：
#   - 所有数字都是正整数。
#   - 解集不能包含重复的组合。
# 
# 示例 1：
# 输入: k = 3, n = 7
# 输出: [[1,2,4]]
# 
# 示例 2：
# 输入: k = 3, n = 9
# 输出: [[1,2,6], [1,3,5], [2,3,4]]

class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.combinationSum3('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')