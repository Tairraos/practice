# https://leetcode-cn.com/problems/fizz-buzz-multithreaded/
# 1195.交替打印字符串
# 难度：中等
# 
# 编写一个可以从 1 到 n 输出代表这个数字的字符串的程序，但是：
# 
# 如果这个数字可以被 3 整除，输出 "fizz"。
# 如果这个数字可以被 5 整除，输出 "buzz"。
# 如果这个数字可以同时被 3 和 5 整除，输出 "fizzbuzz"。
# 
# 例如，当 n = 15，输出： 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz。
# 
# 假设有这么一个类：
# 
# class FizzBuzz {
#   public FizzBuzz(int n) { ... }               // constructor
#   public void fizz(printFizz) { ... }          // only output "fizz"
#   public void buzz(printBuzz) { ... }          // only output "buzz"
#   public void fizzbuzz(printFizzBuzz) { ... }  // only output "fizzbuzz"
#   public void number(printNumber) { ... }      // only output the numbers
# }
# 
# 请你实现一个有四个线程的多线程版  FizzBuzz， 同一个 FizzBuzz 实例会被如下四个线程使用：
# 
# 线程A将调用 fizz() 来判断是否能被 3 整除，如果可以，则输出 fizz。
# 线程B将调用 buzz() 来判断是否能被 5 整除，如果可以，则输出 buzz。
# 线程C将调用 fizzbuzz() 来判断是否同时能被 3 和 5 整除，如果可以，则输出 fizzbuzz。
# 线程D将调用 number() 来实现输出既不能被 3 整除也不能被 5 整除的数字。


class FizzBuzz:
    def __init__(self, n: int):
        self.n = n

    # printFizz() outputs "fizz"
    def fizz(self, printFizz: 'Callable[[], None]') -> None:
    	

    # printBuzz() outputs "buzz"
    def buzz(self, printBuzz: 'Callable[[], None]') -> None:
    	

    # printFizzBuzz() outputs "fizzbuzz"
    def fizzbuzz(self, printFizzBuzz: 'Callable[[], None]') -> None:
		

    # printNumber(x) outputs "x", where x is an integer.
    def number(self, printNumber: 'Callable[[int], None]') -> None:
		
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
