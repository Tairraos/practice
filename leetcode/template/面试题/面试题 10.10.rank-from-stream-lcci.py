# https://leetcode-cn.com/problems/rank-from-stream-lcci/
# 面试题 10.10.数字流的秩
# 难度：中等
# 
# 假设你正在读取一串整数。每隔一段时间，你希望能找出数字 x 的秩(小于或等于 x 的值的个数)。请实现数据结构和算法来支持这些操作，也就是说：
# 
# 实现 track(int x) 方法，每读入一个数字都会调用该方法；
# 
# 实现 getRankOfNumber(int x) 方法，返回小于或等于 x 的值的个数。
# 
# 注意：本题相对原题稍作改动
# 
# 示例:
# 输入:
# ["StreamRank", "getRankOfNumber", "track", "getRankOfNumber"]
# [[], [1], [0], [0]]
# 输出:
# [null,0,null,1]
# 
# 提示：
# x <= 50000
# track 和 getRankOfNumber 方法的调用次数均不超过 2000 次


class StreamRank:

    def __init__(self):


    def track(self, x: int) -> None:


    def getRankOfNumber(self, x: int) -> int:



# Your StreamRank object will be instantiated and called as such:
# obj = StreamRank()
# obj.track(x)
# param_2 = obj.getRankOfNumber(x)
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
