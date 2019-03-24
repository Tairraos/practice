/**
 * https://leetcode-cn.com/problems/implement-trie-prefix-tree/
 * 0208.实现 Trie (前缀树)
 * 难度：中等
 * 
 * 实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。
 * 
 * 示例：
 * Trie trie = new Trie();
 * 
 * trie.insert("apple");
 * trie.search("apple");   // 返回 true
 * trie.search("app");     // 返回 false
 * trie.startsWith("app"); // 返回 true
 * trie.insert("app");
 * trie.search("app");     // 返回 true
 * 
 * 说明：
 *   - 你可以假设所有的输入都是由小写字母 a-z 构成的。
 *   - 保证所有输入均为非空字符串。
 */

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(Trie("参数"), "期望结果");
assert.deepEqual(Trie("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
