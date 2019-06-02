/**
 * https://leetcode-cn.com/problems/restore-ip-addresses/
 * 0093.复原IP地址
 * 难度：中等
 * 
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
 * 
 * 示例：
 * 输入: "25525511135"
 * 输出: ["255.255.11.135", "255.255.111.35"]
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(restoreIpAddresses("param"), "expect", "caseName");
assert.deepEqual(restoreIpAddresses("param"), "expect", "caseName");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");
