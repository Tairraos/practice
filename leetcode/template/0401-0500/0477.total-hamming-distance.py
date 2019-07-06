# https://leetcode-cn.com/problems/total-hamming-distance/
# 0477.汉明距离总和
# 难度：中等
# 
# 两个整数的 [汉明距离](https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB) 指的是这两个数字的二进制数对应位不同的数量。
# 计算一个数组中，任意两个数之间汉明距离的总和。
# 
# 示例：
# 输入: 4, 14, 2
# 
# 输出: 6
# 
# 解释: 在二进制表示中，4表示为0100，14表示为1110，2表示为0010。（这样表示是为了体现后四位之间关系）
# 所以答案为：
# HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
# 
# 注意：
#   - 数组中元素的范围为从 0到 10^9。
#   - 数组的长度不超过 10^4。

class Solution:
    def totalHammingDistance(self, nums: List[int]) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.totalHammingDistance('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
