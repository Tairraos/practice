# https://leetcode-cn.com/problems/student-attendance-record-i/
# 0551.学生出勤记录 I
# 难度：容易
# 
# 给定一个字符串来代表一个学生的出勤记录，这个记录仅包含以下三个字符：
#   - 'A' : Absent，缺勤
#   - 'L' : Late，迟到
#   - 'P' : Present，到场
# 
# 如果一个学生的出勤记录中不超过一个'A'(缺勤)并且不超过两个连续的'L'(迟到),那么这个学生会被奖赏。
# 你需要根据这个学生的出勤记录判断他是否会被奖赏。
# 
# 示例 1：
# 输入: "PPALLP"
# 输出: True
# 
# 示例 2：
# 输入: "PPALLL"
# 输出: False

class Solution:
    def checkRecord(self, s: str) -> bool:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.checkRecord('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')