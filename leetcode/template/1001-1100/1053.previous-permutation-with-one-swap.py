# https://leetcode-cn.com/problems/previous-permutation-with-one-swap/
# 1053.交换一次的先前排列
# 难度：中等
# 
# 给你一个正整数的数组 A（其中的元素不一定完全不同），请你返回可在 一次交换（交换两数字 A[i] 和 A[j] 的位置）后得到的、按字典序排列小于 A 的最大可能排列。
# 
# 如果无法这么操作，就请返回原数组。
# 
# 示例 1：
# 输入：[3,2,1]
# 输出：[3,1,2]
# 解释：
# 交换 2 和 1
# 
# 示例 2：
# 输入：[1,1,5]
# 输出：[1,1,5]
# 解释： 
# 这已经是最小排列
# 
# 示例 3：
# 输入：[1,9,4,6,7]
# 输出：[1,7,4,6,9]
# 解释：
# 交换 9 和 7
# 
# 示例 4：
# 输入：[3,1,1,3]
# 输出：[1,3,1,3]
# 解释：
# 交换 1 和 3
# 
# 提示：
# 1 <= A.length <= 10000
# 1 <= A[i] <= 10000

class Solution:
    def prevPermOpt1(self, A: List[int]) -> List[int]:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.prevPermOpt1('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
