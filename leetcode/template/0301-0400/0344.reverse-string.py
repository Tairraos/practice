# https://leetcode-cn.com/problems/reverse-string/
# 0344.反转字符串
# 难度：容易
# 
# 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
# 不要给另外的数组分配额外的空间，你必须[原地](https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)修改输入数组、使用 O(1) 的额外空间解决这一问题。
# 你可以假设数组中的所有字符都是 [ASCII](https://baike.baidu.com/item/ASCII) 码表中的可打印字符。
# 
# 示例 1：
# 输入：["h","e","l","l","o"]
# 输出：["o","l","l","e","h"]
# 
# 示例 2：
# 输入：["H","a","n","n","a","h"]
# 输出：["h","a","n","n","a","H"]

class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.reverseString('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
