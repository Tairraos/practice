# https://leetcode-cn.com/problems/adding-two-negabinary-numbers/
# 1073.负二进制数相加
# 难度：中等
# 
# 给出基数为 -2 的两个数 arr1 和 arr2，返回两数相加的结果。
# 
# 数字以 数组形式 给出：数组由若干 0 和 1 组成，按最高有效位到最低有效位的顺序排列。例如，arr = [1,1,0,1] 表示数字 (-2)^3 + (-2)^2 + (-2)^0 = -3。数组形式 的数字也同样不含前导零：以 arr 为例，这意味着要么 arr == [0]，要么 arr[0] == 1。
# 
# 返回相同表示形式的 arr1 和 arr2 相加的结果。两数的表示形式为：不含前导零、由若干 0 和 1 组成的数组。
# 
# 示例：
# 输入：arr1 = [1,1,1,1,1], arr2 = [1,0,1]
# 输出：[1,0,0,0,0]
# 解释：arr1 表示 11，arr2 表示 5，输出表示 16 。
# 
# 提示：
# 1 <= arr1.length <= 1000
# 1 <= arr2.length <= 1000
# arr1 和 arr2 都不含前导零
# arr1[i] 为 0 或 1
# arr2[i] 为 0 或 1

class Solution:
    def addNegabinary(self, arr1: List[int], arr2: List[int]) -> List[int]:"put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.addNegabinary('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
