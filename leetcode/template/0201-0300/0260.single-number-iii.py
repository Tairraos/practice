# https://leetcode-cn.com/problems/single-number-iii/
# 0260.只出现一次的数字 III
# 难度：中等
# 
# 给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。
# 
# 示例：
# 输入: [1,2,1,3,2,5]
# 输出: [3,5]
# 
# 注意：
#   - 结果输出的顺序并不重要，对于上面的例子， [5, 3] 也是正确答案。
#   - 你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？

class Solution:
    def singleNumber(self, nums: List[int]) -> List[int]:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.singleNumber('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')