# https://leetcode-cn.com/problems/random-pick-with-blacklist/
# 0710.黑名单中的随机数
# 难度：困难
# 
# 给定一个包含 [0，n ) 中独特的整数的黑名单 B，写一个函数从 [ 0，n ) 中返回一个不在 B 中的随机整数。
# 对它进行优化使其尽量少调用系统方法 Math.random() 。
# 提示：
#   - 1 <= N <= 1000000000
#   - 0 <= B.length < min(100000, N)
#   - [0, N) 不包含 N，详细参见 [区间](https://zh.wikipedia.org/wiki/%E5%8D%80%E9%96%93) 。
# 
# 示例 1：
# 输入：
# ["Solution","pick","pick","pick"]
# [[1,[]],[],[],[]]
# 输出: [null,0,0,0]
# 
# 示例 2：
# 输入：
# ["Solution","pick","pick","pick"]
# [[2,[]],[],[],[]]
# 输出: [null,1,1,1]
# 
# 示例 3：
# 输入：
# ["Solution","pick","pick","pick"]
# [[3,[1]],[],[],[]]
# Output: [null,0,0,2]
# 
# 示例 4：
# 输入：
# ["Solution","pick","pick","pick"]
# [[4,[2]],[],[],[]]
# 输出: [null,1,3,1]
# 
# 输入语法说明：
# 输入是两个列表：调用成员函数名和调用的参数。Solution的构造函数有两个参数，N 和黑名单 B。pick 没有参数，输入参数是一个列表，即使参数为空，也会输入一个 [] 空列表。

class Solution:

    def __init__(self, N: int, blacklist: List[int]):
        

    def pick(self) -> int:
        


# Your Solution object will be instantiated and called as such:
# obj = Solution(N, blacklist)
# param_1 = obj.pick()"put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.__init__('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
