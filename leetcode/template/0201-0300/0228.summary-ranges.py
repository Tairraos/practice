# https://leetcode-cn.com/problems/summary-ranges/
# 0228.汇总区间
# 难度：中等
# 
# 给定一个无重复元素的有序整数数组，返回数组区间范围的汇总。
# 
# 示例 1：
# 输入: [0,1,2,4,5,7]
# 输出: ["0->2","4->5","7"]
# 解释: 0,1,2 可组成一个连续的区间; 4,5 可组成一个连续的区间。
# 
# 示例 2：
# 输入: [0,2,3,4,6,8,9]
# 输出: ["0","2->4","6","8->9"]
# 解释: 2,3,4 可组成一个连续的区间; 8,9 可组成一个连续的区间。

class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.summaryRanges('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
