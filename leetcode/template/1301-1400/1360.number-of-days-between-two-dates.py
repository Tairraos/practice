# https://leetcode-cn.com/problems/number-of-days-between-two-dates/
# 1360.日期之间隔几天
# 难度：容易
# 
# 请你编写一个程序来计算两个日期之间隔了多少天。
# 
# 日期以字符串形式给出，格式为 YYYY-MM-DD，如示例所示。
# 
# 示例 1：
# 输入：date1 = "2019-06-29", date2 = "2019-06-30"
# 输出：1
# 
# 示例 2：
# 输入：date1 = "2020-01-15", date2 = "2019-12-31"
# 输出：15
# 
# 提示：
# 给定的日期是 1971 年到 2100 年之间的有效日期。


class Solution:
    def daysBetweenDates(self, date1: str, date2: str) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.daysBetweenDates('param') == 'expect', 'Case 1'
    assert unit.daysBetweenDates('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')