# https://leetcode-cn.com/problems/unique-morse-code-words/
# 0804.唯一摩尔斯密码词
# 难度：容易
# 
# 国际摩尔斯密码定义一种标准编码方式，将每个字母对应于一个由一系列点和短线组成的字符串， 比如: "a" 对应 ".-", "b" 对应 "-...", "c" 对应 "-.-.", 等等。
# 为了方便，所有26个英文字母对应摩尔斯密码表如下：
# [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
# 给定一个单词列表，每个单词可以写成每个字母对应摩尔斯密码的组合。例如，"cab" 可以写成 "-.-..--..."，(即 "-.-." + "-..." + ".-"字符串的结合)。我们将这样一个连接过程称作单词翻译。
# 返回我们可以获得所有词不同单词翻译的数量。
# 
# 例如：
# 输入: words = ["gin", "zen", "gig", "msg"]
# 输出: 2
# 解释：
# 各单词翻译如下：
# "gin" -> "--...-."
# "zen" -> "--...-."
# "gig" -> "--...--."
# "msg" -> "--...--."
# 共有 2 种不同翻译, "--...-." 和 "--...--.".
# 
# 注意：
#   - 单词列表words 的长度不会超过 100。
#   - 每个单词 words[i]的长度范围为 [1, 12]。
#   - 每个单词 words[i]只包含小写字母。

class Solution:
    def uniqueMorseRepresentations(self, words: List[str]) -> int:
        

# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.uniqueMorseRepresentations('param') == 'expect', '1st example'

    print('Good job! We have passed all test case in ' + str(int((time.time() - launch_start) * 1000)) + 'ms')
