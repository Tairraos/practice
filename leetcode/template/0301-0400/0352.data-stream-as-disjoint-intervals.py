# https://leetcode-cn.com/problems/data-stream-as-disjoint-intervals/
# 0352.将数据流变为多个不相交区间
# 难度：困难
# 
# 给定一个非负整数的数据流输入 a1，a2，…，an，…，将到目前为止看到的数字总结为不相交的区间列表。
# 
# 例如，假设数据流中的整数为 1，3，7，2，6，…，每次的总结为：
# [1, 1]
# [1, 1], [3, 3]
# [1, 1], [3, 3], [7, 7]
# [1, 3], [7, 7]
# [1, 3], [6, 7]
# 
# 进阶：
# 如果有很多合并，并且与数据流的大小相比，不相交区间的数量很小，该怎么办?
# 提示：
# 特别感谢 [@yunhong](https://discuss.leetcode.com/user/yunhong) 提供了本问题和其测试用例。

class SummaryRanges:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        

    def addNum(self, val: int) -> None:
        

    def getIntervals(self) -> List[List[int]]:
        


# Your SummaryRanges object will be instantiated and called as such:
# obj = SummaryRanges()
# obj.addNum(val)
# param_2 = obj.getIntervals()"put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.__init__('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
