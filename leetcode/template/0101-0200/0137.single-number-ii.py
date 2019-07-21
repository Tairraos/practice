# https://leetcode-cn.com/problems/single-number-ii/
# 0137.只出现一次的数字 II
# 难度：中等
# 
# 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。
# 
# 说明：
# 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
# 
# 示例 1：
# 输入: [2,2,3,2]
# 输出: 3
# 
# 示例 2：
# 输入: [0,1,0,1,0,1,99]
# 输出: 99

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.singleNumber('param') == 'expect', 'Case 1'
    assert unit.singleNumber('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
