# https://leetcode-cn.com/problems/excel-sheet-column-title/
# 0168.Excel表列名称
# 难度：容易
# 
# 给定一个正整数，返回它在 Excel 表中相对应的列名称。
# 
# 例如，
#     1 -> A
#     2 -> B
#     3 -> C
#     ...
#     26 -> Z
#     27 -> AA
#     28 -> AB
#     ...
# 
# 示例 1：
# 输入: 1
# 输出: "A"
# 
# 示例 2：
# 输入: 28
# 输出: "AB"
# 
# 示例 3：
# 输入: 701
# 输出: "ZY"

class Solution:
    def convertToTitle(self, n: int) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.convertToTitle('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
