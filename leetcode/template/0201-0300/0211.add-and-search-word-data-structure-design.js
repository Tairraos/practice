/**
 * https://leetcode-cn.com/problems/add-and-search-word-data-structure-design/
 * 0211.添加与搜索单词 - 数据结构设计
 * 难度：中等
 * 
 * 设计一个支持以下两种操作的数据结构：
 * void addWord(word)
 * bool search(word)
 * 
 * search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。 . 可以表示任何一个字母。
 * 
 * 示例：
 * addWord("bad")
 * addWord("dad")
 * addWord("mad")
 * search("pad") -> false
 * search("bad") -> true
 * search(".ad") -> true
 * search("b..") -> true
 * 
 * 说明：
 * 你可以假设所有单词都是由小写字母 a-z 组成的。
 */

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(WordDictionary("参数"), "期望结果");
assert.deepEqual(WordDictionary("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
