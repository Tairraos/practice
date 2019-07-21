# https://leetcode-cn.com/problems/excel-sheet-column-number/
# 0171.Excel表列序号
# 难度：容易
# 
# 给定一个Excel表格中的列名称，返回其相应的列序号。
# 
# 例如，
#     A -> 1
#     B -> 2
#     C -> 3
#     ...
#     Z -> 26
#     AA -> 27
#     AB -> 28
#     ...
# 
# 示例 1：
# 输入: "A"
# 输出: 1
# 
# 示例 2：
# 输入: "AB"
# 输出: 28
# 
# 示例 3：
# 输入: "ZY"
# 输出: 701
# 致谢：
# 特别感谢 [@ts](http://leetcode.com/discuss/user/ts) 添加此问题并创建所有测试用例。

class Solution:
    def titleToNumber(self, s: str) -> int:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.titleToNumber('param') == 'expect', 'Case 1'
    assert unit.titleToNumber('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
