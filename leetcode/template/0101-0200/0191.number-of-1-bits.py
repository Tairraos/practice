# https://leetcode-cn.com/problems/number-of-1-bits/
# 0191.位1的个数
# 难度：容易
# 
# 编写一个函数，输入是一个无符号整数，返回其二进制表达式中数字位数为 “1” 的个数（也被称为[汉明重量](https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E9%87%8D%E9%87%8F)）。
# 
# 示例 1：
# 输入：00000000000000000000000000001011
# 输出：3
# 解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 '1'。
# 
# 示例 2：
# 输入：00000000000000000000000010000000
# 输出：1
# 解释：输入的二进制串 00000000000000000000000010000000 中，共有一位为 '1'。
# 
# 示例 3：
# 输入：11111111111111111111111111111101
# 输出：31
# 解释：输入的二进制串 11111111111111111111111111111101 中，共有 31 位为 '1'。
# 
# 提示：
#   - 请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
#   - 在 Java 中，编译器使用[二进制补码](https://baike.baidu.com/item/%E4%BA%8C%E8%BF%9B%E5%88%B6%E8%A1%A5%E7%A0%81)记法来表示有符号整数。因此，在上面的 示例 3 中，输入表示有符号整数 -3。
# 
# 进阶：
# 如果多次调用这个函数，你将如何优化你的算法？


#Python 2

class Solution(object):
    def hammingWeight(self, n):
        """
        :type n: int
        :rtype: int
        """
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.hammingWeight('param') == 'expect', 'Case 1'
    assert unit.hammingWeight('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
