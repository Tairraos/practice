# https://leetcode-cn.com/problems/contains-duplicate/
# 0217.存在重复元素
# 难度：容易
# 
# 给定一个整数数组，判断是否存在重复元素。
# 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
# 
# 示例 1：
# 输入: [1,2,3,1]
# 输出: true
# 
# 示例 2：
# 输入: [1,2,3,4]
# 输出: false
# 
# 示例 3：
# 输入: [1,1,1,3,3,4,3,2,4,2]
# 输出: true

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.containsDuplicate('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
