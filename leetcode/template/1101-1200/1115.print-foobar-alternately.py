# https://leetcode-cn.com/problems/print-foobar-alternately/
# 1115.交替打印FooBar
# 难度：中等
# 
# 我们提供一个类：
# 
# class FooBar {
#   public void foo() {
#     for (int i = 0; i < n; i++) {
#       print("foo");
#     }
#   }
# 
#   public void bar() {
#     for (int i = 0; i < n; i++) {
#       print("bar");
#     }
#   }
# }
# 
# 两个不同的线程将会共用一个 FooBar 实例。其中一个线程将会调用 foo() 方法，另一个线程将会调用 bar() 方法。
# 
# 请设计修改程序，以确保 "foobar" 被输出 n 次。
# 
# 示例 1:
# 输入: n = 1
# 输出: "foobar"
# 解释: 这里有两个线程被异步启动。其中一个调用 foo() 方法, 另一个调用 bar() 方法，"foobar" 将被输出一次。
# 
# 示例 2:
# 输入: n = 2
# 输出: "foobarfoobar"
# 解释: "foobar" 将被输出两次。


class FooBar:
    def __init__(self, n):
        self.n = n


    def foo(self, printFoo: 'Callable[[], None]') -> None:
        
        for i in range(self.n):
            
            # printFoo() outputs "foo". Do not change or remove this line.
        	printFoo()


    def bar(self, printBar: 'Callable[[], None]') -> None:
        
        for i in range(self.n):
            
            # printBar() outputs "bar". Do not change or remove this line.
        	printBar()
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
