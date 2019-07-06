# https://leetcode-cn.com/problems/duplicate-zeros/
# 1089.复写零
# 难度：容易
# 
# 给你一个长度固定的整数数组 arr，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。
# 
# 注意：请不要在超过该数组长度的位置写入元素。
# 
# 要求：请对输入的数组 就地 进行上述修改，不要从函数返回任何东西。
# 
# 示例 1：
# 输入：[1,0,2,3,0,4,5,0]
# 输出：null
# 解释：调用函数后，输入的数组将被修改为：[1,0,0,2,3,0,0,4]
# 
# 示例 2：
# 输入：[1,2,3]
# 输出：null
# 解释：调用函数后，输入的数组将被修改为：[1,2,3]
# 
# 提示：
# 1 <= arr.length <= 10000
# 0 <= arr[i] <= 9

class Solution:
    def duplicateZeros(self, arr: List[int]) -> None:
        """
        Do not return anything, modify arr in-place instead.
        """
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.duplicateZeros('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
