# https://leetcode-cn.com/problems/reconstruct-original-digits-from-english/
# 0423.从英文中重建数字
# 难度：中等
# 
# 给定一个非空字符串，其中包含字母顺序打乱的英文单词表示的数字0-9。按升序输出原始的数字。
# 
# 注意：
#   - 输入只包含小写英文字母。
#   - 输入保证合法并可以转换为原始的数字，这意味着像 "abc" 或 "zerone" 的输入是不允许的。
#   - 输入字符串的长度小于 50,000。
# 
# 示例 1：
# 输入: "owoztneoer"
# 输出: "012" (zeroonetwo)
# 
# 示例 2：
# 输入: "fviefuro"
# 输出: "45" (fourfive)


class Solution:
    def originalDigits(self, s: str) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.originalDigits('param') == 'expect', 'Case 1'
    assert unit.originalDigits('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
