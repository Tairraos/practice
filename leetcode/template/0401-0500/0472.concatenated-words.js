/**
 * https://leetcode-cn.com/problems/concatenated-words/
 * 0472.连接词
 * 难度：困难
 * 
 * 给定一个不含重复单词的列表，编写一个程序，返回给定单词列表中所有的连接词。
 * 连接词的定义为：一个字符串完全是由至少两个给定数组中的单词组成的。
 * 
 * 示例：
 * 输入: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
 * 
 * 输出: ["catsdogcats","dogcatsdog","ratcatdogcat"]
 * 
 * 解释: "catsdogcats"由"cats", "dog" 和 "cats"组成;
 *      "dogcatsdog"由"dog", "cats"和"dog"组成;
 *      "ratcatdogcat"由"rat", "cat", "dog"和"cat"组成。
 * 
 * 说明：
 *   - 给定数组的元素总数不超过 10000。
 *   - 给定数组中元素的长度总和不超过 600000。
 *   - 所有输入字符串只包含小写字母。
 *   - 不需要考虑答案输出的顺序。
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(findAllConcatenatedWordsInADict("参数"), "期望结果");
assert.deepEqual(findAllConcatenatedWordsInADict("参数"), "期望结果");

console.log("哈哈哈哈，所有Case都通过了");
console.timeEnd("leetcode");
