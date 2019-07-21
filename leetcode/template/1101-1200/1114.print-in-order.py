# https://leetcode-cn.com/problems/print-in-order/
# 1114.按序打印
# 难度：容易
# 
# 我们提供了一个类：
# 
# public class Foo {
#   public void one() { print("one"); }
#   public void two() { print("two"); }
#   public void three() { print("three"); }
# }
# 
# 三个不同的线程将会共用一个 Foo 实例。
# 
# 线程 A 将会调用 one() 方法
# 线程 B 将会调用 two() 方法
# 线程 C 将会调用 three() 方法
# 
# 请设计修改程序，以确保 two() 方法在 one() 方法之后被执行，three() 方法在 two() 方法之后被执行。
# 
# 示例 1:
# 输入: [1,2,3]
# 输出: "onetwothree"
# 解释: 
# 有三个线程会被异步启动。
# 输入 [1,2,3] 表示线程 A 将会调用 one() 方法，线程 B 将会调用 two() 方法，线程 C 将会调用 three() 方法。
# 正确的输出是 "onetwothree"。
# 
# 示例 2:
# 输入: [1,3,2]
# 输出: "onetwothree"
# 解释: 
# 输入 [1,3,2] 表示线程 A 将会调用 one() 方法，线程 B 将会调用 three() 方法，线程 C 将会调用 two() 方法。
# 正确的输出是 "onetwothree"。
# 
# 注意:
# 
# 尽管输入中的数字似乎暗示了顺序，但是我们并不保证线程在操作系统中的调度顺序。
# 
# 你看到的输入格式主要是为了确保测试的全面性。

class Foo:
    def __init__(self):
        pass


    def first(self, printFirst: 'Callable[[], None]') -> None:
        
        # printFirst() outputs "first". Do not change or remove this line.
        printFirst()


    def second(self, printSecond: 'Callable[[], None]') -> None:
        
        # printSecond() outputs "second". Do not change or remove this line.
        printSecond()


    def third(self, printThird: 'Callable[[], None]') -> None:
        
        # printThird() outputs "third". Do not change or remove this line.
        printThird()"put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.__init__('param') == 'expect', 'Case 1'
    assert unit.__init__('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
