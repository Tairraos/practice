# https://leetcode-cn.com/problems/lexicographical-numbers/
# 0386.字典序排数
# 难度：中等
# 
# 给定一个整数 n, 返回从 1 到 n 的字典顺序。
# 
# 例如，
# 给定 n =1 3，返回 [1,10,11,12,13,2,3,4,5,6,7,8,9] 。
# 请尽可能的优化算法的时间复杂度和空间复杂度。 输入的数据 n 小于等于 5,000,000。

class Solution:
    def lexicalOrder(self, n: int) -> List[int]:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.lexicalOrder('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
