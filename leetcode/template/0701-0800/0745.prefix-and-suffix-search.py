# https://leetcode-cn.com/problems/prefix-and-suffix-search/
# 0745.前缀和后缀搜索
# 难度：困难
# 
# 给定多个 words，words[i] 的权重为 i 。
# 设计一个类 WordFilter 实现函数WordFilter.f(String prefix, String suffix)。这个函数将返回具有前缀 prefix 和后缀suffix 的词的最大权重。如果没有这样的词，返回 -1。
# 例子：
# 输入：
# WordFilter(["apple"])
# WordFilter.f("a", "e") // 返回 0
# WordFilter.f("b", "") // 返回 -1
# 
# 注意：
#   - words的长度在[1, 15000]之间。
#   - 对于每个测试用例，最多会有words.length次对WordFilter.f的调用。
#   - words[i]的长度在[1, 10]之间。
#   - prefix, suffix的长度在[0, 10]之前。
#   - words[i]和prefix, suffix只包含小写字母。


from typing import *


class WordFilter:

    def __init__(self, words: List[str]):
        

    def f(self, prefix: str, suffix: str) -> int:
        


# Your WordFilter object will be instantiated and called as such:
# obj = WordFilter(words)
# param_1 = obj.f(prefix,suffix)
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
