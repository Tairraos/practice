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
        

    def pop(self) -> None:
        

    def top(self) -> int:
        

    def getMin(self) -> int:
        


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()"put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.__init__('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
