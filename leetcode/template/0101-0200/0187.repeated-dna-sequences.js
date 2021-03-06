/**
 * https://leetcode-cn.com/problems/repeated-dna-sequences/
 * 0187.重复的DNA序列
 * 难度：中等
 * 
 * 所有 DNA 由一系列缩写为 A，C，G 和 T 的核苷酸组成，例如：“ACGAATTCCG”。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。
 * 编写一个函数来查找 DNA 分子中所有出现超多一次的10个字母长的序列（子串）。
 * 
 * 示例：
 * 输入: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
 * 输出: ["AAAAACCCCC", "CCCCCAAAAA"]
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    
};

// Local test
let assert = require("assert");
console.time("Time cost");

assert.deepEqual(findRepeatedDnaSequences("param"), "expect", "Case 1");
assert.deepEqual(findRepeatedDnaSequences("param"), "expect", "Case 2");

console.log("Good job! We have passed all test case.");
console.timeEnd("Time cost");
