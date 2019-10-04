# https://leetcode-cn.com/problems/range-module/
# 0715.Range 模块
# 难度：困难
# 
# Range 模块是跟踪数字范围的模块。你的任务是以一种有效的方式设计和实现以下接口。
#   - addRange(int left, int right) 添加半开区间 [left, right)，跟踪该区间中的每个实数。添加与当前跟踪的数字部分重叠的区间时，应当添加在区间 [left, right) 中尚未跟踪的任何数字到该区间中。
#   - queryRange(int left, int right) 只有在当前正在跟踪区间 [left, right) 中的每一个实数时，才返回 true。
#   - removeRange(int left, int right) 停止跟踪区间 [left, right) 中当前正在跟踪的每个实数。
# 
# 示例：
# addRange(10, 20): null
# removeRange(14, 16): null
# queryRange(10, 14): true （区间 [10, 14) 中的每个数都正在被跟踪）
# queryRange(13, 15): false （未跟踪区间 [13, 15) 中像 14, 14.03, 14.17 这样的数字）
# queryRange(16, 17): true （尽管执行了删除操作，区间 [16, 17) 中的数字 16 仍然会被跟踪）
# 
# 提示：
#   - 半开区间 [left, right) 表示所有满足 left <= x < right 的实数。
#   - 对 addRange, queryRange, removeRange 的所有调用中 0 < left < right < 10^9。
#   - 在单个测试用例中，对 addRange 的调用总数不超过 1000 次。
#   - 在单个测试用例中，对  queryRange 的调用总数不超过 5000 次。
#   - 在单个测试用例中，对 removeRange 的调用总数不超过 1000 次。


class RangeModule:

    def __init__(self):
        

    def addRange(self, left: int, right: int) -> None:
        

    def queryRange(self, left: int, right: int) -> bool:
        

    def removeRange(self, left: int, right: int) -> None:
        


# Your RangeModule object will be instantiated and called as such:
# obj = RangeModule()
# obj.addRange(left,right)
# param_2 = obj.queryRange(left,right)
# obj.removeRange(left,right)
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
