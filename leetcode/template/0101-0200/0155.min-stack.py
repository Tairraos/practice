# https://leetcode-cn.com/problems/min-stack/
# 0155.最小栈
# 难度：容易
# 
# 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
#   - push(x) -- 将元素 x 推入栈中。
#   - pop() -- 删除栈顶的元素。
#   - top() -- 获取栈顶元素。
#   - getMin() -- 检索栈中的最小元素。
# 
# 示例：
# MinStack minStack = new MinStack();
# minStack.push(-2);
# minStack.push(0);
# minStack.push(-3);
# minStack.getMin();   --> 返回 -3.
# minStack.pop();
# minStack.top();      --> 返回 0.
# minStack.getMin();   --> 返回 -2.

class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        

    def push(self, x: int) -> None:
        "put solution here"

    def pop(self) -> None:
        "put solution here"

    def top(self) -> int:
        "put solution here"

    def getMin(self) -> int:
        "put solution here"


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = MinStack()

    assert unit.getMin('param') == 'expect', 'Case 1'
    assert unit.getMin('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
