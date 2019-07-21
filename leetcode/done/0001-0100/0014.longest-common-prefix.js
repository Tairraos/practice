/**
 * https://leetcode-cn.com/problems/longest-common-prefix/
 * 0014.最长公共前缀
 * 难度：容易
 * 
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1：
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 示例 2：
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 说明：
 * 所有输入只包含小写字母 a-z 。
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) return "";
    return strs.reduce((a, b) => {
        for (let i = 0; i < a.length; i++)
            if (a[i] !== b[i]) return a.slice(0, i); //截字串从0开始到第一处不同的位置
        return a; //找不到不同就把整串返回
    });
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(longestCommonPrefix(["flower", "flow", "flight"]), "fl", "case 1");
assert.deepEqual(longestCommonPrefix(["dog", "racecar", "car"]), "", "case 2");
assert.deepEqual(longestCommonPrefix([]), "", "case 3");
assert.deepEqual(longestCommonPrefix(["aaa"]), "aaa", "case 4");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");