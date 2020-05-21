# https://leetcode-cn.com/problems/html-entity-parser/
# 1410.HTML 实体解析器
# 难度：中等
# 
# 「HTML 实体解析器」 是一种特殊的解析器，它将 HTML 代码作为输入，并用字符本身替换掉所有这些特殊的字符实体。
# 
# HTML 里这些特殊字符和它们对应的字符实体包括：
# 
# 双引号：字符实体为 &amp;quot; ，对应的字符是 " 。
# 单引号：字符实体为 &amp;apos; ，对应的字符是 &#39; 。
# 与符号：字符实体为 &amp;amp; ，对应对的字符是 &amp; 。
# 大于号：字符实体为 &amp;gt; ，对应的字符是 > 。
# 小于号：字符实体为 &amp;lt; ，对应的字符是 < 。
# 斜线号：字符实体为 &amp;frasl; ，对应的字符是 / 。
# 
# 给你输入字符串 text ，请你实现一个 HTML 实体解析器，返回解析器解析后的结果。
# 
# 示例 1：
# 输入：text = "&amp;amp; is an HTML entity but &amp;ambassador; is not."
# 输出："&amp; is an HTML entity but &amp;ambassador; is not."
# 解释：解析器把字符实体 &amp;amp; 用 &amp; 替换
# 
# 示例 2：
# 输入：text = "and I quote: &amp;quot;...&amp;quot;"
# 输出："and I quote: \"...\""
# 
# 示例 3：
# 输入：text = "Stay home! Practice on Leetcode :)"
# 输出："Stay home! Practice on Leetcode :)"
# 
# 示例 4：
# 输入：text = "x &amp;gt; y &amp;amp;&amp;amp; x &amp;lt; y is always false"
# 输出："x > y &amp;&amp; x < y is always false"
# 
# 示例 5：
# 输入：text = "leetcode.com&amp;frasl;problemset&amp;frasl;all"
# 输出："leetcode.com/problemset/all"
# 
# 提示：
# 1 <= text.length <= 10^5
# 字符串可能包含 256 个ASCII 字符中的任意字符。


class Solution:
    def entityParser(self, text: str) -> str:
        "put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.entityParser('param') == 'expect', 'Case 1'
    assert unit.entityParser('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
