# https://leetcode-cn.com/problems/sort-of-stacks-lcci/
# 面试题 03.05.栈排序
# 难度：中等
# 
# 栈排序。 编写程序，对栈进行排序使最小元素位于栈顶。最多只能使用一个其他的临时栈存放数据，但不得将元素复制到别的数据结构（如数组）中。该栈支持如下操作：push、pop、peek 和 isEmpty。当栈为空时，peek 返回 -1。
# 
# 示例1:
#  输入：
# ["SortedStack", "push", "push", "peek", "pop", "peek"]
# [[], [1], [2], [], [], []]
#  输出：
# [null,null,null,1,null,2]
# 
# 示例2:
#  输入： 
# ["SortedStack", "pop", "pop", "push", "pop", "isEmpty"]
# [[], [], [], [1], [], []]
#  输出：
# [null,null,null,null,null,true]
# 
# 说明:
# 
# 栈中的元素数目在[0, 5000]范围内。


class SortedStack:

    def __init__(self):


    def push(self, val: int) -> None:


    def pop(self) -> None:


    def peek(self) -> int:


    def isEmpty(self) -> bool:



# Your SortedStack object will be instantiated and called as such:
# obj = SortedStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.peek()
# param_4 = obj.isEmpty()
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
