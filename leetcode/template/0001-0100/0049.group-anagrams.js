/**
 * https://leetcode-cn.com/problems/group-anagrams/
 * 0049.字母异位词分组
 * 难度：中等
 * 
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 
 * 示例：
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * 输出：
 * [
 *   ["ate","eat","tea"],
 *   ["nat","tan"],
 *   ["bat"]
 * ]
 * 
 * 说明：
 *   - 所有输入均为小写字母。
 *   - 不考虑答案输出的顺序。
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
