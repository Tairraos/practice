# https://leetcode-cn.com/problems/day-of-the-year/
# 1154.一年中的第几天
# 难度：容易
# 
# 给你一个按 YYYY-MM-DD 格式表示日期的字符串 date，请你计算并返回该日期是当年的第几天。
# 
# 通常情况下，我们认为 1 月 1 日是每年的第 1 天，1 月 2 日是每年的第 2 天，依此类推。每个月的天数与现行公元纪年法（格里高利历）一致。
# 
# 示例 1：
# 输入：date = "2019-01-09"
# 输出：9
# 
# 示例 2：
# 输入：date = "2019-02-10"
# 输出：41
# 
# 示例 3：
# 输入：date = "2003-03-01"
# 输出：60
# 
# 示例 4：
# 输入：date = "2004-03-01"
# 输出：61
# 
# 提示：
# date.length == 10
# date[4] == date[7] == &#39;-&#39;，其他的 date[i] 都是数字。
# date 表示的范围从 1900 年 1 月 1 日至 2019 年 12 月 31 日。


class Solution:
    def dayOfYear(self, date: str) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.dayOfYear('param') == 'expect', 'Case 1'
    assert unit.dayOfYear('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
