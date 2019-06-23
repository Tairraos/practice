# https://leetcode-cn.com/problems/super-pow/
# 0372.超级次方
# 难度：中等
# 
# 你的任务是计算 a^b 对 1337 取模，a 是一个正整数，b 是一个非常大的正整数且会以数组形式给出。
# 
# 示例 1：
# 输入: a = 2, b = [3]
# 输出: 8
# 
# 示例 2：
# 输入: a = 2, b = [1,0]
# 输出: 1024

class Solution:
    def superPow(self, a: int, b: List[int]) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.superPow('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
