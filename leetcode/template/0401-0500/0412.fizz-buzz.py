# https://leetcode-cn.com/problems/fizz-buzz/
# 0412.Fizz Buzz
# 难度：容易
# 
# 写一个程序，输出从 1 到 n 数字的字符串表示。
# 1. 如果 n 是3的倍数，输出“Fizz”；
# 2. 如果 n 是5的倍数，输出“Buzz”；
# 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
# 
# 示例：
# n = 15,
# 
# 返回：
# [
#     "1",
#     "2",
#     "Fizz",
#     "4",
#     "Buzz",
#     "Fizz",
#     "7",
#     "8",
#     "Fizz",
#     "Buzz",
#     "11",
#     "Fizz",
#     "13",
#     "14",
#     "FizzBuzz"
# ]

class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.fizzBuzz('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
