# https://leetcode-cn.com/problems/repeated-dna-sequences/
# 0187.重复的DNA序列
# 难度：中等
# 
# 所有 DNA 由一系列缩写为 A，C，G 和 T 的核苷酸组成，例如：“ACGAATTCCG”。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。
# 编写一个函数来查找 DNA 分子中所有出现超多一次的10个字母长的序列（子串）。
# 
# 示例：
# 输入: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
# 输出: ["AAAAACCCCC", "CCCCCAAAAA"]

class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.findRepeatedDnaSequences('param') == 'expect', 'Case 1'
    assert unit.findRepeatedDnaSequences('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
