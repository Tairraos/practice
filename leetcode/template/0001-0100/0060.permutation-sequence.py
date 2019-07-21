# https://leetcode-cn.com/problems/permutation-sequence/
# 0060.第k个排列
# 难度：中等
# 
# 给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。
# 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
#   - "123"
#   - "132"
#   - "213"
#   - "231"
#   - "312"
#   - "321"
# 给定 n 和 k，返回第 k 个排列。
# 
# 说明：
#   - 给定 n 的范围是 [1, 9]。
#   - 给定 k 的范围是[1,  n!]。
# 
# 示例 1：
# 输入: n = 3, k = 3
# 输出: "213"
# 
# 示例 2：
# 输入: n = 4, k = 9
# 输出: "2314"

class Solution:
    def getPermutation(self, n: int, k: int) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.getPermutation('param') == 'expect', 'Case 1'
    assert unit.getPermutation('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
