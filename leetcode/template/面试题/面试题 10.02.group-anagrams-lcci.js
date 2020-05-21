/**
 * https://leetcode-cn.com/problems/group-anagrams-lcci/
 * 面试题 10.02.变位词组
 * 难度：中等
 * 
 * 编写一种方法，对字符串数组进行排序，将所有变位词组合在一起。变位词是指字母相同，但排列不同的字符串。
 * 
 * 注意：本题相对原题稍作修改
 * 
 * 示例:
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * 输出:
 * [
 *   ["ate","eat","tea"],
 *   ["nat","tan"],
 *   ["bat"]
 * ]
 * 
 * 说明：
 * 
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(groupAnagrams("param"), "expect", "Case 1");
assert.deepEqual(groupAnagrams("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
