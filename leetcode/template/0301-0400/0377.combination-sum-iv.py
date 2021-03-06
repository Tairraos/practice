# https://leetcode-cn.com/problems/combination-sum-iv/
# 0377.组合总和 Ⅳ
# 难度：中等
# 
# 给定一个由正整数组成且不存在重复数字的数组，找出和为给定目标正整数的组合的个数。
# 
# 示例：
# nums = [1, 2, 3]
# target = 4
# 
# 所有可能的组合为：
# (1, 1, 1, 1)
# (1, 1, 2)
# (1, 2, 1)
# (1, 3)
# (2, 1, 1)
# (2, 2)
# (3, 1)
# 
# 请注意，顺序不同的序列被视作不同的组合。
# 
# 因此输出为 7。
# 
# 进阶：
# 如果给定的数组中含有负数会怎么样？
# 问题会产生什么变化？
# 我们需要在题目中添加什么限制来允许负数的出现？
# 致谢：
# 特别感谢 [@pbrother](https://leetcode.com/pbrother/) 添加此问题并创建所有测试用例。


from typing import *


class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.combinationSum4('param') == 'expect', 'Case 1'
    assert unit.combinationSum4('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
