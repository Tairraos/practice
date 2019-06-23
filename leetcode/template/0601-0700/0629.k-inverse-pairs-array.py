# https://leetcode-cn.com/problems/k-inverse-pairs-array/
# 0629.K个逆序对数组
# 难度：困难
# 
# 给出两个整数 n 和 k，找出所有包含从 1 到 n 的数字，且恰好拥有 k 个逆序对的不同的数组的个数。
# 逆序对的定义如下：对于数组的第i个和第 j个元素，如果满i < j且 a[i] > a[j]，则其为一个逆序对；否则不是。
# 由于答案可能很大，只需要返回 答案 mod 10^9 + 7 的值。
# 
# 示例 1：
# 输入: n = 3, k = 0
# 输出: 1
# 解释：
# 只有数组 [1,2,3] 包含了从1到3的整数并且正好拥有 0 个逆序对。
# 
# 示例 2：
# 输入: n = 3, k = 1
# 输出: 2
# 解释：
# 数组 [1,3,2] 和 [2,1,3] 都有 1 个逆序对。
# 
# 说明：
#   -  n 的范围是 [1, 1000] 并且 k 的范围是 [0, 1000]。

class Solution:
    def kInversePairs(self, n: int, k: int) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.kInversePairs('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
