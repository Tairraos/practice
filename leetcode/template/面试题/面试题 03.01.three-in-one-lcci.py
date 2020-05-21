# https://leetcode-cn.com/problems/three-in-one-lcci/
# 面试题 03.01.三合一
# 难度：容易
# 
# 三合一。描述如何只用一个数组来实现三个栈。
# 
# 你应该实现push(stackNum, value)、pop(stackNum)、isEmpty(stackNum)、peek(stackNum)方法。stackNum表示栈下标，value表示压入的值。
# 
# 构造函数会传入一个stackSize参数，代表每个栈的大小。
# 
# 示例1:
#  输入：
# ["TripleInOne", "push", "push", "pop", "pop", "pop", "isEmpty"]
# [[1], [0, 1], [0, 2], [0], [0], [0], [0]]
#  输出：
# [null, null, null, 1, -1, -1, true]
# 说明：当栈为空时`pop, peek`返回-1，当栈满时`push`不压入元素。
# 
# 示例2:
#  输入：
# ["TripleInOne", "push", "push", "push", "pop", "pop", "pop", "peek"]
# [[2], [0, 1], [0, 2], [0, 3], [0], [0], [0], [0]]
#  输出：
# [null, null, null, null, 2, 1, -1, -1]


class TripleInOne:

    def __init__(self, stackSize: int):


    def push(self, stackNum: int, value: int) -> None:


    def pop(self, stackNum: int) -> int:


    def peek(self, stackNum: int) -> int:


    def isEmpty(self, stackNum: int) -> bool:



# Your TripleInOne object will be instantiated and called as such:
# obj = TripleInOne(stackSize)
# obj.push(stackNum,value)
# param_2 = obj.pop(stackNum)
# param_3 = obj.peek(stackNum)
# param_4 = obj.isEmpty(stackNum)
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
