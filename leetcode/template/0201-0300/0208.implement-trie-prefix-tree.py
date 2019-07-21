# https://leetcode-cn.com/problems/implement-trie-prefix-tree/
# 0208.实现 Trie (前缀树)
# 难度：中等
# 
# 实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。
# 
# 示例：
# Trie trie = new Trie();
# 
# trie.insert("apple");
# trie.search("apple");   // 返回 true
# trie.search("app");     // 返回 false
# trie.startsWith("app"); // 返回 true
# trie.insert("app");
# trie.search("app");     // 返回 true
# 
# 说明：
#   - 你可以假设所有的输入都是由小写字母 a-z 构成的。
#   - 保证所有输入均为非空字符串。

class Trie:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        

    def insert(self, word: str) -> None:
        """
        Inserts a word into the trie.
        """
        

    def search(self, word: str) -> bool:
        """
        Returns if the word is in the trie.
        """
        

    def startsWith(self, prefix: str) -> bool:
        """
        Returns if there is any word in the trie that starts with the given prefix.
        """
        


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)"put solution here"


# Local test
if __name__ == '__main__':
    import time
    launch_start = time.time()
    unit = Solution()

    assert unit.__init__('param') == 'expect', 'Case 1'
    assert unit.__init__('param') == 'expect', 'Case 2'

    print('Good job! We have passed all test case.')
    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')
