# https://leetcode-cn.com/problems/move-zeroes/
# 0283.移动零
# 难度：容易
# 
# 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
# 
# 示例：
# 输入: [0,1,0,3,12]
# 输出: [1,3,12,0,0]
# 
# 说明：
#   - 必须在原数组上操作，不能拷贝额外的数组。
#   - 尽量减少操作次数。

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.moveZeroes('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
