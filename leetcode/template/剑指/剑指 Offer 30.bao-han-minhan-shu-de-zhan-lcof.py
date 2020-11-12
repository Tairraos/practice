# https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/
# 剑指 Offer 30.包含min函数的栈
# 难度：容易
# 
# 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
# 
# 示例:
# MinStack minStack = new MinStack();
# minStack.push(-2);
# minStack.push(0);
# minStack.push(-3);
# minStack.min();   --> 返回 -3.
# minStack.pop();
# minStack.top();      --> 返回 0.
# minStack.min();   --> 返回 -2.
# 
# 提示：
# 各函数的调用总次数不超过 20000 次
# 
# 注意：本题与主站 155 题相同：https://leetcode-cn.com/problems/min-stack/


class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """


    def push(self, x: int) -> None:


    def pop(self) -> None:


    def top(self) -> int:


    def min(self) -> int:



# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.min()
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
