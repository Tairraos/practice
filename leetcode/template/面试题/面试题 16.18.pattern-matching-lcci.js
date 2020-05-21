/**
 * https://leetcode-cn.com/problems/pattern-matching-lcci/
 * 面试题 16.18.模式匹配
 * 难度：中等
 * 
 * 你有两个字符串，即pattern和value。 pattern字符串由字母"a"和"b"组成，用于描述字符串中的模式。例如，字符串"catcatgocatgo"匹配模式"aabab"（其中"cat"是"a"，"go"是"b"），该字符串也匹配像"a"、"ab"和"b"这样的模式。但需注意"a"和"b"不能同时表示相同的字符串。编写一个方法判断value字符串是否匹配pattern字符串。
 * 示例 1：
 * 输入： pattern = "abba", value = "dogcatcatdog"
 * 输出： true
 * 
 * 示例 2：
 * 输入： pattern = "abba", value = "dogcatcatfish"
 * 输出： false
 * 
 * 示例 3：
 * 输入： pattern = "aaaa", value = "dogcatcatdog"
 * 输出： false
 * 
 * 示例 4：
 * 输入： pattern = "abba", value = "dogdogdogdog"
 * 输出： true
 * 解释： "a"="dogdog",b=""，反之也符合规则
 * 
 * 提示：
 * 0 
 * 0 
 * 你可以假设pattern只包含字母"a"和"b"，value仅包含小写字母。
 */

/**
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
var patternMatching = function(pattern, value) {

};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(patternMatching("param"), "expect", "Case 1");
assert.deepEqual(patternMatching("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
