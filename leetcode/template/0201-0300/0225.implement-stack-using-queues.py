# https://leetcode-cn.com/problems/implement-stack-using-queues/
# 0225.用队列实现栈
# 难度：容易
# 
# 使用队列实现栈的下列操作：
#   - push(x) -- 元素 x 入栈
#   - pop() -- 移除栈顶元素
#   - top() -- 获取栈顶元素
#   - empty() -- 返回栈是否为空
# 
# 注意：
#   - 你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty 这些操作是合法的。
#   - 你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
#   - 你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。

class MyStack:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        

    def push(self, x: int) -> None:
        """
        Push element x onto stack.
        """
        

    def pop(self) -> int:
        """
        Removes the element on top of the stack and returns that element.
        """
        

    def top(self) -> int:
        """
        Get the top element.
        """
        

    def empty(self) -> bool:
        """
        Returns whether the stack is empty.
        """
        


# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()"put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.__init__('param') == 'expect', 'Case 1'
    assert unit.__init__('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
