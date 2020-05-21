# https://leetcode-cn.com/problems/operations-lcci/
# 面试题 16.09.运算
# 难度：中等
# 
# 请实现整数数字的乘法、减法和除法运算，运算结果均为整数数字，程序中只允许使用加法运算符和逻辑运算符，允许程序中出现正负常数，不允许使用位运算。
# 你的实现应该支持如下操作：
# 
# Operations() 构造函数
# minus(a, b) 减法，返回a - b
# multiply(a, b) 乘法，返回a * b
# divide(a, b) 除法，返回a / b
# 
# 示例：
# Operations operations = new Operations();
# operations.minus(1, 2); //返回-1
# operations.multiply(3, 4); //返回12
# operations.divide(5, -2); //返回-2
# 
# 提示：
# 你可以假设函数输入一定是有效的，例如不会出现除法分母为0的情况
# 单个用例的函数调用次数不会超过1000次


class Operations:

    def __init__(self):


    def minus(self, a: int, b: int) -> int:


    def multiply(self, a: int, b: int) -> int:


    def divide(self, a: int, b: int) -> int:



# Your Operations object will be instantiated and called as such:
# obj = Operations()
# param_1 = obj.minus(a,b)
# param_2 = obj.multiply(a,b)
# param_3 = obj.divide(a,b)
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.__init__('param') == 'expect', 'Case 1'
    assert unit.__init__('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
